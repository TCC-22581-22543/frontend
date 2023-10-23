import React, { useState } from 'react';
import { TouchableOpacityProps, Text } from 'react-native';
import { ButtonContainer } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: any;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  isDisabled?: boolean;
}


export function CustomButton({ title, backgroundColor, fontSize, textColor = 'white', isDisabled, ...rest}: ButtonProps) {
  
  return (
    <ButtonContainer backgroundColor={backgroundColor} disabled={isDisabled} {...rest} >
      <Text style={{color: textColor, fontSize: fontSize, fontFamily: 'Poppins_500Medium'}}>
        {typeof title === 'string' ? <Text>{title}</Text> : title}
      </Text>
    </ButtonContainer>
  );
}
