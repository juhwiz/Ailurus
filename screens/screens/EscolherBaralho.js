import { View } from 'react-native-web';
import { Background, Logo, Title, Button, ButtonText, CheckboxLogo,  InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody, 
        Text, ViewPerfil, Flags, ViewBaralho, Baralhos, TitleBaralho, ImageBaralho, 
        DescBaralho} from '../styled';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

// ========================================================================

export default function TelaEscolherBaralho({ navigation }){
    return(
        <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 130, paddingTop: 50}}>
            <Background>
                <Title style={{alignSelf:'flex-start', marginBottom: 15}}>Baralhos</Title>
                <ViewBaralho>
                    <Baralhos onPress={() => {navigation.navigate('BaralhoAberto');}}>
                        <ImageBaralho source={require('../src/imgs/GenericAvatar.png')} />
                        <TitleBaralho>Automoveis</TitleBaralho>
                        <DescBaralho>Essa é a descrição do baralho, muito importante</DescBaralho>
                    </Baralhos>
                    <Baralhos onPress={() => {navigation.navigate('BaralhoAberto');}}>
                        <ImageBaralho source={require('../src/imgs/GenericAvatar.png')} />
                        <TitleBaralho>Nome Composto</TitleBaralho>
                        <DescBaralho>Essa é a descrição do baralho, muito importante. Eu preciso de uma descrição mais longa. Muito mais, muito mais, muito mais, muito mais longa</DescBaralho>
                    </Baralhos>
                    <Baralhos onPress={() => {navigation.navigate('BaralhoAberto');}}>
                        <ImageBaralho source={require('../src/imgs/GenericAvatar.png')} />
                        <TitleBaralho>Nome Composto Teste</TitleBaralho>
                        <DescBaralho>Essa é a descrição do baralho, muito importante</DescBaralho>
                    </Baralhos>
                    <Baralhos onPress={() => {navigation.navigate('BaralhoAberto');}}>
                        <ImageBaralho source={require('../src/imgs/GenericAvatar.png')} />
                        <TitleBaralho>Cores</TitleBaralho>
                        <DescBaralho>Essa é a descrição do baralho, muito importante</DescBaralho>
                    </Baralhos>
                    <Baralhos onPress={() => {navigation.navigate('BaralhoAberto');}}>
                        <ImageBaralho source={require('../src/imgs/GenericAvatar.png')} />
                        <TitleBaralho>Eu amo a Luiza</TitleBaralho>
                        <DescBaralho>Eu quero logo o anel!!!</DescBaralho>
                    </Baralhos>                
                </ViewBaralho>
                <Button onPress={() => {navigation.navigate('CriarBaralho');}}>
                    <ButtonText>Criar baralho</ButtonText>
                </Button>
            </Background>
        </ScrollView>
    );
    
}