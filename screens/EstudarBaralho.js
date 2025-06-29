import { Background,Text, ViewEstudarCarta, BotaoCarta, PalavraEscondida, 
    PalavraVisivel, ViewCarta, BotoesInferiores, Container} from '../styled';
import React, { useState, useEffect, useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { Animated } from 'react-native';
import { ApiContext } from '../src/context/ApiContext'

// ========================================================================

export default function TelaEstudarBaralho({ route, navigation }){
    const { baralho } = route.params;
    const { baseURL } = useContext(ApiContext);

    const [cartas, setCartas] = useState([]);
    const [indice, setIndice] = useState(0);
    const [mostrarPalavra, setMostrarPalavra] = useState(false);
    const [lembreiTotal, setLembreiTotal] = useState(0);
    const [naoLembreiTotal, setNaoLembreiTotal] = useState(0);
    const [feedback, setFeedback] = useState(null); 
    
    const fadeAnim = useState(new Animated.Value(0))[0];
    
    useEffect(() => {
        fetch(`${baseURL}/cartas/baralho/${baralho.idBaralho}`)
          .then(res => res.json())
          .then(data => {
            const embaralhadas = data.sort(() => Math.random() - 0.5); // Embaralhar
            setCartas(embaralhadas);
          })
          .catch(err => console.error('Erro ao buscar cartas:', err));
    }, [baralho]);

    const cartaAtual = cartas[indice];

    function proximaCarta() {
        setMostrarPalavra(false);
        setFeedback(null);
        if (indice + 1 < cartas.length) {
          setIndice(indice + 1);
        } else {
          setIndice(0); 
        }
    }

    function mostrarFeedback(tipo) {
        setFeedback(tipo);
        
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => {
                    atualizarContador(tipo);
                });
            }, 600);
        });
    }

    async function atualizarContador(tipo) {
        if (!cartaAtual) return;

        try {
            await fetch(`${baseURL}/cartas/${cartaAtual.idCarta}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contador: tipo, 
                })
            });
            
            if (tipo === 'lembrei') setLembreiTotal(prev => prev + 1);
            else setNaoLembreiTotal(prev => prev + 1);
            
            proximaCarta();
        } catch (error) {
            console.error('Erro ao atualizar contador:', error);
        } finally {
            if(indice + 1 < cartas.length) {
                setIndice(indice + 1);
                setMostrarPalavra(false);
                setFeedback(null);
            } else {
                navigation.replace('FimEstudo', {
                   lembrei: lembreiTotal + (tipo === 'lembrei' ? 1 : 0),
                   naoLembrei: naoLembreiTotal + (tipo === 'naoLembrei' ? 1 : 0), 
                });
            }
        }
    }

    if (!cartaAtual) {
        return (
        <Background>
          <Text style={{ marginTop: 100 }}>Nenhuma carta encontrada neste baralho.</Text>
        </Background>
        );
    } 

    return(
        <Background>          
            <ViewCarta >
                <ViewEstudarCarta>
                    <Container>
                        <PalavraEscondida>{cartaAtual.palavraCarta}</PalavraEscondida>
                        
                        {mostrarPalavra && (
                          <>
                            <PalavraVisivel>{cartaAtual.significadoPalavra}</PalavraVisivel>
                            <PalavraVisivel>{cartaAtual.frasePalavra}</PalavraVisivel>
                          </>
                        )}

                        <BotaoCarta onPress={() => setMostrarPalavra(!mostrarPalavra)}>
                          <Ionicons name={mostrarPalavra ? 'eye-outline' : 'eye-off'} size={40} color="grey" />
                        </BotaoCarta>
                    </Container>

                    <Animated.View style={{opacity: fadeAnim, alignSelf: 'center', marginTop: 10,}}>
                      {feedback === 'lembrei' && <Text style={{ fontSize: 24, color: 'green' }}>✔️ Lembrou!</Text>}
                      {feedback === 'naoLembrei' && <Text style={{ fontSize: 24, color: 'red' }}>❌ Não lembrou</Text>}
                    </Animated.View>

                    <BotoesInferiores>
                        <BotaoCarta onPress={() => mostrarFeedback('naoLembrei')}>
                            <Feather name="thumbs-down" size={40} color="black" />
                            <Text>Não lembrei</Text>
                        </BotaoCarta>
                        <BotaoCarta onPress={() => mostrarFeedback('lembrei')}>
                            <Feather name="thumbs-up" size={40} color="black" />
                            <Text>Lembrei</Text>
                        </BotaoCarta>
                    </BotoesInferiores>
                </ViewEstudarCarta>
            </ViewCarta>
        </Background>
    );
}