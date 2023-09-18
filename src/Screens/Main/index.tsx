import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Container, Content, Headers,ContentMenu, ButtonMenu, Title, TitleButton, Subtitle, Description} from './styles';
import { InconPrincipal } from '@assets/IconFiles';
import { CustomButton } from '@assets/Button';

export  function Main(){

    return(
       
        <Container>
            <Headers>
                  <View style={{ }}>
                    <InconPrincipal/>
                  </View>
                  <View style={{}}>
                    <CustomButton title={"Sair"}
                    backgroundColor={'#OAOAOA'}/>
                  </View>
               </Headers>
            <Content>
             <Title>Bem Vindo(a), usuário!</Title>
                <Subtitle>Aqui você já pode começar a navegar pelo simulador e encontrar o que precisa!</Subtitle>
                <ContentMenu>
                <ButtonMenu>
                    <TitleButton>Pesquisar</TitleButton>
                    <Description>Comece a pesquisar sobre a evolução das espécies</Description>
                </ButtonMenu>
                <ButtonMenu>
                    <TitleButton>Anotações</TitleButton>
                    <Description>Veja ou anote alguma coisa sobre o que descobriu</Description>
                </ButtonMenu>
                </ContentMenu>
                <ContentMenu>
                <ButtonMenu>
                    <TitleButton>Sua conta</TitleButton>
                    <Description>Detalhes sobre sua conta</Description>
                </ButtonMenu>
                <ButtonMenu>
                    <TitleButton>Consultas</TitleButton>
                    <Description>Verifique as ultimas consultas realizadas</Description>
                </ButtonMenu>
                </ContentMenu>
                
            </Content>
        </Container>
    );

}