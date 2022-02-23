import React from 'react';
import {Text,View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';

export default function Cadastro() {
    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/>
        
            <View style={estilos.engloba}>
                <Text style={estilos.Titulo}>CADASTRO</Text>
            </View>
            <View style={estilos.icon_area}>
            <Image source={require('../Images/user.png')} style={estilos.input_icon} />
            <TextInput 
                style={estilos.cadastro__input}
                placeholder="Nome"
                placeholderTextColor="#acacac" 
                
                />
                </View>
            <View style={estilos.icon_area}>
            <Image source={require('../Images/email.png')} style={estilos.input_icon} />
            <TextInput 
                style={estilos.cadastro__input}
                placeholder="Email"
                placeholderTextColor="#acacac" 
               
                />
                </View>
                <View style={estilos.icon_area}>
                <Image source={require('../Images/cadeado.png')} style={estilos.input_icon} />
           
            <TextInput 
                style={estilos.cadastro__input}
                placeholder='Senha'
                placeholderTextColor="#acacac" 
                
                secureTextEntry={true}/>
                </View>
            <View style={estilos.botao}>               
                <TouchableOpacity  style={estilos.salvar_button}>
                    <Text style={estilos.texto_button}>Salvar</Text>
                </TouchableOpacity>           
            </View>
   
        </SafeAreaView>
    </>
}