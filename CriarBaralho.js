import { Background, Logo, Title, Button, ButtonText, InputText, TextBody,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText } from '../styled';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';


// ========================================================================

export default function TelaCriarBaralho({ navigation }){
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
            <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 130, paddingTop: 50, flex: 1}}> 
                <Background>
                    <Title>Crie seu baralho</Title>
                    <Logo style={{marginTop: 50}} source={require('../src/imgs/GenericAvatar.png')}/>
                    <Button 
                        style={{marginTop: 10, marginBottom: 30 }}
                        onPress={() => navigation.navigate('Idioma')}> 
                        <ButtonText>Editar</ButtonText>
                    </Button>  
                    <InputText style={{minWidth: 300}} type="text" id='nomeBaralho' placeholder='Nome baralho' />
                    <InputText style={{minWidth: 300}} type="text" id='descricaoBaralho' placeholder='Descrição baralho' />
                    <Button onPress={() => {
                        console.log('Carta criada');
                        navigation.navigate('Baralho');}}>
                        <ButtonText>Criar baralho</ButtonText>
                    </Button>               
                </Background>
            </ScrollView>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}