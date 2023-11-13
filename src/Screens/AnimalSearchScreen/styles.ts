import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #000; 
    justify-content: center;
    align-items: center;
    padding-top: 32px;
`;

export const Content = styled.View`
    flex: 1;
    margin: 24px;
`;

export const InputView = styled.View`
    align-items: center;
`;

export const GoBackView = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    margin-right: 78%;
`;

export const CardView = styled.View`
    flex: 1; 
    margin: 40px 0 0 0;
    border-radius: 5px;
`;

