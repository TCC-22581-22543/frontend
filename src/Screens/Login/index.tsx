import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Title, TextField, Subtitle, Fields, TitleView, GoogleAuthenticateButton } from './styles';
import { Input } from '@assets/Input';
import { CustomButton } from '@assets/Button';
import { InconPrincipal } from '@assets/IconFiles';
import { GoogleIcon } from '@assets/IconFiles/googleIcon';


export function Login(){
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
                        <Input width={320} height={55} placeholder='Email'/>
                    </View>

                    <View>
                        <TextField>Digite sua senha</TextField>
                        <Input width={320} height={55} placeholder='Senha'/>
                    </View>
                    
                    <View style={{marginTop: 70, alignItems: 'center'}}>
                        <CustomButton
                        style={{marginBottom: 20, width: 300, height: 60}}
                            title={'Login'}
                            fontSize={20}
                        />

                        <CustomButton
                        style={{width: 300, height: 60}}
                            title={'Registro'}
                            fontSize={20}
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

  