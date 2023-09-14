import React from 'react';
import { TouchableOpacityProps, Text } from 'react-native';
import { ButtonContainer } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
}

export function CustomButton({ title, backgroundColor, fontSize, textColor = 'white', ...rest}: ButtonProps) {
  return (
    <ButtonContainer backgroundColor={backgroundColor} {...rest}>
      <Text style={{color: textColor, fontSize: fontSize, fontFamily: 'Poppins_500Medium'}}>{title}</Text>
    </ButtonContainer>
  );
}
