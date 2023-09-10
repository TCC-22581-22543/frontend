import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    display: flex;
    height: 75%;
    width: 80%;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #202869;
    font-family: ${({theme}) => theme.fonts.bold}; 
`;

export const TitleView = styled.View`
    flex-direction: row; 
    justify-content: space-between;
    width: 58%;
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    color: #202865;
    font-family: ${({theme}) => theme.fonts.regular}; 
`;

export const Fields = styled.View`
    margin-top: 20%;
`;

export const TextField = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 18px; 
`;

export const ButtonsField = styled.View`
    border: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
`;

export const GoogleAuthenticateButton = styled.TouchableOpacity`
    border: 1px solid gray;
    border-radius: 6px;
    width: 300px; 
    height: 60px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row-reverse;
    margin-top: 20px;
`;