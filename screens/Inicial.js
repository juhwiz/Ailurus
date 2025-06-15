import React from 'react';
import { Background, Title, LinkText } from '../styled';
//import { TelaPerfil } from '../screens/Perfil';

import { TelaCadastro } from '../screens/Cadastro';
import { TelaLogin } from '../screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


function TelaInicial(){
    return(
        <Background>
            <Title>
                Sou a Tela Inicial
            </Title>
        </Background>            
    );
    
}

function TelaPerfil(){
    return(
        <Background>
            <Title>
                Sou a Tela Perfil
            </Title>
        </Background>            
    );
    
}

// =======================================================


const Tab = createBottomTabNavigator();
function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Início" component={TelaInicial} />
            <Tab.Screen name="Perfil" component={TelaPerfil} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Cadastro" component={TelaCadastro} />
            <Stack.Screen name="Login" component={TelaLogin} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack/>
            <MyTabs/>
        </NavigationContainer>
    );
}
