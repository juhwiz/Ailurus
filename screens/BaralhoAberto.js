import { View } from 'react-native-web';
import { Background, Logo, Title, Button, ButtonText, CheckboxLogo,  InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody, 
        Text, ViewPerfil, Flags, ViewBaralho, Baralhos, TitleBaralho, ImageBaralho, 
        DescBaralho, ViewCarta, FraseCarta, PalavraCarta, TraducaoCarta, Cartas} from '../styled';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

// ========================================================================

export default function TelaBaralhoAberto({ navigation }){
    return(
        <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 100, paddingTop: 50}}>
            <Background>
                <ImageBaralho style={{alignSelf: "center"}} source={require('../src/imgs/GenericAvatar.png')} />
                <TitleBaralho>Pronomes</TitleBaralho>
                <DescBaralho>Pronomes coreanos</DescBaralho>
                
                <ViewCarta>
                    <Cartas>
                        <PalavraCarta>저 / 나</PalavraCarta>
                        <TraducaoCarta>Eu</TraducaoCarta>
                        <FraseCarta>저는 내일 도착합니다.</FraseCarta>
                    </Cartas>
                    <Cartas>
                        <PalavraCarta>당신 / 너</PalavraCarta>
                        <TraducaoCarta>Você</TraducaoCarta>
                        <FraseCarta>당신은열이 있군요.</FraseCarta>
                    </Cartas>
                    <Cartas>
                        <PalavraCarta>그 / 그녀</PalavraCarta>
                        <TraducaoCarta>Ele / Ela</TraducaoCarta>
                        <FraseCarta>그분은 등산하러 가셨습니다.</FraseCarta>
                    </Cartas>
                    <Cartas>
                        <PalavraCarta>우리 / 저희</PalavraCarta>
                        <TraducaoCarta>Nós</TraducaoCarta>
                        <FraseCarta>저희는 숲에 산책을 하러 갑니다.</FraseCarta>
                    </Cartas>
                </ViewCarta>


                <Button onPress={() => {navigation.navigate('CriarCarta');}}>
                    <ButtonText>Criar carta</ButtonText>
                </Button>
                <Button onPress={() => {navigation.navigate('EstudarBaralho');}}>
                    <ButtonText>Estudar baralho</ButtonText>
                </Button>
            </Background>
        </ScrollView>
    );
}