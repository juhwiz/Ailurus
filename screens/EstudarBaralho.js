import { View } from 'react-native-web';
import { Background, Logo, Title, Button, ButtonText, CheckboxLogo,  InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody, 
        Text, ViewPerfil, Flags, ViewBaralho, Baralhos, TitleBaralho, ImageBaralho, 
        DescBaralho, ViewEstudarCarta, BotaoCarta, PalavraEscondida, PalavraVisivel, 
        ViewCarta, BotoesInferiores, Container} from '../styled';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

// ========================================================================

export default function TelaEstudarBaralho(){
    const [mostrarPalavra, setMostrarPalavra] = useState(false);
    
    return(
        <Background>          
            <ViewCarta >
                <ViewEstudarCarta>
                    <Container>
                        <PalavraEscondida>우리 / 저희</PalavraEscondida>
                        
                        {mostrarPalavra && <PalavraVisivel>Nós</PalavraVisivel>}
                        {mostrarPalavra ? (
                            <BotaoCarta onPress={() => setMostrarPalavra(false)}>
                                <Ionicons name={'eye-outline'} size={40} color={"grey"} />
                            </BotaoCarta>    
                        ) : (
                            <BotaoCarta onPress={() => setMostrarPalavra(true)}>
                                <Ionicons name={'eye-off'} size={40} color={"grey"} />
                            </BotaoCarta>
                        )}
                        
                    </Container>

                    <BotoesInferiores>
                        <BotaoCarta>
                            <Feather name="thumbs-down" size={40} color="black" />
                            <Text>Não lembrei</Text>
                        </BotaoCarta>
                        <BotaoCarta>
                            <Feather name="thumbs-up" size={40} color="black" />
                            <Text>Lembrei</Text>
                        </BotaoCarta>
                    </BotoesInferiores>
                </ViewEstudarCarta>
            </ViewCarta>
        </Background>
    );
}