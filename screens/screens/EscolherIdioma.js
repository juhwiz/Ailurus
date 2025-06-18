
import { Background, Logo, Title, Button, ButtonText, InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, CheckboxLogo, LinkText, TextBody } from '../styled';
import React, { useState } from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';

// ========================================================================

export default function TelaIdioma({ navigation }){
    const [isChecked, setIsChecked] = useState(false);
    
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
                onPress={() => {
                    console.log('Idioma selecionado!');
                    navigation.navigate('Home');}}>
                <ButtonText>Começar!</ButtonText>
            </Button>

        </Background>   
    );
}