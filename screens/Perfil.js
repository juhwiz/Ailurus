import { Background, Button, ButtonText, Text, ViewPerfil, Flags } from '../styled';
import React, { useState, useEffect, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';
import { UserContext } from '../src/context/UserContext';
import { ApiContext } from '../src/context/ApiContext'

// ===========================================================================


export default function TelaPerfil(){
    const [usuario, setUsuario] = useState(null);
    const [novaImagem, setNovaImagem] = useState(null);
    
    const { idUsuario } = useContext(UserContext);
    const { baseURL } = useContext(ApiContext);

    useEffect(() => {
    fetch(`${baseURL}/usuarios/${idUsuario}`)
      .then(res => res.json())
      .then(data => setUsuario(data))
      .catch(err => console.error('Erro ao buscar usuário:', err));
    }, []);

    async function EscolherImagem() {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          quality: 1,
        });

        if (!result.canceled) {
          const uri = result.assets[0].uri;
          setNovaImagem(uri);
          salvarImagem(uri);
        }
    }

    function salvarImagem(uri) {
        const nomeArquivo = `perfil_${idUsuario}.jpg`;

        const formData = new FormData();
        formData.append('imagem', {
        uri,
        name: nomeArquivo,
        type: 'image/jpeg',
        });

        fetch(`${baseURL}/upload/${idUsuario}`, {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => res.json())
        .then(data => {
            console.log('Imagem enviada:', data);
            setUsuario(prev => ({
              ...prev,
              imagemPerfil: data.imagemPerfil,
        }));
        })
        .catch(err => console.error('Erro ao enviar imagem:', err));
    }

    return(
        <Background>
            <Image source={ novaImagem
                ? { uri: novaImagem }
                : usuario?.imagemPerfil
                  ? { uri: `${baseURL}/uploads/${usuario.imagemPerfil}?t=${Date.now()}` }
                  : require('../src/imgs/GenericAvatar.png')
                } style={{ width: 130, height: 130, borderRadius: 75 }} />
            <Button 
                style={{marginTop: 10 }}
                onPress={EscolherImagem}> 
                <ButtonText>Editar</ButtonText>
            </Button>
            {usuario ? (
                <ViewPerfil>
                    <Text>Nome: {usuario.nome}</Text>
                    <Text>E-mail: {usuario.email}</Text>
                    <Text>Número celular: {usuario.numeroCel}</Text>
                    <Text>Idiomas: </Text>
                    {usuario.idIdiomaSelecionado === 1 && (
                        <Flags source={require('../src/imgs/coreia-do-sul.png')}/>
                    )}
                </ViewPerfil>
            ) : (
                <Text>Carregando informações...</Text>
            )}
            
        </Background>
    );
}