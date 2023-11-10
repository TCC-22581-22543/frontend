import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    font-family: 'Poppins_700Bold';
    background-color: #000;
`;

export const Content = styled.View`
    flex: 1;
    margin: 20px; 
    align-items: center;
`;

export const Title = styled.Text`
    color: white;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins_700Bold';
    margin-bottom: 50px;
`;

export const Headers = styled.View`
    flex-direction: row;
    justify-content: left;
    margin: 50px; 
`;

export const Subtitle = styled.Text`
    color: white;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins_400Regular';
`;
export const ContentText = styled.View`
    margin: 45px; 
    align-items: center;
    justify-content: center;
`;

export const GoBackView = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 78%;
    margin-top: 20px;
`;

export const NotesTitle = styled.Text`
    color: white;
    font-size: 26px;
    font-family: 'Poppins_700Bold';
    margin-bottom: 6px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  position: absolute; 
  background-color: #007bff;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  right: 60px;
  bottom: 60px;
`;

export const NotesTextView = styled.View`
    margin: 10px;
`;