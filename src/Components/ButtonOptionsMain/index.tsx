import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonMenu, Description, Title } from "./styles";

interface ButtonProps {
    title: String;
    description: String;
    icon?: any;
    onPress?: () => void;
}

export function ButtonOptionsMenu({title, description, icon, onPress} : ButtonProps){
    return(
        <>      
            <ButtonMenu onPress={onPress}>       
                <FontAwesome5 name={icon} size={45} />
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ButtonMenu>         
        </>
    )
}