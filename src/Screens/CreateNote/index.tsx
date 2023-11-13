import React, { useEffect, useState } from 'react';
import { Text, TouchableWithoutFeedback, ScrollView, View, BackHandler, Alert } from 'react-native';
import { Container, NoteInput, FinishButton, ViewNote, NoteTitle, NoteTitleContainer, TitleLine, GoBack} from './styles'
import { AntDesign } from '@expo/vector-icons';
import { authService } from '@utils/api';
import { useAuth } from '@Hooks/auth';
import { useNavigation, useRoute, NavigationProp } from '@react-navigation/native';
import { NoteTypes } from '@Screens/ViewNotes'

export function CreateNote() {
    const [titleNote, setTitleNote] = useState('');
    const [note, setNote] = useState('');

    const route = useRoute();
    let { _id, titulo, texto, updated } = route.params as NoteTypes || { titulo: '', texto: '' };
     
    const {user} = useAuth()
    const navigation = useNavigation<NavigationProp<any>>();
  
    
    useEffect(() => {
      if(_id){
        setTitleNote(titulo);
        setNote(texto);
      }
    }, []);
  
    const handleFinish = async () => {
      try {
        if (_id) {
          await authService.updateNotes(user?.token, _id, titleNote, note);
          navigation.navigate('Notes', {});
          updated = true;     
        } else {
          await authService.createNote(user?.token, {
            title: titleNote,
            text: note,
          });
          navigation.goBack();
        }
      } catch (error) {
        console.log("erro nas anotações: ", error);
      }
    };

    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        if (titleNote || note) {

          Alert.alert(
            'Atenção',
            'Alterações não salvas serão perdidas Deseja mesmo sair?',
            [
              {
                text: 'Cancelar',
                style: 'destructive',
              },
              {
                text: 'Sair',
                onPress: () => {
                  navigation.goBack();
                },
              },
            ],
            { cancelable: true }
          );
          return true; 
        } else {
          navigation.goBack()
          return false;
        }
      });
  
      return () => backHandler.remove(); 
    }, [titleNote, note, navigation]);
  
    return (
        <TouchableWithoutFeedback       
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps='handled'>
            <Container>
                <ViewNote>
                <NoteTitleContainer>                 
                  <NoteTitle 
                    placeholder='Título'
                    placeholderTextColor='#616161'
                    onChangeText={(t) => setTitleNote(t)}
                    value={titleNote}
                  />
                  <TitleLine />
                </NoteTitleContainer>         
                  <NoteInput
                    placeholder={"Escreva algo..."}
                    placeholderTextColor='#616161'
                    multiline
                    value={note}
                    onChangeText={text => setNote(text)}
                    style={{ paddingTop: 16 }}
                    autoFocus 
                />                    
                </ViewNote>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <GoBack onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={35} color={'white'} style={{marginTop: 12}}/>
                    <Text style={{color: 'white', fontSize: 26,  marginTop: 10}}>Voltar</Text>
                  </GoBack>
                  <FinishButton onPress={handleFinish} disabled={titleNote && note ? false : true}>
                      <Text style={{fontSize: 20, fontFamily: 'Poppins_700Bold', color: 'white'}}>Finalizar</Text>
                  </FinishButton>
                </View>
            </Container>
          </ScrollView>
        </TouchableWithoutFeedback>
    );
}