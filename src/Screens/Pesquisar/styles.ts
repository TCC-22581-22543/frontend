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

export const InputView = styled.View`
    margin-top: 32px;
`;

export const Headers = styled.View`
    flex-direction: row;
    justify-content: left;
    margin: 50px; 
`;

export const Title = styled.Text`
    color: white;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins_700Bold';
`;
