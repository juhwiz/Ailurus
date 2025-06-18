import React from 'react';
import { Background, Title, LinkText, tex } from '../styled';

import TelaPerfil from '../screens/Perfil';
import TelaCadastro from '../screens/Cadastro';
import TelaLogin from '../screens/Login';
import TelaIdioma from './EscolherIdioma';
import TelaAlfabeto from './AprenderAlfabeto';
import TelaCriarCarta from './CriarCartas';
import TelaEscolherBaralho from './EscolherBaralho';
import TelaCriarBaralho from './CriarBaralho';
import TelaBaralhoAberto from './BaralhoAberto';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { tabBarOption } from '../styled';
import { screenOptions } from '../styled';

// ========================================================================


function TelaInicial(){
    return(
        <Background>
            <Title>
                Sou a Tela Inicial
            </Title>
        </Background>            
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
            <Tab.Screen name="Perfil" component={TelaPerfil} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={TelaLogin} />
                <Stack.Screen name="Cadastro" component={TelaCadastro} />
                <Stack.Screen name="Idioma" component={TelaIdioma} />
                <Stack.Screen name="CriarBaralho" component={TelaCriarBaralho}/>
                <Stack.Screen name="Baralho" component={TelaEscolherBaralho}/>
                <Stack.Screen name="BaralhoAberto" component={TelaBaralhoAberto}/>
                <Stack.Screen name="Home" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
