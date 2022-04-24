import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';


export default function Aprendizado({ route, navigation }) {
    const { userID, token } = route.params;

    function gotoAlfabeto() {
        navigation.navigate('Alfabeto', { userID: userID, token: token });
    }
    
    function gotoNumerais() {
        navigation.navigate('Numerais', { userID: userID, token: token });
    }

    return <>
        <SafeAreaView style={estilos.fundo}>

            <TouchableOpacity
                style={estilos.tema_button}
                onPress={gotoAlfabeto}
            >

                <Text style={estilos.texto_button}>Alfabeto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={estilos.tema_button}
                onPress={gotoNumerais}
            >

                <Text style={estilos.texto_button}>Números</Text>
            </TouchableOpacity>


        </SafeAreaView>
    </>
}