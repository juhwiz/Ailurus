import React from 'react';
import { Text } from 'react-native';
import { Button, ButtonText, Background } from '../styled';

export default function TelaFimEstudo({ route, navigation }) {
    const { lembrei, naoLembrei } = route.params;

    return (
        <Background style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
                🎉 Parabéns!
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
                Você concluiu o baralho!
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>
                ✅ Lembrou: {lembrei}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
                ❌ Não lembrou: {naoLembrei}
            </Text>

            <Button onPress={() => navigation.navigate('Home')}>
                <ButtonText>Voltar ao início</ButtonText>
            </Button>
        </Background>
    );
}
