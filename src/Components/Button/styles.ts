import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  textColor?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#007BFF'};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-family: 'Poppins_700Bold'
`;