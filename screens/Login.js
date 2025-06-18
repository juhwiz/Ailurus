import { Background, Logo, Title, Button, ButtonText, InputText, TextBody,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText } from '../styled';
import React from 'react';

// ========================================================================


export default function TelaLogin( {navigation} ){

    return(
        <Background>
            <Logo source={require('../src/imgs/AilurusLogo.png')}/>
            <Title>Seja bem vindo de volta!</Title>

            <InputText type="email" id='email' placeholder='E-mail' />
            <InputText type="password" id='senha' placeholder='Senha' />

            <Button onPress={() => {
                console.log('Botão simples pressionado!');
                navigation.navigate('Home');}}>
                <ButtonText>Entrar</ButtonText>
            </Button>
            
            <TextBody> Ainda não cadastrado?{' '} 
                <LinkText onPress={() => navigation.navigate('Cadastro')}>
                    Clique aqui
                </LinkText>
            </TextBody>

        </Background>
    );

}