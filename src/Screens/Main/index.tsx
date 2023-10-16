import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Headers, ContentMenu, Title, Description, IconButtonView} from './styles';
import { InconPrincipal } from '@assets/IconFiles';
import { ButtonOptionsMenu } from '@assets/ButtonOptionsMain';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '@Hooks/auth';
import { useNavigation } from '@react-navigation/native';

export function Main(){

    const { signOut } = useAuth();
    const navigation = useNavigation();

    return(
       
        <Container>
            <Headers>                
                  <IconButtonView onPress={signOut}>
                  <AntDesign name='left' color={'white'} size={26}/>                 
                    <Text 
                    style={{
                        color: 'white', 
                        fontSize: 20, 
                        fontFamily: 'Poppins_400Regular'
                    }
                    }>Sair
                    </Text>                           
                  </IconButtonView>
               </Headers>
               <View style={{marginLeft: 25}}>
                    <InconPrincipal/>
                </View>
            <Content>
                <View style={{marginRight: 40, marginBottom: 20}}>
                    <Title>Bem Vindo(a), usuário!</Title>
                    <Description>Aqui você já pode começar a navegar pelo simulador e encontrar o que precisa!</Description>
                </View>
                <ContentMenu>
                    <View style={{flexDirection: 'row'}}>
                        <ButtonOptionsMenu 
                            title='Pesquisar'
                            description='Comece a pesquisar sobre as espécies'
                            icon='search-plus'
                            onPress={() => {navigation.navigate('Search' as never)}}
                        />
                        <ButtonOptionsMenu 
                            title='Anotações'
                            description='Veja suas anotações ou crie blocos de texto'
                            icon='book'
                            onPress={() => {navigation.navigate('Notes' as never)}}
                        />
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <ButtonOptionsMenu 
                            title='Sua Conta'
                            description='Detalhes sobre sua conta'
                            icon='user-alt'
                            onPress={() => {navigation.navigate('Profile' as never)}}
                        />
                        <ButtonOptionsMenu 
                            title='Próximo a você'
                            description='Verifique as espécies presentes em sua região'
                            icon='globe-americas'
                        />
                    </View>
                </ContentMenu>               
            </Content>
        </Container>
    );

}