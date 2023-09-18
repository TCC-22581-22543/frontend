import styled from 'styled-components/native';

interface StyleProps {
  size: number;
}

export const ProfileImageContainer = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 3px solid #ccc;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 50px;
`;

export const DefaultImageContent = styled.View<StyleProps>`
  width: ${(props) => props.size * 0.6}px;
  height: ${(props) => props.size * 0.6}px;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;