import { Background, Logo, Title, Button, ButtonText, CheckboxLogo,  InputText,
        CheckboxContainer, CheckboxLabel, CheckboxSquare, LinkText, TextBody, 
        Text, ViewPerfil, Flags, ViewLetras,DivLetras, Letras, ScrollContainer } from '../styled';
import { ScrollView } from 'react-native';

// ========================================================================


export default function TelaAlfabeto(){
      return(
        <ScrollView style={{backgroundColor: '#F9F8DC'}} contentContainerStyle={{ paddingBottom: 100, paddingTop: 50}}>
             <Background>
                <Title >Conheça as letras do Hangul:</Title>
                <Text style={{fontSize: 20, marginTop: 30, alignSelf: 'center'}}>Vogais</Text>
                <ViewLetras>
                        <DivLetras><Letras>아</Letras><Letras>a</Letras></DivLetras>
                        <DivLetras><Letras>애</Letras><Letras>ae</Letras></DivLetras>
                        <DivLetras><Letras>야</Letras><Letras>ya</Letras></DivLetras>
                        <DivLetras><Letras>얘</Letras><Letras>yae</Letras></DivLetras>
                        <DivLetras><Letras>어</Letras><Letras>eo</Letras></DivLetras>
                        <DivLetras><Letras>에</Letras><Letras>e</Letras></DivLetras>
                        <DivLetras><Letras>여</Letras><Letras>yeo</Letras></DivLetras>
                        <DivLetras><Letras>예</Letras><Letras>ye</Letras></DivLetras>
                        <DivLetras><Letras>오</Letras><Letras>o</Letras></DivLetras>
                        <DivLetras><Letras>와</Letras><Letras>wa</Letras></DivLetras>
                        <DivLetras><Letras>왜</Letras><Letras>wae</Letras></DivLetras>
                        <DivLetras><Letras>외</Letras><Letras>oe</Letras></DivLetras>
                        <DivLetras><Letras>요</Letras><Letras>yo</Letras></DivLetras>
                        <DivLetras><Letras>우</Letras><Letras>u</Letras></DivLetras>
                        <DivLetras><Letras>워</Letras><Letras>wo</Letras></DivLetras>
                        <DivLetras><Letras>웨</Letras><Letras>we</Letras></DivLetras>
                        <DivLetras><Letras>위</Letras><Letras>wi</Letras></DivLetras>
                        <DivLetras><Letras>유</Letras><Letras>yu</Letras></DivLetras>
                        <DivLetras><Letras>으</Letras><Letras>eu</Letras></DivLetras>
                        <DivLetras><Letras>의</Letras><Letras>ui</Letras></DivLetras>
                        <DivLetras><Letras>이</Letras><Letras>i</Letras></DivLetras>
                </ViewLetras>
                <Text style={{fontSize: 20, marginTop: 30, alignSelf: 'center'}}>Consoantes</Text>
                <ViewLetras>
                        <DivLetras><Letras>ㄱ</Letras><Letras>g</Letras></DivLetras>
                        <DivLetras><Letras>ㄲ</Letras><Letras>kk</Letras></DivLetras>
                        <DivLetras><Letras>ㄴ</Letras><Letras>n</Letras></DivLetras>
                        <DivLetras><Letras>ㄷ</Letras><Letras>d</Letras></DivLetras>
                        <DivLetras><Letras>ㄸ</Letras><Letras>tt</Letras></DivLetras>
                        <DivLetras><Letras>ㄹ</Letras><Letras>r</Letras></DivLetras>
                        <DivLetras><Letras>ㅁ</Letras><Letras>m</Letras></DivLetras>
                        <DivLetras><Letras>ㅂ</Letras><Letras>b</Letras></DivLetras>
                        <DivLetras><Letras>ㅃ</Letras><Letras>pp</Letras></DivLetras>
                        <DivLetras><Letras>ㅅ</Letras><Letras>s</Letras></DivLetras>
                        <DivLetras><Letras>ㅆ</Letras><Letras>ss</Letras></DivLetras>
                        <DivLetras><Letras>ㅇ</Letras><Letras>ng</Letras></DivLetras>
                        <DivLetras><Letras>ㅈ</Letras><Letras>j</Letras></DivLetras>
                        <DivLetras><Letras>ㅉ</Letras><Letras>jj</Letras></DivLetras>
                        <DivLetras><Letras>ㅊ</Letras><Letras>ch</Letras></DivLetras>
                        <DivLetras><Letras>ㅋ</Letras><Letras>k</Letras></DivLetras>
                        <DivLetras><Letras>ㅌ</Letras><Letras>t</Letras></DivLetras>
                        <DivLetras><Letras>ㅍ</Letras><Letras>p</Letras></DivLetras>
                        <DivLetras><Letras>ㅎ</Letras><Letras>h</Letras></DivLetras>
                </ViewLetras>        
           </Background>
        </ScrollView>
             
      );        
}