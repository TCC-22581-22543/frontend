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
} from "./styles";
import { Entypo } from "@expo/vector-icons";
import api from "@utils/api";
import { useRoute } from "@react-navigation/native";

/* 
TODO
- Fazer quebra de linha no AnimalName e CientificName
- Preencher os dados (nome da especie, descrição, nome cientifico etc) fazendo requisições na API
- Colocar botões de "Voltar" e "Fazer outra pesquisa" (pegar exemplo no Figma)
*/

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
          id: data._id,
          nome: data.nome_da_espécie,
          nome_cientifico: data.nome_cientifico,
          classificacao: data.classificacao,
          tipo_alimentacao: data.tipo_alimentacao,
          bioma: data.bioma,
          image_url: data.image_url,
          evolucao: data.evolucao,
          situacao_atual: data.situacao_atual,
        });

        console.log(id);
        console.log(specieInfos.image_url);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }
    fetchSpecie();
  }, []);

  return (
    <Container>
      <ScrollView>
        <SpecieInfoView>
          <DefaultImageContent>
            <Entypo name="bug" size={86} />
          </DefaultImageContent>

          <View style={{ marginTop: 45 }}>
            <AnimalName>{specieInfos?.nome}</AnimalName>
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
