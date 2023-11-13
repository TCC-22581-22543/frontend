import React from 'react';
import { StyledInput } from './styles'

interface InputProps {
    width?: number;
    height?: number;
    placeholder?: string;
    value?: string;
    mask?: boolean
    colorPlaceholder?: string;
    colorText?: string;
    onChangeText?: (text: string) => void;
}

export function Input({ width, height, placeholder, value, mask, colorPlaceholder, onChangeText, colorText, ...rest}: InputProps) {
    return (
        <StyledInput
            width={width}
            height={height}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={mask}
            style={{color: colorText}}
            placeholderTextColor={colorPlaceholder}
            {...rest}
        />
    );
}
