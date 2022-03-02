import React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';

export default function TutorialQuiz({ route, navigation }) {
    const { userID, token } = route.params;

    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    function gotToHome() {
        navigation.navigate('Home', { userID: userID, token: token });
    }
    function gotoJogos() {
        navigation.navigate('Jogos', { userID: userID, token: token });
    }
    



    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)" />
            <View style={estilos.bloco}>
                <Text style={estilos.titulo}>Quiz</Text>
                <View style={[estilos.tipo, estilos.elevation]}>
                    <Text style={estilos.texto}>Nesse jogo você terá <Image source={require('../Images/icon-time.png')} style={estilos.icon_time} /> 20s por questão para selecionar a alternativa correta.
                    </Text>
                    <Text style={estilos.texto}>Para cada resposta correta você ganha 10 Libracoins <Image source={require('../Images/coins.png')} style={estilos.icon} />
                    </Text>
                </View>
                <TouchableOpacity style={estilos.jogar_button}>
                    <Text style={estilos.texto_button}>Jogar</Text>
                </TouchableOpacity>
            </View>
            <View style={estilos.icon_area}>
                <TouchableOpacity onPress={()=>{gotToHome()}}>
                    <Image source={require('../Images/home.png')} style={estilos.icon_home} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{gotoPin()}}>
                    <Image source={require('../Images/pin.png')} style={estilos.icon_pin} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{gotoJogos()}}>
                    <Image source={require('../Images/game.png')} style={estilos.icon_game} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
}