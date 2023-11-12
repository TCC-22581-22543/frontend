import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  AnimalName,
  CientificName,
  Container,
  DefaultImageContent,
  SpecieDescription,
  SpecieInfoView,
  SpecieTitle,
  ViewLine,
  GoBackView,
  GoNewSearchView,
} from "./styles";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import api from "@utils/api";
import { useRoute, useNavigation } from "@react-navigation/native";



interface SpecieData {
  _id: string;
  nome_da_especie: string;
  nome_cientifico: string;
  classificacao: string;
  tipo_alimentacao: string;
  bioma: string;
  image_url: string;
  evolucao: string;
  situacao_atual: string;
}


export default function SpeciesInfo() {
  const navigation = useNavigation;
  const [specieInfos, setSpecieInfos] = useState<SpecieData[]>([]);
  const route = useRoute();
  const { id } = route.params;


  useEffect(() => {
    async function fetchSpecie() {
      try {
        const response = await api.get(`/returnSpecieById/${id}`);
        const data = response.data.specie;
        console.log(data);

        setSpecieInfos({
          nome_da_especie: data.nome_da_especie,
          nome_cientifico: data.nome_cientifico,
          classificacao: data.classificacao,
          tipo_alimentacao: data.tipo_alimentacao,
          bioma: data.bioma,
          image_url: data.image_url,
          evolucao: data.evolucao,
          situacao_atual: data.situacao_atual,
        });
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchSpecie();
  }, []);

  return (
    <Container>
      <ScrollView>
      <View style={{ marginTop:2 ,marginRight:6,flexDirection: 'row', justifyContent: 'space-between'}}>
          <GoBackView  onPress={() => navigation.navigate("Main" as never)}>
                <AntDesign name="left" size={25} color={'white'}/>
                <Text style={{color: 'white', fontSize: 15}}>Voltar</Text>
          </GoBackView>
          <GoNewSearchView onPress={() => navigation.navigate("Search" as never)}>
              <FontAwesome name="search-plus" size={25} color="white" />
              <Text style={{color: 'white', fontSize: 14}}>Nova Pesquisa</Text>
          </GoNewSearchView>
      </View>
        <SpecieInfoView>
          <DefaultImageContent>
          <Image source={{ uri: specieInfos.image_url }} style={{ width: 155, height: 170, borderRadius: 20}} />


          </DefaultImageContent>

          <View style={{ marginTop: 45 }}>
            <AnimalName >{specieInfos?.nome_da_especie}</AnimalName>
            <CientificName>{specieInfos?.nome_cientifico}</CientificName>
            <Text style={{ color: "white" }}>
              Ambiente: {specieInfos?.bioma}
            </Text>
            <Text style={{ color: "white" }}>
              Tipo: {specieInfos?.classificacao}
            </Text>
            <Text style={{ color: "white" }}>
              Alimentação: {specieInfos?.tipo_alimentacao}
            </Text>
          </View>
        </SpecieInfoView>
        <ViewLine />
        <View>
          <SpecieTitle>Resumo</SpecieTitle>
          <SpecieDescription>{specieInfos?.situacao_atual}</SpecieDescription>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: "100%",
            borderColor: "gray",
            marginTop: 30,
          }}
        />
        <View>
          <SpecieTitle>O Futuro da Espécie</SpecieTitle>
          <SpecieDescription style={{ color: "white" }}>
            {specieInfos?.evolucao} 
          </SpecieDescription>
        </View>
        <View style={{ height: 30 }} />
      </ScrollView>
    </Container>
  );
}
