import { StatusBar } from 'expo-status-bar';
import { Background, Logo, Title, Button, ButtonText, InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody } from '../styled';
import React, { useState } from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';

// ========================================================================

export default function TelaCadastro({ navigation }) {

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
      
      <Button onPress={() => navigation.navigate('Idioma')}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <TextBody> Já é cadastrado?{' '} 
        <LinkText onPress={() => navigation.navigate('Login')}>
          Clique aqui
        </LinkText>
      </TextBody>

      <StatusBar style="auto" />
    </Background>
  );
}


