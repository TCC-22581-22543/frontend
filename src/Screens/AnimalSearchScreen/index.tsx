import React, {useState, useEffect, ReactDOM} from "react";
import { ScrollView, Text } from "react-native";
import { Container, Content, GoBackView, InputView, CardView} from "./styles";
import { Input } from '@assets/Input';
import { AntDesign } from '@expo/vector-icons';
import { CustomButton } from "@assets/Button";
import AnimalCard from "@assets/AnimalCard";
import { useNavigation } from "@react-navigation/native";
import api from '@utils/api';

interface SpecieData {
  _id: string;
  nome_da_especie: string;
  nome_cientifico: string;
  navigate: any;
}

export default function AnimalSearchScreen() {
    const navigation = useNavigation<SpecieData>();
    const [speciesList, setSpeciesList] = useState<SpecieData[]>([]);

    useEffect(() => {
        async function fetchSpecies() {
          try {
            const response = await api.get(`/species`);
            const data = response.data.especies;
                      
            setSpeciesList(data);
            
          } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
          }
        }
    
        fetchSpecies();
      }, []);

    return(
        <Container>
            <GoBackView  onPress={() => navigation.navigate("Main" as never)}>
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
            {speciesList &&
              speciesList.map((species, index) => (
                <AnimalCard
                  key={index}
                  commonName={species.nome_da_especie}
                  scientificName={species.nome_cientifico}
                  onPress={() => navigation.navigate("Species" as never, {id: species._id})}
                />
              ))}
          </ScrollView>
        </CardView>
      </Content>
    </Container>
  );
}










