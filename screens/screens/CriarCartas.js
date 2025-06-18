import { View } from 'react-native-web';
import { Background, Logo, Title, Button, ButtonText, CheckboxLogo,  InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody, 
        Text, ViewPerfil, Flags, PickerContainer, StyledPicker, TextPicker } from '../styled';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';

// ========================================================================

export default function TelaCriarCarta({ navigation }){
    const [baralhoSelecionado, setBaralhoSelecionado] = useState('');
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
            <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 130, paddingTop: 50, flex: 1}}>
                <Background>
                    <Title>Crie sua carta</Title>
                    <PickerContainer>
                        <StyledPicker selectedValue={baralhoSelecionado}
                        onValueChange={(itemValue) => setBaralhoSelecionado(itemValue)}>
                            <Picker.Item label='Selecionar um baralho' value=''/>
                            <Picker.Item label='Cor' value='cor'/>
                            <Picker.Item label='Objeto' value='objeto'/>
                        </StyledPicker>
                     </PickerContainer>


                     <InputText style={{minWidth: 300}} type="text" id='palavra' placeholder='Palavra' />
                     <InputText style={{minWidth: 300}} type="text" id='significado' placeholder='Significado' />
                     <InputText style={{minWidth: 300}} type="text" id='frase' placeholder='Frase de utilização' />

                     <Button onPress={() => {
                     console.log('Carta criada');
                     navigation.navigate('Home');}}>
                     <ButtonText>Criar carta</ButtonText>
                     </Button>

                </Background>
            </ScrollView>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}