import React, {useState,useEffect} from 'react';
import {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import Botao from '../../componentes/Botao'
import estilos from './estilos';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 17);
const imageWidth = dimensions.width;

export default function InserirPin() {
    return <>
         <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/>
        
            <View style={estilos.engloba}>
            <Image source={require('../Images/logo.png')} style={{ height: imageHeight, width: imageWidth }} />
            </View>
            <View style={estilos.icon_area}>
            <Image source={require('../Images/cadeado.png')} style={estilos.input_icon} />
            <TextInput 
                style={estilos.input}
                placeholder="Insira o Pin"
                placeholderTextColor="#acacac" 
                />
                </View>
                
            <View style={estilos.botao}>
                <TouchableOpacity  style={estilos.button}>
                    <Text style={estilos.texto_button}>Enviar</Text>
                </TouchableOpacity>           
            </View>
   
        </SafeAreaView>
    </>
}

const Logar = (userEmail,password) => {
    const corpo = JSON.stringify({"email":userEmail,"senha":password});
    console.log(corpo);
    fetch('https://libras4all.herokuapp.com/api/usuario/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"email":userEmail,"senha":password})
    })
    .then(response => response.json())
    .then(responseJson => {
        console.log('deu certo');
        console.log(responseJson);
    })
    .catch(error => {
      console.log('deu errado');
      console.error(error);
    });
}