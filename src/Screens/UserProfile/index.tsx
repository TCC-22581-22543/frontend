import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AccountDetailsText, Container, Content, GoBackView, InfoText, InfoText2, Informations, UserInfo } from './styles';
import ProfilePhoto from '@assets/ProfilePhoto';
import { AntDesign } from '@expo/vector-icons';

export default function UserProfile(){
    return(
        <Container>
            <Content>

            <GoBackView>
                <AntDesign name="left" size={25} color={'white'}/>
                <Text style={{color: 'white', fontSize: 15, marginTop: 2}}>Voltar</Text>
            </GoBackView>

                <View style={{alignItems: 'center'}}>
                    <ProfilePhoto />
                    <Text style={{
                            fontSize: 30, 
                            fontFamily: 'Poppins_700Bold',
                            marginTop: 10,
                            color: '#fff',
                        }}>Nome do Usuário</Text>
                </View>

                <View style={{borderColor: 'white', borderWidth: 1}}/>

                 <AccountDetailsText>Detalhes da Conta</AccountDetailsText>       
                <UserInfo>
                        <Informations>
                            <InfoText>Data de Nascimento:</InfoText>
                            <InfoText2>19/08/2000</InfoText2>
                        </Informations>

                        <Informations>
                            <InfoText>País:</InfoText>
                            <InfoText2>Brasil</InfoText2>
                        </Informations>

                        <Informations>
                            <InfoText>Anotações Realizadas:</InfoText>
                            <InfoText2>12</InfoText2>
                        </Informations>

                        <Informations>
                            <InfoText>Perfil de Usuário:</InfoText>
                            <InfoText2>Estudante</InfoText2>
                        </Informations>

                        <TouchableOpacity style={{marginTop: 50}}>
                            <Text style={{fontFamily: 'Poppins_700Bold', color: 'red'}}>
                                Deletar Conta
                            </Text>
                        </TouchableOpacity>
                </UserInfo>
            </Content>
        </Container>
    )
}