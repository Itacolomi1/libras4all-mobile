import React, {useState,useEffect} from 'react';
import {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 17);
const imageWidth = dimensions.width;

export default function Jogos() {
    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/>
        
            <View style={estilos.engloba}>
            <Image source={require('../Images/logo2.png')} style={{ height: imageHeight, width: imageWidth, marginTop: 30 }} />
            </View>
            <TouchableOpacity  style={estilos.button}>
            <Image source={require('../Images/quiz.png')} style={estilos.btn_jogo} />
            </TouchableOpacity> 
            
            <TouchableOpacity  style={estilos.button}>
            <Image source={require('../Images/mestre.png')} style={estilos.btn_jogo} />
            </TouchableOpacity> 
            <TouchableOpacity  style={estilos.button}>
            <Image source={require('../Images/meteoro.png')} style={estilos.btn_jogo} />
            </TouchableOpacity> 
            <View style={estilos.icon_area}>
            <Image source={require('../Images/home.png')} style={estilos.icon_home} />
            <TouchableOpacity onPress={()=>{gotoPin()}}>
            <Image source={require('../Images/pin.png')} style={estilos.icon_pin} />
            </TouchableOpacity>
            <Image source={require('../Images/game.png')} style={estilos.icon_game} />
            </View>
        </SafeAreaView>
    </>
}