import { View, Text } from "react-native";
import { Container, ContetView } from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

interface CardTypes{
    title: any;
    onpress?: () => void;
    ondelete?: () => void;
}

export function NotesCard({title, onpress, ondelete} : CardTypes){
    return(
        <Container onPress={onpress}>
            <ContetView style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
                <FontAwesome name="trash-o" size={30} color={'red'} onPress={ondelete}/>
            </ContetView>
        </Container>
    )
}