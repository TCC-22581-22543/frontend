import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container, ContentContainer, Description, More, NewsImage, Title } from './styles';

interface NewsCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    onPress?: () => void;
}

export function NewsCard({image, title, description, onPress} :NewsCardProps){
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
            <NewsImage source={{ uri: image }} />
            <ContentContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <More>Toque para mais informações</More>
            </ContentContainer>
            </Container>
        </TouchableOpacity>       
    )
}