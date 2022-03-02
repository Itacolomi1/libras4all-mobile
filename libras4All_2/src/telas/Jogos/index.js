import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 17);
const imageWidth = dimensions.width;

export default function Jogos({ route, navigation }) {
    const { userID, token } = route.params;    

    function goToTutorialQuiz() {
        navigation.navigate('Tutorial Quiz', { userID: userID, token: token });
    }

    function goToTutorialMeteoro() {
        navigation.navigate('Tutorial Meteoro', { userID: userID, token: token });
    }

    function goToTutorialMestreMando() {
        navigation.navigate('Tutorial Mestre Mando', { userID: userID, token: token });
    }

    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    function gotToHome() {
        navigation.navigate('Home', { userID: userID, token: token });
    }

    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)" />
            <View style={estilos.engloba}>
                <Image source={require('../Images/logo2.png')} style={{ height: imageHeight, width: imageWidth, marginTop: 30 }} />
            </View>
            <TouchableOpacity style={estilos.button} onPress={() => { goToTutorialQuiz() }}>
                <Image source={require('../Images/quiz.png')} style={estilos.btn_jogo} />
            </TouchableOpacity>

            <TouchableOpacity style={estilos.button} onPress={() => { goToTutorialMestreMando() }}>
                <Image source={require('../Images/mestre.png')} style={estilos.btn_jogo} />
            </TouchableOpacity>
            <TouchableOpacity style={estilos.button} onPress={() => { goToTutorialMeteoro() }}>
                <Image source={require('../Images/meteoro.png')} style={estilos.btn_jogo} />
            </TouchableOpacity>
            <View style={estilos.icon_area}>
                <TouchableOpacity onPress={() => { gotToHome() }}>
                    <Image source={require('../Images/home.png')} style={estilos.icon_home} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { gotoPin() }}>
                    <Image source={require('../Images/pin.png')} style={estilos.icon_pin} />
                </TouchableOpacity>
                <Image source={require('../Images/game.png')} style={estilos.icon_game} />
            </View>
        </SafeAreaView>
    </>
}