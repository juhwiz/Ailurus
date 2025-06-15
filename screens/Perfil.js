import { Background, Logo, Title, Button, ButtonText, CheckboxLogo,  InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody, Text } from '../styled';
import React, { useState } from 'react';

export default function TelaPerfil(){
    return(
        <Background>
            <Logo source={require('../src/imgs/GenericAvatar.png')}/>
            <Button onPress={() => navigation.navigate('Idioma')}>
                <ButtonText>Editar</ButtonText>
            </Button>

            <Text>Nome: </Text>
            <Text>E-mail: </Text>
            <Text>Número celular: </Text>
            <Text>Idiomas: </Text>

            <CheckboxLogo source={require('../src/imgs/coreia-do-sul.png')}/>
            

        </Background>
    );
}