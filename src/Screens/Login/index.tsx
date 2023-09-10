import React from 'react'
import { Text, View } from 'react-native';
import { Container, Content, Title, TextField, Subtitle, Fields, ButtonsField } from './styles';
import { Input } from '@assets/Input'
import { CustomButton } from '@assets/Button';

export function Login(){
    return(
        <Container>
            <Content>
                <View>
                    <Title>
                        Acesse 
                    </Title>
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
                    
                    <View style={{marginTop: 70}}>
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
                  
                    
                </Fields>
            </Content>
        </Container>
    )
}

  