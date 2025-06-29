import { Background, Title, Button, ButtonText, InputText } from '../styled';
import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback, SafeAreaView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { UserContext } from '../src/context/UserContext';
import { ApiContext } from '../src/context/ApiContext'

// ========================================================================

export default function TelaCriarBaralho({ navigation }){
    const { idUsuario } = useContext(UserContext);
    const { baseURL } = useContext(ApiContext);

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [novaImagem, setNovaImagem] = useState(null);
    
    async function EscolherImagem(){
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setNovaImagem(uri);
        }
    }

    async function CriarBaralho(){
        if (!nome || !descricao) {
            alert('Preencha todos os campos!');
            return;
        }
        
        const formData = new FormData();
        formData.append('nomeBaralho', nome);
        formData.append('descBaralho', descricao);
        formData.append('idUsuario', idUsuario);
        
        if (novaImagem) {
            const fileName = novaImagem.split('/').pop();
            const fileType = fileName.split('.').pop();

            formData.append('imagem', {
            uri: novaImagem,
            name: fileName,
            type: `image/${fileType}`,
            });
        }
        try {
            const response = await fetch(`${baseURL}/baralhos`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              body: formData,
            });
            const data = await response.json();
            console.log('Baralho criado:', data);
            navigation.navigate('Home', {
                screen: 'Baralho'
            });
        } catch (error) {
            console.error('Erro ao criar baralho:', error);
        }
    }



    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F8DC' }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1, backgroundColor: '#F9F8DC' }}>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ paddingBottom: 130, paddingTop: 50, flexGrow: 1}}> 
                <Background>
                    <Title>Crie seu baralho</Title>
                    <Image source={novaImagem ? { uri: novaImagem } : require('../src/imgs/GenericAvatar.png')}
                        style={{ width: 130, height: 130, borderRadius: 75, marginVertical: 20 }}/>                    
                    <Button 
                        style={{marginTop: 10, marginBottom: 30 }}
                        onPress={EscolherImagem}> 
                       <ButtonText>Editar</ButtonText>
                    </Button>  
                    <InputText style={{minWidth: 300}} type="text" id='nomeBaralho' placeholder='Nome baralho' value={nome} onChangeText={setNome} />
                    <InputText style={{minWidth: 300}} type="text" id='descricaoBaralho' placeholder='Descrição baralho' value={descricao} onChangeText={setDescricao} />
                    <Button onPress={CriarBaralho}>
                        <ButtonText>Criar baralho</ButtonText>
                    </Button>               
                </Background>
            </ScrollView>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}