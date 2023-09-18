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
    flex: 1;
    flex-direction: row;
    margin: 80px;
    margin-bottom: 10px;
    align-items: center; 
`;
export const Headers = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 50px; 
`;

export const ButtonMenu = styled.TouchableOpacity`
    width: 100%;
    height: 90%;
    justify-content: center;
    margin: 5%;
    align-items: center;
    background-color: #98FFE6;
    border-radius: 5px;
    
`;

export const Title = styled.Text`
    color: white;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins_700Bold';
`;
export const TitleButton = styled.Text`
    font-size: 14px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins_700Bold';
`;

export const Subtitle = styled.Text`
    color: white;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins_700Bold';
`;
export const Description = styled.Text`
    font-size: 10px;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins_400Regular';
`;