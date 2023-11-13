import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { AccountDetailsText, Container, Content, GoBackView, InfoText, InfoText2, Informations, UserInfo } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { authService } from '@utils/api';
import { useAuth } from '@Hooks/auth';
import ProfilePhoto from '@assets/ProfilePhoto';
import { useNavigation } from "@react-navigation/native";

interface UserData{
    id: string;
    nome: string;
    perfil: string;
}

export default function UserProfile(){
    const navigation = useNavigation();

    const [userInfos, setUserInfos] = useState<UserData>();
    const [notes, setNotes] = useState(0);

    const { user, signOut } = useAuth();

    async function deleteAccount() {
          Alert.alert(
            'Confirmar Exclusão',
            'Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.',
            [
              {
                text: 'Cancelar',
                style: 'cancel',
              },
              {
                text: 'Excluir',
                onPress: async () => {
                  try {
                    await authService.deleteAccount(user?.id);
                    return signOut();
                  } catch (error) {
                    console.error('Erro ao excluir conta');
                  }
                },
              },
            ]
        );
    }

    useEffect(() => {
        async function fetchUser(){
            try {

                if (!user || !user.id) {
                    throw new Error("User ID is not available");
                }
                               
                const response = await authService.userInfo(user.id);
                const noteNumber = await authService.returnAnotationsCount(user?.token);
                
                const userData = response.data.userFound;
                const count = noteNumber.data.count;
                setNotes(count);
                console.log(count)

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
    },[]);


    return(
        <Container>
            <Content>

            <GoBackView  onPress={() => navigation.navigate("Main" as never)}>
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
                            <InfoText>ID de Usuário</InfoText>
                            <InfoText2 style={{fontSize: 13}}>{user?.id}</InfoText2>
                        </Informations>

                        <Informations>
                            <InfoText>Anotações Realizadas:</InfoText>
                            <InfoText2>{notes}</InfoText2>
                        </Informations>

                        <Informations>
                            <InfoText>Perfil de Usuário:</InfoText>
                            <InfoText2>{userInfos?.perfil}</InfoText2>
                        </Informations>

                        <TouchableOpacity style={{marginTop: 50}} onPress={() => deleteAccount()}>
                            <Text style={{fontFamily: 'Poppins_700Bold', color: 'red'}}>
                                Deletar Conta
                            </Text>
                        </TouchableOpacity>
                </UserInfo>
            </Content>
        </Container>
    )
}