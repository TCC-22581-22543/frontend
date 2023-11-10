import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 16px;
`;

export const NoteTitleContainer = styled.View`
  padding: 8px;
  margin: 18px 0;
  flex-direction: column;
`;

export const NoteTitle = styled.TextInput`
  padding: 2px;
  color: #fff;
  font-size: 21px;
  font-family: 'Poppins_700Bold';
  color: #fff;
  font-size: 21px;
  font-family: 'Poppins_700Bold';
  border: none; /* Remova a borda */
  
`
export const TitleLine = styled.View`
  height: 2px;
  background-color: #fff; 
`;

export const NoteInput = styled.TextInput`
  padding: 8px;
  margin: 16px 0;
  color: #fff;
  font-size: 21px;
`;

export const ViewNote = styled.View`
  border: 1px solid #fff;
  padding: 8px;
  margin: 16px 0;
  color: #fff;
  flex: 1;
  border-radius: 20px;
`;

export const FinishButton = styled.TouchableOpacity`
  background-color: #007BFF;
  border-radius: 10px;
  width: 40%;
  height: 60px;
  align-items: center;
  justify-content: center;
`;


export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;