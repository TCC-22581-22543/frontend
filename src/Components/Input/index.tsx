import React from 'react';
import { StyledInput } from './styles'

interface InputProps {
    width?: number;
    height?: number;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

export function Input({ width, height, placeholder, value, onChangeText, ...rest}: InputProps) {
    return (
        <StyledInput
        width={width}
        height={height}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...rest}
        />
    );
}
