import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    font-family: 'Poppins_700Bold';
    background-color: #000;
`;

export const Content = styled.View`
    flex: 1;
    margin: 30px; 
    align-items: center;
`;

export const ContentMenu = styled.View`
    width: 112%;
    height: 90%;
`;

export const Headers = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 30px; 
`;

export const Title = styled.Text`
    color: white;
    font-size: 20px;
    font-family: 'Poppins_700Bold';
`;

export const Description = styled.Text`
    color: white;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins_500Medium';
`;

export const IconButtonView = styled.TouchableOpacity`
    width: 20%;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 80%;
`;

