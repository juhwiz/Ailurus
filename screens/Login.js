import { Background, Logo, Title, Button, ButtonText, InputText, TextBody, LinkText } from '../styled';
import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { UserContext } from '../src/context/UserContext';
import { ApiContext } from '../src/context/ApiContext'

// ========================================================================


export default function TelaLogin( {navigation} ){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { setIdUsuario } = useContext(UserContext);
    const { baseURL } = useContext(ApiContext);

    function Logar(){
        if (!email || !senha) {
          alert('Preencha todos os campos');
          return;
        }
        fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        })
        .then(res => res.json())
        .then(data => {
          if (data.autenticado) {
            console.log('Usuário autenticado:', data.usuario);
            setIdUsuario(data.usuario.idUsuario);
            navigation.navigate('Home');
          } else {
            alert('E-mail ou senha inválidos');
          }
        })
        .catch(err => {
          console.error('Erro no login', err);
          alert('Erro ao tentar logar');
        });
    }

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F8DC' }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, backgroundColor: '#F9F8DC' }}>
                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ paddingBottom: 130, paddingTop: 150, flexGrow: 1}}> 
                <Background>
                    <Logo source={require('../src/imgs/AilurusLogo.png')}/>
                    <Title>Seja bem vindo de volta!</Title>
            
                    <InputText type="email" id='email' placeholder='E-mail' value={email} onChangeText={setEmail}/>
                    <InputText type="password" id='senha' placeholder='Senha' value={senha} secureTextEntry onChangeText={setSenha}/>
            
                    <Button onPress={Logar}>
                        <ButtonText>Entrar</ButtonText>
                    </Button>
                    
                    <TextBody> Ainda não cadastrado?{' '} 
                        <LinkText onPress={() => navigation.navigate('Cadastro')}>
                            Clique aqui
                        </LinkText>
                    </TextBody>
                    
                </Background>
                </ScrollView>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );

}