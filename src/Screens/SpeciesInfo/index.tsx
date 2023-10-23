import { View, Text, ScrollView } from "react-native";
import { AnimalName, CientificName, Container, DefaultImageContent, SpecieDescription, SpecieInfoView, SpecieTitle, ViewLine } from "./styles";
import { Entypo } from '@expo/vector-icons'
/* 
TODO
- Fazer quebra de linha no AnimalName e CientificName
- Preencher os dados (nome da especie, descrição, nome cientifico etc) fazendo requisições na API
- Colocar botões de "Voltar" e "Fazer outra pesquisa" (pegar exemplo no Figma)
*/
export default function SpeciesInfo(){
    return(
        <Container>
            <ScrollView>
                <SpecieInfoView>
                    <DefaultImageContent>
                        <Entypo name="bug" size={86}/>
                    </DefaultImageContent>

                    <View style={{marginTop: 45}}>
                        <AnimalName>Nome da Espécie</AnimalName>
                        <CientificName>Nome Cientifico</CientificName>
                        <Text style={{color: 'white'}}>Ambiente</Text> 
                    </View>

                </SpecieInfoView>
                <ViewLine/>

                <View>
                    <SpecieTitle>Resumo</SpecieTitle>
                    <SpecieDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</SpecieDescription>
                </View>
                <View style={{borderWidth: 1, width: '100%', borderColor: 'gray', marginTop: 30}}/>
                <View>
                <SpecieTitle>O Futuro da Espécie</SpecieTitle>
                    <SpecieDescription style={{color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</SpecieDescription>
                </View>
                <View style={{height: 30}}/>
            </ScrollView>
        </Container>
    )
}
    
