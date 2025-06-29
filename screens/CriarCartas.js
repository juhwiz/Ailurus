import { Background, Title, Button, ButtonText, InputText, PickerContainer, StyledPicker} from '../styled';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect, useContext } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { UserContext } from '../src/context/UserContext';
import { ApiContext } from '../src/context/ApiContext'

// ========================================================================

export default function TelaCriarCarta({ route, navigation }){
    const [baralhoSelecionado, setBaralhoSelecionado] = useState('');
    const [baralhos, setBaralhos] = useState([]);
    const [palavra, setPalavra] = useState('');
    const [significado, setSignificado] = useState('');
    const [frase, setFrase] = useState('');

    const { idUsuario } = useContext(UserContext);
    const { baseURL } = useContext(ApiContext);

    const baralhoInicial = route.params?.baralhoSelecionado?.idBaralho || '';

    useEffect(() => {
        if (!idUsuario) return;

        fetch(`${baseURL}/baralhos/${idUsuario}`)
            .then(res => res.json())
            .then(data => { 
                setBaralhos(data);
                if (baralhoInicial) {
                    setBaralhoSelecionado(baralhoInicial);
                }
                })
            .catch(err => console.error('Erro ao buscar baralhos:', err));
    }, [idUsuario]);

    async function CriarCarta() {
        if (!baralhoSelecionado || !palavra || !significado || !frase) {
            alert('Preencha todos os campos!');
            return;
        }

        try {
            const response = await fetch(`${baseURL}/cartas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    palavraCarta: palavra,
                    significadoPalavra: significado,
                    frasePalavra: frase,
                    idBaralho: baralhoSelecionado
                })
            });

            const data = await response.json();
            console.log('Carta criada:', data);

            setPalavra('');
            setSignificado('');
            setFrase('');
            setBaralhoSelecionado('');
            
            const baralho = baralhos.find(b => b.idBaralho === baralhoSelecionado);

            navigation.navigate('BaralhoAberto', { baralho });


        } catch (error) {
            console.error('Erro ao criar carta:', error);
            alert('Erro ao criar carta');
        }
    }


    
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F8DC' }}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1}} >
            <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 130, paddingTop: 50, flex: 1}}>
                <Background>
                    <Title>Crie sua carta</Title>
                    <PickerContainer>
                        <StyledPicker selectedValue={baralhoSelecionado}
                        onValueChange={(itemValue) => setBaralhoSelecionado(itemValue)}>
                            <Picker.Item label='Selecionar um baralho' value=''/>
                            {baralhos.map((baralho) => (
                                <Picker.Item
                                    key={baralho.idBaralho}
                                    label={baralho.nomeBaralho}
                                    value={baralho.idBaralho}
                                />
                            ))}
                        </StyledPicker>
                     </PickerContainer>

                    <InputText style={{minWidth: 300}} 
                        type="text" id='palavra' placeholder='Palavra' 
                        value={palavra} onChangeText={setPalavra}
                    />
                    <InputText style={{minWidth: 300}} 
                        type="text" id='significado' placeholder='Significado'
                        value={significado} onChangeText={setSignificado} 
                    />
                    <InputText style={{minWidth: 300}} 
                        type="text" id='frase' placeholder='Frase de utilização'
                        value={frase} onChangeText={setFrase}
                    />
                    
                    <Button onPress={CriarCarta}>
                        <ButtonText>Criar carta</ButtonText>
                    </Button>

                </Background>
            </ScrollView>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}