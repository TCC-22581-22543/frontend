import React from "react";
import { Text, View } from "react-native";
import { Container, Content, GoBackView, InputView,} from "./styles";
import { Input } from '@assets/Input';
import { AntDesign } from '@expo/vector-icons';
import { CustomButton } from "@assets/Button";

export default function AnimalSearchScreen() {
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
                    title="Buscar" 
                    style={{width: 85, height: 50, marginLeft: '70%', marginTop: '5%'}}
                />
            </Content>   
        </Container>
    )
    
}