import React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';


export default function TutorialMestreMando({ route, navigation }) {
    const { userID, token } = route.params;

    // Sala chumbada para jogos Geral
    const salaID = '63643f3c5d3a400016378cc7';

    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    function gotToHome() {
        navigation.navigate('Home', { userID: userID, token: token });
    }
    function gotoJogos() {
        navigation.navigate('Jogos', { userID: userID, token: token });
    }
    function gotoMestreMando() {
        navigation.navigate('Mestre Mando', {userID: userID,token: token, salaID: salaID});
    }

    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)" />
            <View style={estilos.bloco}>
                <Text style={estilos.titulo}>Mestre Mandou</Text>
                <View style={[estilos.tipo, estilos.elevation]}>
                    <Text style={estilos.aviso}> <Image source={require('../Images/aviso.png')} style={estilos.icon_time} /> Atenção nesse jogo é preciso ter acesso a câmera <Image source={require('../Images/camera.png')} style={estilos.icon_time} />   </Text>
                    <Text style={estilos.texto}>O jogo irá pedir para você fazer um sinal para câmera, você terá <Image source={require('../Images/icon-time.png')} style={estilos.icon_time} /> 20s para fazer o sinal, nosso algoritmo irá detectar se o sinal feito para câmera está correto ou não.
                    </Text>
                    <Text style={estilos.texto}>Se você não atingir um minimo de 80% o sinal será considerado como errado e você não ganhará Libracoins, caso contrário o sinal será considerado correto e você ganhará 10 Libracoins <Image source={require('../Images/coins.png')} style={estilos.icon} />

                    </Text>
                </View>
                <TouchableOpacity style={estilos.jogar_button} onPress={() => {gotoMestreMando()}}>
                    <Text style={estilos.texto_button}>Jogar</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>

    </>
}