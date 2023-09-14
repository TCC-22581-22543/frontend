import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Container, Content, InputView, GoogleSignUpButton } from './styles';
import { Input } from '@assets/Input';
import { CustomButton } from '@assets/Button';
import Checkbox from "expo-checkbox"
import { GoogleIcon } from '@assets/IconFiles/googleIcon';

export default function Register(){
    const [isChecked, setIsChecked] = useState(false);
    
    return(
        <Container>
            <Content>
                <View style={{marginVertical: 32}}>
                    <Text style={{fontSize: 18 , marginVertical: 2, fontFamily: 'Poppins_700Bold'}}>
                        Registre-se gratuitamente!
                    </Text>

                    <Text>Aqui você pode realizar o seu cadastro</Text>
                </View> 
                
                <InputView>
                    <Text>Email</Text>
                    <Input
                        height={46}
                        width={320}
                    />
                </InputView>

                <InputView>
                    <Text>Senha</Text>
                    <Input
                        height={46}
                        width={320}
                        mask={true}
                    />
                </InputView>
                
                <InputView>
                    <Text>Confirme a senha</Text>
                    <Input
                        height={40}
                        width={320}
                        mask={true}
                    />
                </InputView>
                <InputView>
                    <Text>Perfil</Text>
                    <Input
                        height={40}
                        width={320}                     
                    />
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
                    style={{
                        width: '90%',
                        height: 60,
                        paddingBottom: 12,
                        paddingVertical: 10,
                        borderRadius: 16,
                        alignSelf: 'center',
                    }}
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
        </Container>     
    )
}