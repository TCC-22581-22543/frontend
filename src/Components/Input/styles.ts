import styled from 'styled-components/native';

interface InputProps {
    width?: number;
    height?: number;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

export const StyledInput = styled.TextInput<InputProps>`
    border-width: 1px;
    border-color: gray;
    padding-left: 10px;
    border-radius: 8px;
`;
