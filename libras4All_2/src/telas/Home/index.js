import React from 'react';
import {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';

export default function Home({ route ,navigation}) {
    //Get parameter
    const {userID,token} = route.params

    function gotoPin(){
        navigation.navigate('Inserir Pin', {userID: userID,token: token});
    }
    function gotoPerfil(){
        navigation.navigate('Perfil');
    }

    return <>
        
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/>
            <View style={estilos.topo}>
            <TouchableOpacity onPress={()=>{gotoPerfil()}}>
            <Image source={require('../Images/perfil.png')} style={estilos.icon_perfil}/>
            </TouchableOpacity>
            <Image source={require('../Images/logo.png')} style={estilos.logo}/>
            <Image source={require('../Images/trofeu.png')} style={estilos.icon_ranking}/>
            </View>
            <View style={[estilos.nivel , estilos.elevation]}>
            <Image source={require('../Images/bronze.png')} style={estilos.icon_nivel}/>
            <Text style={estilos.qtd_pontos}>0 Libracoins</Text>
            <Text style={estilos.txt}>Jogue mais e ganhe Libracoins para subir de nivel</Text>
            </View>
            
            <View style={estilos.jogos}>
            <TouchableOpacity  style={estilos.button}>
            <Image source={require('../Images/quiz.png')} style={estilos.btn_jogo} />
            </TouchableOpacity> 
            
            <TouchableOpacity  style={estilos.button}>
            <Image source={require('../Images/mestre.png')} style={estilos.btn_jogo} />
            </TouchableOpacity> 
            <TouchableOpacity  style={estilos.button}>
            <Image source={require('../Images/meteoro.png')} style={estilos.btn_jogo} />
            </TouchableOpacity> 
            </View>
            
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