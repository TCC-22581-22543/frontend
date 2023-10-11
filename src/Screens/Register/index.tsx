import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Container, Content, InputView, GoogleSignUpButton } from './styles';
import { Input } from '@assets/Input';
import { CustomButton } from '@assets/Button';
import Checkbox from "expo-checkbox"
import { GoogleIcon } from '@assets/IconFiles/googleIcon';
import { useAuth } from '@Hooks/auth';

export default function Register(){
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [perfil, setPerfil] = useState('')
    const [passwordError, setPasswordError] = useState<string | any>(null);
    const [error, setError] = useState<boolean>(false);
    const [fieldsError, setFieldsError] = useState<boolean>(false);

    const { register } = useAuth();

    useEffect(() => {
        if(!name || !email || !password || !perfil || isChecked == true){
            setFieldsError(true);              
        }else{
            setFieldsError(false);
        }
    }, [name, email, password, perfil])

    function arePasswordsMatching() {
        return password === checkPassword;
    }

    const registerUser = async () => { 

        if (!arePasswordsMatching()) {
            setPasswordError('As senhas não são iguais.');
            Alert.alert(passwordError);
            return;
        } else {
            setPasswordError(null);
        }

        try {
            const request = await register({
                name, 
                email, 
                password,
                perfil
            });

            console.log(request);

        } catch (error) {
            console.log(error);
            setError(true);
        }
    }
    
    
    return(
        <Container>
            <ScrollView>
            <Content>
                <View style={{marginVertical: 32}}>
                    <Text style={{fontSize: 18 , marginVertical: 2, fontFamily: 'Poppins_700Bold'}}>
                        Registre-se gratuitamente!
                    </Text>

                    <Text>Aqui você pode realizar o seu cadastro</Text>
                </View> 

                <InputView>
                    <Text>Nome</Text>
                    <Input
                        height={46}
                        width={320}
                        onChangeText={setName}
                    />
                    
                </InputView>
                
                <InputView>
                    <Text>Email</Text>
                    <Input
                        height={46}
                        width={320}
                        onChangeText={setEmail}
                    />
                    
                </InputView>

                <InputView>
                    <Text>Senha</Text>
                    <Input
                        height={46}
                        width={320}
                        mask={true}
                        onChangeText={setPassword}
                    />
                    
                </InputView>
                
                <InputView>
                    <Text>Confirme a senha</Text>
                    <Input
                        height={40}
                        width={320}
                        mask={true}
                        onChangeText={(c) => setCheckPassword(c)}
                    />
                </InputView>

                <InputView>
                    <Text>Perfil</Text>
                    <Input
                        height={40}
                        width={320}
                        onChangeText={setPerfil}                   
                    />
                    <Text>(ex: Estudante, Desenvolvedor, ETC)</Text>
                </InputView>

                

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8, marginBottom: 20 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? '#5abec8' : undefined}
                    />

                    <Text>I aggree to the terms and conditions</Text>
                </View>

                <CustomButton 
                    title='Registrar'
                    fontSize={22}
                    disabled={fieldsError ? true : false} 
                    style={{
                        width: '90%',
                        height: 60,
                        paddingBottom: 12,
                        paddingVertical: 10,
                        borderRadius: 16,
                        alignSelf: 'center',
                    }}
                    onPress={registerUser}
                />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: 'grey',
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Outras opções de registro</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: 'grey',
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <GoogleSignUpButton>
                <Text style={{fontSize: 20, fontFamily: 'Poppins_500Medium'}}>Entrar com Google</Text>
                    <GoogleIcon/>
                </GoogleSignUpButton>
            </Content>
            </ScrollView>
        </Container>     
    )
}