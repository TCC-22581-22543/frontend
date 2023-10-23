import React from 'react';
import { Container, CommonName, ScientificName } from './styles';

interface AnimalProps {
  commonName: string;
  scientificName: string;
  onPress?: () => void;
}

export default function AnimalCard({ commonName, scientificName, onPress }: AnimalProps) {
  return (
    <Container onPress={onPress}>
      <CommonName>{commonName}</CommonName>
      <ScientificName>{scientificName}</ScientificName>
    </Container>
  );
}