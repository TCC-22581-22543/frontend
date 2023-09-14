import React from 'react';
import { StyledInput } from './styles'

interface InputProps {
    width?: number;
    height?: number;
    placeholder?: string;
    value?: string;
    mask?: boolean
    onChangeText?: (text: string) => void;
}

export function Input({ width, height, placeholder, value, mask, onChangeText, ...rest}: InputProps) {
    return (
        <StyledInput
        width={width}
        height={height}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={mask}
        {...rest}
        />
    );
}
