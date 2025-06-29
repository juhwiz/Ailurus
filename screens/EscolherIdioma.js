
import { Background, Logo, Title, Button, ButtonText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, CheckboxLogo } from '../styled';
import React, { useState, useContext } from 'react';
import { Text } from 'react-native';
import { UserContext } from '../src/context/UserContext';
import { ApiContext } from '../src/context/ApiContext'

// ========================================================================

export default function TelaIdioma({ navigation }){
    const [isChecked, setIsChecked] = useState(false);
    const { idUsuario } = useContext(UserContext);
    const { baseURL } = useContext(ApiContext);

    function SalvarIdioma(){
        if (!isChecked) {
        alert("Você deve selecionar algum idioma.");
        return;
        }
        const idIdiomaSelecionado = 1;

        fetch(`${baseURL}/usuarios/${idUsuario}/idioma`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idIdiomaSelecionado })
        })
        .then(res => res.json())
        .then(data => {
          console.log('Idioma salvo:', data);
          navigation.navigate('Home');
        })
        .catch(err => {
          console.error('Erro ao salvar idioma:', err);
        });

    }

    return(
        <Background>
            <Logo source={require('../src/imgs/AilurusLogo.png')}/>
            <Title>Escolha quais idiomas você aprenderá!</Title>

            <CheckboxContainer 
                style={{marginTop: 40 }}
                onPress={() => setIsChecked(!isChecked)}>
                <CheckboxSquare checked={isChecked}>
                  {isChecked && <Text style={{ color: 'white' }}>✓</Text>}
                </CheckboxSquare>
                <CheckboxLogo source={require('../src/imgs/coreia-do-sul.png')}/>
                <CheckboxLabel>Coreano</CheckboxLabel>
            </CheckboxContainer>
            
            <Button 
                style={{marginTop: 40 }}
                onPress={SalvarIdioma}>
                <ButtonText>Começar!</ButtonText>
            </Button>

        </Background>   
    );
}