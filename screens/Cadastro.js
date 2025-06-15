import { StatusBar } from 'expo-status-bar';
import { Background, Logo, Title, Button, ButtonText, InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText } from '../styled';
import React, { useState } from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//const loginStack = createStackNavigator();
//function LoginButtonStack(){
//  return(
//    <loginStack.Navigator>
//      <loginStack.Screen name='Login' component={}/>
//    </loginStack.Navigator>
//  );
//}

// ========================================================================

export default function TelaCadastro() {

  const [isChecked, setIsChecked] = useState(false);
  return (
    <Background>

      <Logo source={require('../src/imgs/AilurusLogo.png')}/>
      <Title>Seja bem vindo!</Title>
      <Title>Inicie sua aprendizagem</Title>

      <InputText type="text" id='nome' placeholder="Nome"/>
      <InputText type="email" id='email' placeholder='E-mail' />
      <InputText type="tel" id='numero' placeholder='Numero de celular'/>
      <InputText type="password" id='senha' placeholder='Senha' />

      <CheckboxContainer onPress={() => setIsChecked(!isChecked)}>
        <CheckboxSquare checked={isChecked}>
          {isChecked && <Text style={{ color: 'white' }}>✓</Text>}
        </CheckboxSquare>
        <CheckboxLabel>Concordo com os termos de uso</CheckboxLabel>
      </CheckboxContainer>
      
      <Button onPress={() => alert('Botão clicado')}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>


      <StatusBar style="auto" />
    </Background>
  );
}


