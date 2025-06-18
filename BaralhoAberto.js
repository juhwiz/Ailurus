import { View } from 'react-native-web';
import { Background, Logo, Title, Button, ButtonText, CheckboxLogo,  InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody, 
        Text, ViewPerfil, Flags, ViewBaralho, Baralhos, TitleBaralho, ImageBaralho, 
        DescBaralho} from '../styled';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

// ========================================================================

export default function TelaBaralhoAberto(){
    return(
        <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 130, paddingTop: 50}}>
            <Background>
                <Title>
                    Eu sou a tela baralho aberto
                </Title>
            </Background>
        </ScrollView>
    );
}