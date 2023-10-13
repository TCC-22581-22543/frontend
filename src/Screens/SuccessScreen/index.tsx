import { Octicons } from '@expo/vector-icons';
import { Container, SucessDescription, SucessTitle } from './styles';
import { CustomButton } from '@assets/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    Main: undefined;
    Detail: { itemId: number };
};

export default function SucessScreen(){

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return(
        <Container>
            <Octicons name='check-circle' size={60} color={'green'}/>
            <SucessTitle>SUCESSO!</SucessTitle>
            <SucessDescription>Sua conta foi criada agora você {"\n"} já pode navegar pelo aplicativo!</SucessDescription>
            <CustomButton 
                title='Continuar'
                style={{width: 150, height: 50, marginTop: 25}}
                onPress={() => navigation.navigate('Main')}
            />
        </Container>
    )
}