import { NewsCard } from "@assets/NewsCard";
import { Container, Description, TitleScreen } from "./styles";
import { FlatList, Text, View, Linking } from "react-native";
import { useState, useEffect } from "react";
import { authService } from "@utils/api";
import { useNavigation } from "@react-navigation/native";

interface NewsProps{
    id: string;
    titulo: string;
    descricao: string;
    link: string;
    imagem: string;
}

export function News(){

    const [newsInfo, setNewsInfo] = useState<NewsProps[]>([]);
    
    const navigation = useNavigation();
    useEffect(() => {
        async function fetchNews(){
            try {
                const { data } = await authService.returnNews();
                setNewsInfo(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    },[])

    return(
        <Container>

            <View style={{margin: 20, marginTop: 60}}>
                <TitleScreen>Noticias</TitleScreen>
                <Description>Confira aqui algumas das principais noticias sobre as mudanças climaticas e a fauna</Description>
            </View>
            <View>
                <FlatList
                    style={{ marginBottom: 190 }}
                    data={newsInfo}
                    renderItem={({ item }) => (
                        <NewsCard
                            key={String(item.id)}
                            title={item.titulo}
                            description={item.descricao}
                            link={item.link}
                            image={item.imagem}
                            onPress={() => Linking.openURL(item.link)}                                          
                        />                   
                    )}
                />
            </View>
        </Container>
    )
}