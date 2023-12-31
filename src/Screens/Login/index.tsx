import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View} from 'react-native';
import { Container, Content, Title, TextField, Subtitle, Fields, TitleView, GoogleAuthenticateButton, ErrorMessage } from './styles';
import { Input } from '@assets/Input';
import { CustomButton } from '@assets/Button';
import { InconPrincipal } from '@assets/IconFiles';
import { GoogleIcon } from '@assets/IconFiles/googleIcon';
import { authService } from '@utils/api'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Hooks/auth';

type RootStackParamList = {
    Main: undefined;
    Detail: { itemId: number };
};

export function Login(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [inputContent, setInputContent] = useState(false);
    const [userNotFound, setUserNotFound] = useState(false);
    const [loadingCircle, setLoadingCircle] = useState(false);

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
    useEffect(() => {
        if(!email || !password){
            setInputContent(false);              
        }else{
            setInputContent(true); 
        }
    }, [email, password]);


    const { signIn } = useAuth();

    const handleLogin = async () => {
        setLoadingCircle(true);
        try {

            const response = await authService.authenticate({
                email: email,
                password: password,
            });

            console.log(response.data);

           await signIn({email, password});  
        } catch (error) {
            setUserNotFound(true);
            setTimeout(() => {
                setUserNotFound(false);
            }, 8000);    
            console.error("Erro", error);
        }

        setLoadingCircle(false);
    };
    return(
        <Container>
            <Content>
                <View>
                    <TitleView>
                        <Title>
                            Acesse
                        </Title>
                        <InconPrincipal/>
                    </TitleView>
                    
                    <Subtitle>Com email e senha para entrar</Subtitle>
                </View>
                <Fields>

                    <View style={{marginBottom: 50}}>
                        <TextField>Digite seu email</TextField>
                        <Input 
                            width={320} 
                            height={55} 
                            placeholder='Email'
                            onChangeText={(e: string) => setEmail(e)}                        
                        />
                    </View>

                    <View>
                        <TextField>Digite sua senha</TextField>
                        <Input 
                            width={320} 
                            height={55} 
                            placeholder='Senha'
                            mask={true} 
                            onChangeText={(p: string) => setPassword(p)}
                        />
                    </View>

                    <ErrorMessage>{userNotFound ? 'Usuario inexistente!' : ''}</ErrorMessage>
                    
                    <View style={{marginTop: 60, alignItems: 'center', }}>
                        <CustomButton
                            style={{marginBottom: 20, width: 300, height: 60}}
                            title={loadingCircle ? <ActivityIndicator size={40} color="white" /> : 'Login'}
                            fontSize={20}
                            onPress={handleLogin}
                            disabled={inputContent ? false : true}
                        />

                        <CustomButton
                        style={{width: 300, height: 60}}
                            title={'Registro'}
                            fontSize={20}
                            onPress={() => navigation.navigate('Register' as any)}
                        />
                    </View>
                    <GoogleAuthenticateButton>
                        <Text style={{fontSize: 20}}>Entrar com Google</Text>
                        <GoogleIcon/>
                    </GoogleAuthenticateButton>
                </Fields>
            </Content>
        </Container>
    )
}

  