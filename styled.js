import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
// ==== Estilos básicos da aplicação ====

export const Background = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #F9F8DC;
    align-items: center;
    padding: 0 33px;
`;

export const Logo = styled.Image`
    object-fit: scale-down;
    width: 100px;
    height: 100px;
    align-self: center;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #00000;
    align-self: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #00000;
    align-self: left;
    margin-bottom: 10px;

`;

export const TextBody = styled.Text`
    margin-top: 30px;
    font-size: 15px;
    color: #00000;
    align-self: center;

`;    

export const LinkText = styled.Text`
    color: #1e90ff;
    text-decoration: underline;
    font-size: 16px;

`;

export const Button = styled.TouchableOpacity`
    margin-top: 30px;
    padding: 10px 20px;
    align-self: center;
    background-color: #CE6301;
    border-radius: 5px;
`;    

export const ButtonText = styled.Text`
    color: #F9F8DC;
    font-size: 15px;
`;    

export const InputText = styled.TextInput`
    min-width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    margin-top: 20px;
`;

// ==== Estilo Picker ====

export const TextPicker = styled.Text`
    margin-top: 30px;
    font-size: 15px;
    color: #00000;
    align-self: center;

`;

export const PickerContainer = styled.View`
    min-width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    margin-top: 50px;
    overflow: hidden;
`;

export const StyledPicker = styled(Picker)`
    min-width: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
`;


// ==== Estilo Checkbox ====

export const CheckboxContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;    

export const CheckboxSquare = styled.View`
    width: 24px;
    height: 24px;
    border: 2px solid #CE6301;
    background-color: ${props => (props.checked ? '#CE6301' : 'transparent')};
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;    

export const CheckboxLabel = styled.Text`
    font-size: 16px;
    color: #333; 
`;    

export const CheckboxLogo = styled.Image`
    object-fit: scale-down;
    width: 60px;
    height: 60px;
    align-self: center;
    margin-bottom: 10px;
`;

// ==== Estilo Perfil ====

export const Flags = styled.Image`
    object-fit: scale-down;
    width: 60px;
    height: 60px;
    align-self: left;
    margin-top: 10px;
    margin-bottom: 10px;

`;

export const ViewPerfil = styled.View`
    align-items: left;
    margin-top: 20px;    
    width: 250px;
`;

// ==== Estilo Tela Alfabeto ====

export const ScrollContainer = styled.ScrollView`
    padding: 20px;
`;

export const ViewLetras = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const DivLetras = styled.View`
    background-color: #CE6301;
    width: 100px;
    height: 100px;
    padding: 10px 10px;
    border-radius: 5px;
    margin: 5px;
    align-items: center;

`;

export const Letras = styled.Text`
    font-size: 25px;
    color: white;

`;

// ==== Estilo Escolher Baralho ====

export const ViewBaralho = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const ImageBaralho = styled.Image`
    object-fit: scale-down;
    width: 60px;
    height: 60px;
    align-self: left;
    margin-top: 10px;
    margin-bottom: 10px;

`;

export const Baralhos = styled.TouchableOpacity`
    border: 2px solid #CE6301;
    border-radius: 5px;
    width: 350px;
    min-height: 150px;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 5px;
    align-items: left;

`;

export const TitleBaralho = styled.Text` 
    font-size: 20px;
`;

export const DescBaralho = styled.Text`
    margin-top: 5px;
    font-size: 15px;
    margin-bottom: 5px;
`;

// ==== Estilo Bottom Tab ====

export const screenOptions = ({ route }) => ({
    tabBarIcon: ({color, size}) => {
        let iconName;

        if (route.name === 'Inicio') {
          iconName = 'home-outline';
        } else if (route.name === 'Alfabeto') {
          iconName = 'text-outline';
        } else if (route.name === 'Cartas') {
          iconName = 'create-outline';
        } else if (route.name === 'Baralho') {
          iconName = 'file-tray-full-outline';
        } else if (route.name === 'Perfil') {
          iconName = 'person-circle-outline';
        }
    
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarStyle: {
        backgroundColor: '#FFCB65',
        height: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
    },
    tabBarActiveTintColor: '#CE6301',
    tabBarInactiveTintColor: '#261616',
    tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    headerShown: false,
   
});
