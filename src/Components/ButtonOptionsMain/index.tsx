import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonMenu, Description, Title } from "./styles";

interface ButtonProps {
    title: String;
    description: String;
    icon?: any;
}

export function ButtonOptionsMenu({title, description, icon} : ButtonProps){
    return(
        <>      
            <ButtonMenu>       
                <FontAwesome5 name={icon} size={45} />
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ButtonMenu>         
        </>
    )
}