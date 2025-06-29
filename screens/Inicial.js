import { Background, Logo, TextHome, TitleHome, ContainerHome, ViewHome, ImageHome} from '../styled';

import { ScrollView, SafeAreaView } from 'react-native';

import TelaPerfil from '../screens/Perfil';
import TelaCadastro from '../screens/Cadastro';
import TelaLogin from '../screens/Login';
import TelaIdioma from './EscolherIdioma';
import TelaAlfabeto from './AprenderAlfabeto';
import TelaCriarCarta from './CriarCartas';
import TelaEscolherBaralho from './EscolherBaralho';
import TelaCriarBaralho from './CriarBaralho';
import TelaBaralhoAberto from './BaralhoAberto';
import TelaEstudarBaralho from './EstudarBaralho';
import TelaFimEstudo from './FimEstudo';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from '../styled';
import { UserProvider } from '../src/context/UserContext';
import { ApiProvider } from '../src/context/ApiContext';

// ========================================================================


function TelaInicial(){
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F8DC' }}> 
            <ScrollView contentContainerStyle={{ paddingBottom: 130, paddingTop: 50}}>
                <Background>
                    <ContainerHome>
                        <Logo source={require('../src/imgs/AilurusLogo.png')}/>
                        
                        <TitleHome>Bem vindo ao</TitleHome>
                        <TitleHome style={{fontSize: 30}}>Ailurus</TitleHome>
                        <TextHome style={{marginTop: 30}}>Comece sua aprendizagem da sua língua estrangeira</TextHome>
                    </ContainerHome>

                    <ViewHome>
                        <TextHome>Primeiro passo: Crie um baralho</TextHome>
                        <ImageHome style={{objectFit:"scale-down", height: 100, width: 300}} source={require('../src/imgs/CriarBaralho.jpg')}/>

                        <TextHome>Segundo passo: Adicione suas cartas nele</TextHome>
                        <ImageHome source={require('../src/imgs/CriarCarta.jpg')}/>
                        
                        <TextHome>Terceiro passo: Estude o baralho até aprender as palavras!</TextHome>
                        <ImageHome source={require('../src/imgs/BaralhoAberto.jpg')}/>
                        <ImageHome source={require('../src/imgs/EstudarBaralho.jpg')}/>


                    </ViewHome>

                </Background>            
            </ScrollView>
        </SafeAreaView>
    );
    
}

// =======================================================

const Tab = createBottomTabNavigator();
function MyTabs(){

    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Inicio" component={TelaInicial}/>
            <Tab.Screen name="Cartas" component={TelaCriarCarta}/>
            <Tab.Screen name="Baralho" component={TelaEscolherBaralho}/>
            <Tab.Screen name="Alfabeto" component={TelaAlfabeto}/>
            <Tab.Screen name="Perfil" component={TelaPerfil}/>
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <UserProvider>
            <ApiProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Login" component={TelaLogin} />
                        <Stack.Screen name="Cadastro" component={TelaCadastro} />
                        <Stack.Screen name="Idioma" component={TelaIdioma} />
                        <Stack.Screen name="CriarBaralho" component={TelaCriarBaralho}/>
                        <Stack.Screen name="Baralho" component={TelaEscolherBaralho}/>
                        <Stack.Screen name="BaralhoAberto" component={TelaBaralhoAberto}/>
                        <Stack.Screen name="CriarCarta" component={TelaCriarCarta}/>
                        <Stack.Screen name="EstudarBaralho" component={TelaEstudarBaralho}/>
                        <Stack.Screen name="FimEstudo" component={TelaFimEstudo} />
                        <Stack.Screen name="Home" component={MyTabs}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </ApiProvider>
        </UserProvider>

    );
}

