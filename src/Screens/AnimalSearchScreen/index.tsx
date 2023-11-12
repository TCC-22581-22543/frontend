import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { Container, Content, GoBackView, InputView, CardView } from "./styles";
import { Input } from "@assets/Input";
import { AntDesign } from "@expo/vector-icons";
import { CustomButton } from "@assets/Button";
import AnimalCard from "@assets/AnimalCard";
import { useNavigation } from "@react-navigation/native";
import api from "@utils/api";

interface SpecieData {
  _id: string;
  nome_da_especie: string;
  nome_cientifico: string;
  bioma: string;
}

export default function AnimalSearchScreen() {
  const navigation = useNavigation();
  const [speciesList, setSpeciesList] = useState<SpecieData[]>([]);
  const [speciesSearchText, setSpeciesSearchText] = useState("");
  const [biomeSearchText, setBiomeSearchText] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    async function fetchSpecies() {
      try {
        const response = await api.get(`/species`);
        const data = response.data;

        if (Array.isArray(data)) {
          setSpeciesList(data);
        } else {
          console.error("A resposta da API não é um array:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchSpecies();
  }, []);

  const handleFilterPress = () => {
    setIsFiltering(true);
  };

  const filteredSpecies = speciesList.filter((species) => {
    const speciesMatches =
    species.nome_da_especie &&
    species.nome_da_especie.includes(speciesSearchText);
  
    const biomeMatches =
    species.bioma &&
    species.bioma.includes(biomeSearchText);
  
  
    return isFiltering ? (speciesMatches && biomeMatches) : true;
  });
  
  
  return (
    <Container>
      <GoBackView onPress={() => navigation.navigate("Main" as never)}>
        <AntDesign name="left" size={25} color={"white"} />
        <Text style={{ color: "white", fontSize: 15, marginTop: 2 }}>
          Voltar
        </Text>
      </GoBackView>
      <Content>
        <InputView>
          <Text
            style={{
              fontSize: 18,
              marginVertical: 32,
              fontFamily: "Poppins_700Bold",
              color: "white",
            }}
          >
            Pesquisar Espécies
          </Text>
          <Input
            style={{ color: "white" }}
            height={50}
            width={350}
            placeholderTextColor={'#fff'}
            placeholder={"Digite o nome da espécie"}
            value={speciesSearchText}
            onChangeText={(text) => setSpeciesSearchText(text)}
          />
        </InputView>
        <InputView>
          <Input
            style={{ color: "white" }}
            height={50}
            width={350}
            placeholderTextColor={'#fff'}
            placeholder={"Digite o bioma"}
            value={biomeSearchText}
            onChangeText={(text) => setBiomeSearchText(text)}
          />
        </InputView>
        <Text style={{ color: "#808080", fontSize:12 }}>Biomas: Oceanos, Floresta Tropical, Savana e Floresta, Floresta de Bambu, Diversos.</Text>
        <CustomButton
          title="Filtrar"
          style={{ width: 85, height: 50, marginLeft: "70%", marginTop: "5%" }}
          onPress={handleFilterPress}
        />

        <CardView>
          <ScrollView>

            {filteredSpecies.map((species, index) => (
              <AnimalCard
                key={index}
                commonName={species.nome_da_especie}
                scientificName={species.nome_cientifico}
                onPress={() =>
                  navigation.navigate("Species" as never, { id: species._id })
                }
              />
            ))}

          </ScrollView>
        </CardView>
      </Content>
    </Container>
  );
}
