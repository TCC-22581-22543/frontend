import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Container, Content, GoBackView, InputView, CardView} from "./styles";
import { Input } from '@assets/Input';
import { AntDesign } from '@expo/vector-icons';
import { CustomButton } from "@assets/Button";
import AnimalCard from "@assets/AnimalCard";
import { useNavigation } from "@react-navigation/native";

export default function AnimalSearchScreen() {
    const navigation = useNavigation();

    return(
        <Container>
            <GoBackView>
                <AntDesign name="left" size={25} color={'white'}/>
                <Text style={{color: 'white', fontSize: 15, marginTop: 2}}>Voltar</Text>
            </GoBackView>
            <Content>
                <InputView>
                    <Text style={{fontSize: 18 , marginVertical: 32, fontFamily: 'Poppins_700Bold',color: 'white'}}>Pesquisar Espécies</Text>
                    <Input
                        height={50}
                        width={350}
                        placeholder={'teste'}
                    />
                </InputView>
                <CustomButton 
                    title="Filtrar" 
                    style={{width: 85, height: 50, marginLeft: '70%', marginTop: '5%'}}
                />

                <CardView>
                    <ScrollView>
                        <AnimalCard commonName={"Urso Pardo"} scientificName={"Cientific name"} onPress={() => navigation.navigate('Species' as never)}/>
                        <AnimalCard commonName={"Urso Pardo"} scientificName={"Cientific name"}/>
                        <AnimalCard commonName={"Urso Pardo"} scientificName={"Cientific name"}/>
                        <AnimalCard commonName={"Urso Pardo"} scientificName={"Cientific name"}/>
                        <AnimalCard commonName={"Urso Pardo"} scientificName={"Cientific name"}/>
                        <AnimalCard commonName={"Urso Pardo"} scientificName={"Cientific name"}/>
                    </ScrollView>
                </CardView>
            </Content>   
        </Container>
    )   
}