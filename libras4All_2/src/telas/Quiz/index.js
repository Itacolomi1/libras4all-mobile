import React, {useState,useEffect} from 'react';
import {Text,View, Dimensions, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';


export default function Quiz() {
    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/>
        
            <View style={estilos.topo}>
            <Image source={require('../Images/categoria.png')} style={estilos.icon_categotia}/>
            <Text style={estilos.titulo}>Nome categoria</Text>
            <View style={estilos.tempo} >    
            <Image source={require('../Images/fundo-tempo.png')} style={estilos.icon_categotia}/>  
                <Text style={estilos.relogio}>20</Text>
            </View>
            </View>
            <View style={[estilos.pergunta,  estilos.elevation]}>
            <Text style={estilos.texto_pergunta}>Qual alternativa corresponde a letra mostrada na imagem abaixo?</Text>
            <Image source={require('../Images/A.gif')} style={estilos.img_pergunta}/>  
                
            </View>
            <View style={estilos.alternativas}>
            <TouchableOpacity style={estilos.alternativa_button} >
                    <Text style={estilos.texto_button}>letra A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.alternativa_button}>
                    <Text style={estilos.texto_button}>letra B</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.alternativa_button}>
                    <Text style={estilos.texto_button}>letra C</Text>
            </TouchableOpacity>
          
            </View>
          
            
        </SafeAreaView>
    </>
}