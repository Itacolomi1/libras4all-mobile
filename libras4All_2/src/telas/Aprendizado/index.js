import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';


export default function Aprendizado({ route, navigation }) {
    const { userID, token } = route.params;

    function gotoAlfabeto() {
        navigation.navigate('Alfabeto', { userID: userID, token: token });
    }
    
    function gotoNumerais() {
        navigation.navigate('Numerais', { userID: userID, token: token });
    }
    function gotoSaudacoes() {
        navigation.navigate('Saudacoes', { userID: userID, token: token });
    }
    function gotoMeses() {
        navigation.navigate('Meses', { userID: userID, token: token });
    }
    function gotoSemana() {
        navigation.navigate('Semana', { userID: userID, token: token });
    }

    return <>
        <SafeAreaView style={estilos.fundo}>

        <Image source={require('../Images/logo.png')} style={estilos.logo} />

            <TouchableOpacity
                style={estilos.tema_button}
                onPress={gotoAlfabeto} >
                <Text style={estilos.texto_button}>Alfabeto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={estilos.tema_button}
                onPress={gotoNumerais} >
                <Text style={estilos.texto_button}>Números</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={estilos.tema_button}
                onPress={gotoSaudacoes} >
                <Text style={estilos.texto_button}>Saudações</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={estilos.tema_button}
                onPress={gotoMeses} >
                <Text style={estilos.texto_button}>Meses</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={estilos.tema_button}
                onPress={gotoSemana} >
                <Text style={estilos.texto_button}>Dias da Semana</Text>
            </TouchableOpacity>

        </SafeAreaView>
    </>
}