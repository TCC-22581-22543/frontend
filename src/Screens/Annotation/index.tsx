import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Title, Subtitle, ContentText, ButtonAdd, ContentButton, Headers } from "./styles";
import { CustomButton } from '@assets/Button';

export function Annotation(){
   return(
    <Container>
        <Headers>
            <CustomButton title={"Voltar"}
            backgroundColor={'#OAOAOA'}/>
         </Headers>
        <Content>
           <ContentText>
                <Title>Nenhuma Anotação</Title>
                <Subtitle>Toque no botão Adicionar para criar uma anotação</Subtitle>
            </ContentText>
            <ButtonAdd>
                    <Text style={{fontSize: 36, color: 'white'}}>+</Text>
            </ButtonAdd>
        </Content>
    </Container>
   );
}