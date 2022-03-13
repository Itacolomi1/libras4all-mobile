import React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import acertou from '../Images/acertou.json';
import errou from '../Images/errou.json';
export default function Resultado() {
    //Get parameter
   

    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    
    function gotoPerfil() {
        navigation.navigate('Perfil', { userID: userID, token: token });
    }
    function gotoJogos() {
        navigation.navigate('Jogos', { userID: userID, token: token });
    }
   
    return <>

        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)" />
            <View style={estilos.topo}>
               
                <Image source={require('../Images/logo.png')} style={estilos.logo} />
               
            </View>
            <Text style={estilos.titulo}>Resultado</Text>
            <View style={[estilos.bloco, estilos.elevation]}>
                <Text style={estilos.txt}>Acertos:</Text>
                <Text style={estilos.qtd_acertos}>0</Text>
               
            </View>
            <View style={[estilos.bloco, estilos.elevation]}>
                <Text style={estilos.txt}>Erros:</Text>
                <Text style={estilos.qtd_erros}>0</Text>               
            </View>
 
            <Lottie  style={estilos.carregar_animate} source={errou} autoPlay loop renderMode='contain' autoSize />
            
            <View style={estilos.icon_area}>
                <TouchableOpacity>
                    <Image source={require('../Images/home.png')} style={estilos.icon_home} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { gotoPin() }}>
                    <Image source={require('../Images/pin.png')} style={estilos.icon_pin} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { gotoJogos() }}>
                    <Image source={require('../Images/game.png')} style={estilos.icon_game} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    </>
}