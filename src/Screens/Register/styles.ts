import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    font-family: 'Poppins_700Bold';
`;

export const Content = styled.View`
    flex: 1;
    margin: 20px;  
`;

export const FiledsView = styled.View`
    width: 100%;
    height: 48px;
    border-color: black;
    border-width: 1px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding-left: 22px;
`;

export const InputView = styled.View`
    margin-bottom: 32px;
`;

export const GoogleSignUpButton = styled.TouchableOpacity`
    border: 1px solid gray;
    border-radius: 6px;
    width: 300px; 
    height: 60px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row-reverse;
    margin-top: 5px;
    align-self: center;
`;