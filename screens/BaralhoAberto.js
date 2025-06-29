import { Background, Button, ButtonText, TitleBaralho, ImageBaralho, 
        DescBaralho, ViewCarta, FraseCarta, PalavraCarta, TraducaoCarta, Cartas} from '../styled';
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView } from 'react-native';
import { ApiContext } from '../src/context/ApiContext'

// ========================================================================

export default function TelaBaralhoAberto({ route, navigation }){
    const { baralho } = route.params;
    const { baseURL } = useContext(ApiContext);
    
    const [cartas, setCartas] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/cartas/baralho/${baralho.idBaralho}`)
            .then(res => res.json())
            .then(data => setCartas(data))
            .catch(err => console.error('Erro ao buscar cartas:', err));
    }, [baralho]);
    
    return(
        <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 100, paddingTop: 50}}>
            <Background>
                <ImageBaralho style={{alignSelf: "center", borderRadius: 75, width: 130, height: 130}} source={baralho.imagemBaralho
                        ? { uri: `${baseURL}/uploads/${baralho.imagemBaralho}` }
                        : require('../src/imgs/GenericAvatar.png')} />
                <TitleBaralho>{baralho.nomeBaralho}</TitleBaralho>
                <DescBaralho>{baralho.descBaralho}</DescBaralho>
                
                <ViewCarta>
                    {cartas.map((carta, index) => (
                        <Cartas key={index}>
                            <PalavraCarta>{carta.palavraCarta}</PalavraCarta>
                            <TraducaoCarta>{carta.significadoPalavra}</TraducaoCarta>
                            <FraseCarta>{carta.frasePalavra}</FraseCarta>
                        </Cartas>
                    ))}
                </ViewCarta>


                <Button onPress={() => {navigation.navigate('CriarCarta', { baralhoSelecionado: baralho });}}>
                    <ButtonText>Criar carta</ButtonText>
                </Button>
                <Button onPress={() => {navigation.navigate('EstudarBaralho', { baralho });}}>
                    <ButtonText>Estudar baralho</ButtonText>
                </Button>
            </Background>
        </ScrollView>
    );
}