import { InconPrincipal } from "@assets/IconFiles";
import { View } from "react-native";

export default function LoadingScreen(){
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#070532'}}>
            <InconPrincipal height={160} width={160}/>
        </View>
    )
}