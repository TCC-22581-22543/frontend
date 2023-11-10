import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Text, View } from 'react-native';
import { Container, Content, Title, Subtitle, ContentText, ButtonAdd, Headers, GoBackView, NotesTitle, NotesTextView } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '@Hooks/auth';
import api, { authService } from '@utils/api';
import { NotesCard } from '@assets/NotesCard';

export interface NoteTypes{
    _id: string;
    titulo: string;
    texto: string;
    updated: boolean
}

export function ViewNotes(){
    const navigation = useNavigation<any>();

    const { user } = useAuth();
    const [hasNotes, setHasNotes] = useState<NoteTypes[]>([]);
    const [refresh, setRefresh] = useState<NoteTypes>();
    const [loading, setLoading] = useState(true);

    async function deleteNote(id: any){
      try {
        Alert.alert(
          'Deletar',
          'Tem certeza que deseja deletar essa anotação?',
          [
            { text: 'Cancelar', onPress: () => console.log("cancelled") },
            { text: 'Sim', onPress: async () => {
              try {
                await authService.deleteNote(user?.token, id);
                fetchNotes();
              } catch (error) {
                console.log(error);
              }
            }},
          ],
          { cancelable: false }
        );
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchNotes() {
      try {
        const { data } = await api.get(`/readNotes/${user?.id}`);
        setHasNotes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); 
      }
    }
      
    useEffect(() => {   
        if (refresh?.updated) {
          fetchNotes();
        } else {
          fetchNotes();
        }
      }, [hasNotes, refresh?.updated]);
    
      return (
        <Container>
          <Headers>
            <GoBackView onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={32} color={'white'} />
              <Text style={{ color: 'white', fontSize: 21, marginTop: 2 }}>Voltar</Text>
            </GoBackView>
          </Headers>
          {loading ? (
            <View style={{ flex: 1, marginTop: '40%'}}>
              <ActivityIndicator size={70} />
            </View>
          ) : (
            !hasNotes.length ? (
              <Content>
                <ContentText>
                  <Title>Nenhuma Anotação</Title>
                  <Subtitle>Toque no botão para fazer uma anotação</Subtitle>
                </ContentText>
              </Content>
            ) : (
              <>
                <NotesTextView>
                    <NotesTitle>Suas Anotações</NotesTitle>
                    <Text style={{color: 'white', marginBottom: 20}}>Toque nos cards abaixo para gerenciar as notas {'\n'}
                        Você também pode criar uma nova anotação
                    </Text>
                </NotesTextView>
                <FlatList
                  data={hasNotes}
                  renderItem={({ item }) => (
                    <NotesCard
                      title={item.titulo}
                      onpress={() => {
                        navigation.navigate('CreateNote', {
                          _id: item._id,
                          titulo: item.titulo,
                          texto: item.texto,
                          update: item.updated
                        });
                      }}
                      ondelete={() => deleteNote(item._id)}
                    />
                  )}
                />
              </>
            )
          )}
          <ButtonAdd onPress={() => navigation.navigate('CreateNote' as never)}>
            <AntDesign name='pluscircle' size={60} color={'white'} />
          </ButtonAdd>
        </Container>
      );
    }