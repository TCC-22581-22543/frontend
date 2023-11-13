import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import api, { authService } from '@utils/api';
import jwtDecode, * as jwt_decode from 'jwt-decode';
import { Alert } from 'react-native';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    token: string;
    name: string;
    email: string;
}

interface AuthContextData {
 user: User | null;
 loading: boolean;
 signIn: (credentials: SignInCredentials) => Promise<User>;
 signOut: () => void;
 autoLogout: () => void;
 register: (registerData: RegisterData) => Promise<User>;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    perfil: string;
}
  
interface SignInCredentials {
    email: string;
    password: string;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children} : AuthProviderProps){
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove([
            '@TCC:token',
            '@TCC:user'
        ]);  
        setUserData(null);      
    }, []);  

    function autoLogout(){
        Alert.alert(" ","Sua sessão expirou, faça o login novamente para continuar", [
            {text: 'Ok', onPress: () => signOut()},
        ],
            {cancelable: false}
        )
    }

    async function signIn({email, password}: SignInCredentials): Promise<User>{
        
        try {
            const response = await authService.authenticate({email, password});
            const auth = response.data;
    
            if (auth.token && auth.user) {
                await AsyncStorage.multiSet([
                    ['@TCC:token', auth.token],
                    ['@TCC:user', JSON.stringify(auth.user)],
                ]);
    
                setUserData({
                    id: auth.user.id,
                    email: auth.user.email, 
                    name: auth.user.nome,  
                    token: auth.token  
                });
    
                api.interceptors.request.use((config) => {
                    if (config && config.headers) {
                        config.headers.Authorization = auth.token 
                    }
                    return config;
                });
            }
            
            setLoading(false);
            return auth;
    
        } catch (error) {
            console.error("Erro durante signIn:", error);
            throw error;
        }
    }
    

    async function register(registerData: RegisterData): Promise<User> {
        try {
          
          const response = await authService.signUp(registerData); 
      
          const user = response.data;
    
          signIn({ email: registerData.email, password: registerData.password });
      
          return user;
        } catch (error) {
          console.error(error);
          throw error;
        }
    }
          
    useEffect(() => {
        async function loadStoragedData(): Promise<void> {
            try {
                
                const [
                  token,
                  user,
                ] = await AsyncStorage.multiGet([
                    '@TCC:token',
                    '@TCC:user'
                ]);
      
          
                if (!token[1] || !user[1]) {
                    return;
                };          
                
                let validToken = token[1];
    
                const decoded : any = jwtDecode(validToken);
    
                const now = new Date();
                const expirationDate = new Date(Number(decoded.exp * 1000))
    
                if (token && now > expirationDate) {              
                    setLoading(false);
                    signOut();                                                             
                    return;
                }
      
                api.interceptors.request.use((config) => {
                    if (config && config.headers) {
                        config.headers.Authorization = validToken
                    }
                    return config;
                });
      
                const userFormatted = JSON.parse(user[1]); 
                  
                setUserData({
                    token: validToken,
                    id: userFormatted.id,
                    name: userFormatted.nome,
                    email: userFormatted.email,
                });
          
                setLoading(false);

            } catch (error) {
                console.log(error);
                setLoading(false);
            }   
        }  
        setLoading(false);
        loadStoragedData();      
    }, [signOut]);

    
    return(
        <AuthContext.Provider value={{
            user: userData,
            loading,
            signIn, 
            signOut,
            register,
            autoLogout
        }}>
            {children}
        </AuthContext.Provider> 
    )
}

function useAuth(){
    const context = useContext(AuthContext); //criando o hook e inserindo o authContext 
    return context;
}

export { useAuth, AuthProvider }