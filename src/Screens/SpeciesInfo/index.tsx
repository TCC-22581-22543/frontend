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
import api from '@utils/api';
import { useRoute } from "@react-navigation/native";

interface SpecieData {
  _id: string;
  nome_da_espécie: string;
  nome_cientifico: string;
  classificacao: string;
  tipo_alimentacao: string;
  bioma: string;
  image_url: string;
  evolucao: string;
  situacao_atual: string;
}


export default function SpeciesInfo() {
  const [specieInfo, setSpecieInfo] = useState<SpecieData | null>(null);
  const route = useRoute();
  const { id } = route.params as any;

  useEffect(() => {
    async function fetchSpecie() {
      try {
        const response = await api.get(`/species`);
        const speciesArray = response.data.especies;

        const selectedSpecie = speciesArray.find((specie: SpecieData) => specie._id === id);

        if (selectedSpecie) {
          setSpecieInfo(selectedSpecie);
        } else {
          console.error("Espécie não encontrada.");
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchSpecie();
  }, [id]);

  if (!specieInfo) {
    return null;
  }

  return (
    <Container>
      <ScrollView>
        <SpecieInfoView>
          <DefaultImageContent>
          <Image source={{ uri: specieInfo.image_url }} style={{ width: 155, height: 170, borderRadius: 20}} />
          </DefaultImageContent>

          <View style={{ marginTop: 45 }}>
            <AnimalName>{specieInfo.nome_da_espécie}</AnimalName>
            <CientificName>{specieInfo.nome_cientifico}</CientificName>
            <Text style={{ color: "white" }}>{specieInfo.bioma}</Text>
          </View>
        </SpecieInfoView>
        <ViewLine />
        <View>
          <SpecieTitle>Resumo</SpecieTitle>
          <SpecieDescription>{specieInfo.situacao_atual}</SpecieDescription>
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
          <SpecieDescription style={{ color: "white" }}>{specieInfo.evolucao}</SpecieDescription>
        </View>
        <View style={{ height: 30 }} />
      </ScrollView>
    </Container>
  );
}
