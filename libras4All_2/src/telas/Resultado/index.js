import React, { useState, useEffect }from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import acertou from '../Images/acertou.json';
import errou from '../Images/errou.json';
import carregar from '../Images/carregar.json';
import * as settings from '../../assets/config/appSettings.json'
export default function Resultado({route,navigation}) {
    //Get parameter
    const { userID, token, salaID, acertos,erros} = route.params;

    const [loading, setLoading] = useState(true);
    const [tempAcertos, setTempAcertos] = useState(0);
    const [tempErros, setTempErros] = useState(0);
    const [bau,setBau] = useState();

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {         
            setBau((acertos > 0)? acertou:errou);
            setTempAcertos(acertos);
            setTempErros(erros);
            setLoading(false);
        });

        return unsubscribe;
    },[navigation]);



    function gotToHome() {
        navigation.navigate('Home', { userID: userID, token: token });
    }
    
    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    
    function gotoJogos() {
        navigation.navigate('Jogos', { userID: userID, token: token });
    }

    if(loading){
        return<>
            <SafeAreaView style={estilos.carregando}>
                <Lottie  style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
            </SafeAreaView>        
        </>
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
                <Text style={estilos.qtd_acertos}>{tempAcertos}</Text>
               
            </View>
            <View style={[estilos.bloco, estilos.elevation]}>
                <Text style={estilos.txt}>Erros:</Text>
                <Text style={estilos.qtd_erros}>{tempErros}</Text>               
            </View>
 
            <Lottie  style={estilos.carregar_animate} source={bau} autoPlay loop renderMode='contain' autoSize />
            
            <View style={estilos.icon_area}>
                <TouchableOpacity onPress={() => {gotToHome()}}>
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