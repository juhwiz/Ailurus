import { StatusBar } from 'expo-status-bar';
import { Background, Logo, Title, Button, ButtonText, InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody } from '../styled';
import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback, SafeAreaView, Text } from 'react-native';
import { UserContext } from '../src/context/UserContext';
import { ApiContext } from '../src/context/ApiContext'

// ======================================================================== 

export default function TelaCadastro({ navigation }) {

  const { setIdUsuario } = useContext(UserContext);
  const { baseURL } = useContext(ApiContext);
  
  const [isChecked, setIsChecked] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numeroCel, setNumero] = useState('');
  const [senha, setSenha] = useState('');
  
  // Inserir usuário

  function Cadastrar(){

    //Validação 

    if(!nome.trim()){
      alert("Por favor, preencha seu nome");
      return;
    }
    if(!email.includes("@") || !email.includes(".")){
      alert("Por favor, insira um e-mail válido.");
      return;
    }
    if(!numeroCel.match(/^\(\d{2}\)\d{5}-\d{4}$/)){
      alert("Número de celular inválido. Digite nesse formato (xx)9xxxx-xxxx");
      return;
    }
    if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (!isChecked) {
      alert("Você deve aceitar os termos de uso.");
      return;
    }

    fetch(`${baseURL}/usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        nome: nome, 
        email: email,
        numeroCel: numeroCel,
        senha: senha 
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Usuário inserido:', data);
        setIdUsuario(data.idUsuario);
        navigation.navigate('Idioma');
      })
      .catch(err => console.error('Erro ao cadastrar', err));

  }

// ========================================================================

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F8DC' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, backgroundColor: '#F9F8DC' }}>
          <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ paddingBottom: 130, paddingTop: 150, flexGrow: 1}}> 
          <Background>

            <Logo source={require('../src/imgs/AilurusLogo.png')}/>
            <Title>Seja bem vindo!</Title>
            <Title>Inicie sua aprendizagem</Title>

            <InputText type="text" id='nome' placeholder="Nome" value={nome} onChangeText={setNome}/>
            <InputText type="email" id='email' placeholder='E-mail' value={email} onChangeText={setEmail}/>
            <InputText type="tel" id='numero' placeholder='Numero de celular' value={numeroCel} onChangeText={setNumero}/>
            <InputText type="password" id='senha' placeholder='Senha' value={senha} onChangeText={setSenha}/>

            <CheckboxContainer onPress={() => setIsChecked(!isChecked)}>
              <CheckboxSquare checked={isChecked}>
                {isChecked && <Text style={{ color: 'white' }}>✓</Text>}
              </CheckboxSquare>
              <CheckboxLabel>Concordo com os termos de uso</CheckboxLabel>
            </CheckboxContainer>

            <Button onPress={Cadastrar}>
              <ButtonText>Cadastrar</ButtonText>
            </Button>

            <TextBody> Já é cadastrado?{' '} 
              <LinkText onPress={() => navigation.navigate('Login')}>
                Clique aqui
              </LinkText>
            </TextBody>

            <StatusBar style="auto" />
          </Background>
          </ScrollView>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}


