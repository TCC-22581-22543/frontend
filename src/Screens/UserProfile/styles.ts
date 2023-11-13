import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    font-family: 'Poppins_700Bold';
    background-color: #101016;
`;

export const Content = styled.View`
    flex: 1;
    margin: 22px;
`;

export const UserInfo = styled.View`
    margin-top: 16%;
`;

export const Informations = styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 19px;
`;

export const InfoText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 17px;
    color: #fff;
`;

export const InfoText2 = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 15px;
    color: #fff;
    margin-top: 4px;
`;

export const GoBackView = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 78%;
    margin-top: 20px;
`;

export const AccountDetailsText = styled.Text`
    color: white; 
    font-size: 19px;
    font-style: italic;
    margin-top: 20px;
`;