import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000; 
  padding-top: 32px;
`;

export const DefaultImageContent = styled.View`
  width: 155px;
  height: 170px;
  background-color: orange;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top: 20px;
`;

export const SpecieInfoView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 36px;
`;

export const SpecieTitle = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 24px;
  margin: 8px;
  color: white;
`;

export const SpecieDescription = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 16px;
  margin: 6px;
  color: white;
`;

export const ViewLine = styled.View`
  border-width: 1px; 
  width: 100%; 
  border-color: gray; 
  margin-top: 30px;
`;

export const AnimalName = styled.Text`
  color: white;
  font-size: 22px;
  font-family: 'Poppins_700Bold';
`;

export const CientificName = styled.Text`
  color: white;
  font-family: 'Poppins_500Medium';
  font-style: italic;
`;

export const GoBackView = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    margin-right: 78%;
`;