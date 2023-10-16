import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AccountDetailsText, Container, Content, GoBackView, InfoText, InfoText2, Informations, UserInfo } from './styles';
import ProfilePhoto from '@assets/ProfilePhoto';
import { AntDesign } from '@expo/vector-icons';
import api, { authService } from '@utils/api';
import { useAuth } from '@Hooks/auth';

interface UserData{
    id: string;
    nome: string;
    perfil: string;
}

export default function UserProfile(){

    const [userInfos, setUserInfos] = useState<UserData>();

    const { user } = useAuth();

    useEffect(() => {
        async function fetchUser(){
            try {

                if (!user || !user.id) {
                    throw new Error("User ID is not available");
                }
                               
                const response = await authService.userInfo(user.id);
                
                const userData = response.data.userFound;

                setUserInfos({
                    id: userData._id,
                    nome: userData.nome,
                    perfil: userData.perfil
                });

            } catch (error) {
                console.log(error);
            }
        }

        fetchUser();
    },[])

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
                        }}>{userInfos?.nome}</Text>
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
                            <InfoText2>{userInfos?.perfil}</InfoText2>
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