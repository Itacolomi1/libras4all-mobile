import React, { useState, useEffect }from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import * as settings from '../../assets/config/appSettings.json';

export default function Home({ route, navigation }) {
    //Get parameter
    const { userID, token } = route.params;
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUser();
        });

        return unsubscribe;
    }, [navigation]);

    function getUser() {

        fetch(settings.backend.url + `/usuario/${userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },

        })
            .then(response => response.json())
            .then(responseJson => {
                setUsuario(responseJson);
                setLoading(false);            
            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });
    }

    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    
    function gotoPerfil() {
        navigation.navigate('Perfil', { userID: userID, token: token });
    }
    function gotoJogos() {
        navigation.navigate('Jogos', { userID: userID, token: token });
    }

    function goToTutorialQuiz() {
        navigation.navigate('Tutorial Quiz', { userID: userID, token: token });
    }

    function goToTutorialMeteoro() {
        navigation.navigate('Tutorial Meteoro', { userID: userID, token: token });
    }

    function goToTutorialMestreMando() {
        navigation.navigate('Tutorial Mestre Mando', { userID: userID, token: token });
    }

    function gotoRankingGeral() {
        navigation.navigate('Ranking Geral', { userID: userID, token: token });
    }

    if(loading){
        return <>
        <SafeAreaView style={estilos.carregando}>
            <Lottie style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
        </SafeAreaView>
        </>

    }else {
        return <>

        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)" />
            <View style={estilos.topo}>
                <TouchableOpacity onPress={() => { gotoPerfil() }}>
                    <Image source={require('../Images/perfil.png')} style={estilos.icon_perfil} />
                </TouchableOpacity>
                <Image source={require('../Images/logo.png')} style={estilos.logo} />
                <TouchableOpacity onPress={() => {gotoRankingGeral()}} >
                <Image source={require('../Images/trofeu.png')} style={estilos.icon_ranking} />
                </TouchableOpacity>
            </View>
            <View style={[estilos.nivel, estilos.elevation]}>
                <Image source={require('../Images/bronze.png')} style={estilos.icon_nivel} />
                <Text style={estilos.qtd_pontos}>{usuario.libracoins} Libracoins</Text>
                <Text style={estilos.txt}>Jogue mais e ganhe Libracoins para subir de nivel</Text>
            </View>

            <View style={estilos.jogos}>
                <TouchableOpacity onPress={() => {goToTutorialQuiz()}} style={estilos.button}>
                    <Image source={require('../Images/quiz.png')} style={estilos.btn_jogo} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {goToTutorialMestreMando()}} style={estilos.button}>
                    <Image source={require('../Images/mestre.png')} style={estilos.btn_jogo} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {goToTutorialMeteoro()}} style={estilos.button}>
                    <Image source={require('../Images/meteoro.png')} style={estilos.btn_jogo} />
                </TouchableOpacity>
            </View>

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
   

}