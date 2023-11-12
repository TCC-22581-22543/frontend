import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`;

export const NewsImage = styled.Image`
  width: 100%;
  height: 150px; 
  resize: cover;
`;

export const ContentContainer = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  margin-top: 5px;
  color: #666;
`;

export const More = styled.Text`
  margin-top: 10px;
  color: #007bff;
`;