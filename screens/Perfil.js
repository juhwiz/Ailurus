import { View } from 'react-native-web';
import { Background, Logo, Title, Button, ButtonText, CheckboxLogo,  InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody, 
        Text, ViewPerfil, Flags } from '../styled';
import React, { useState } from 'react';

export default function TelaPerfil({ navigation }){
    //Falta trocar para onde vai o botão editar***************
    return(
        <Background>
            <Logo source={require('../src/imgs/GenericAvatar.png')}/>
            <Button 
                style={{marginTop: 10 }}
                onPress={() => navigation.navigate('Idioma')}> 
                <ButtonText>Editar</ButtonText>
            </Button>

            <ViewPerfil>
                <Text>Nome: </Text>
                <Text>E-mail: </Text>
                <Text>Número celular: </Text>
                <Text>Idiomas: </Text>
                <Flags source={require('../src/imgs/coreia-do-sul.png')}/>
            </ViewPerfil>
            
            

        </Background>
    );
}