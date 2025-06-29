import { Background, Title, Button, ButtonText, ViewBaralho, Baralhos, TitleBaralho, ImageBaralho, 
        DescBaralho} from '../styled';
import React, { useState, useCallback, useContext } from 'react';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { UserContext } from '../src/context/UserContext';
import { ApiContext } from '../src/context/ApiContext'

// ========================================================================

export default function TelaEscolherBaralho({ navigation }){
    const [baralhos, setBaralhos] = useState([]);

    const { idUsuario } = useContext(UserContext);
    const { baseURL } = useContext(ApiContext);

    useFocusEffect(
        useCallback(() => {
            if (!idUsuario) {
              console.warn('idUsuario não foi recebido!');
            }
    
            fetch(`${baseURL}/baralhos/${idUsuario}`)
            .then(res => res.json())
            .then(data => setBaralhos(data))
            .catch(err => console.error('Erro ao buscar baralhos:', err));            
    
        }, [idUsuario])
    );

    return(
        <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 130, paddingTop: 50}}>
            <Background>
                <Title style={{alignSelf:'flex-start', marginBottom: 15}}>Baralhos</Title>
                
                <ViewBaralho>
                    {baralhos.map((baralho, index) => (
                        <Baralhos key={index} onPress={() => navigation.navigate('BaralhoAberto', { baralho })}>
                        <ImageBaralho style={{ width: 70, height: 70, borderRadius: 50, alignSelf:'flex-start'}} source={
                          baralho.imagemBaralho
                            ? { uri: `${baseURL}/uploads/${baralho.imagemBaralho}` }
                            : require('../src/imgs/GenericAvatar.png')
                        } />
                        <TitleBaralho>{baralho.nomeBaralho}</TitleBaralho>
                        <DescBaralho>{baralho.descBaralho}</DescBaralho>
                      </Baralhos>
                    ))}         
                </ViewBaralho>
                
                <Button onPress={() => {navigation.navigate('CriarBaralho', { idUsuario })}}>
                    <ButtonText>Criar baralho</ButtonText>
                </Button>
            </Background>
        </ScrollView>
    );
    
}