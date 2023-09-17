import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Content, Container, Title, Headers, InputView } from "./styles";
import { CustomButton } from '@assets/Button';
import { Input } from '@assets/Input';

export  function Pesquisar(){

    return(
        <Container>
            <Headers>
                <CustomButton title={"Sair"}
                    backgroundColor={'#OAOAOA'}/>
            </Headers>
            <Content>
                <Title>Pesquisar Espécies</Title>
                <InputView>
                    <Input
                       style={{ backgroundColor: 'transparent',  borderColor: '#10C3FC', color:'white'}}
                        height={50}
                        width={350}
                        placeholder={'Pesquisar'}
                    />
                </InputView>
                <CustomButton title={"Pesquisar"}
                style={{marginTop: 36, backgroundColor: '#10C3FC'}}
                fontSize={14}/>

            </Content>
        </Container>
    );
}