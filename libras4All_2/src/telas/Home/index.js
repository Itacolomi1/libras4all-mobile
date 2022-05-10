import React, { useState, useEffect }from 'react';
import { Text, View, ScrollView, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import * as settings from '../../assets/config/appSettings.json';
import ModelSingleton from '../../shared/model.singleton';
import * as tf from '@tensorflow/tfjs';
import {bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { listaImagens } from './list-imagens';

export default function Home({ route, navigation }) {
    //Get parameter
    const { userID, token } = route.params;
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nivel, setNivel] = useState();
     
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUser();
        });

        return unsubscribe;
    }, [navigation]);

    //Carregar a Rede Neural
    useEffect(() => {
        getModel();
    },[])

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
                obterNivel(responseJson.libracoins);
                setLoading(false);       
                 
            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });
    }
    function pathImage(caracter) {
     
        let lista = listaImagens();
        let imageTemp =  lista.filter(x => x.id === caracter);

        if (imageTemp[0] != undefined) {
            
            return imageTemp[0].image;
        } else {
            return null;
        }
        
    }
    function obterNivel(resultado){
        if(parseInt(resultado) < 100){
            setNivel('Bronze');
        }
        else if(parseInt(resultado) < 400){
            setNivel('Prata');
        }
        else if(parseInt(resultado) < 800){
            setNivel('Ouro');
        }
        else if(parseInt(resultado) < 1100){
            setNivel('Rubi');
        }
        else {
            setNivel('Diamante');
        }
    }

    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    
    function gotoPerfil() {
        navigation.navigate('Perfil', { userID: userID, token: token });
    }
    function gotoJogos() {
        navigation.navigate('Aprendizado', { userID: userID, token: token });
    }

    function goToTutorialQuiz() {
        navigation.navigate('Tutorial Quiz', { userID: userID, token: token });
    }

    function goToTutorialMeteoro() {
        navigation.navigate('Tutorial Meteoro', { userID: userID, token: token });
    }

    function goToTutorialMestreMando() {
        navigation.navigate('Tutorial Mestre Mandou', { userID: userID, token: token });
    }

    function gotoRankingGeral() {
        navigation.navigate('Ranking Geral', { userID: userID, token: token });
    }
    function gotoTutorial(){
        navigation.navigate('Tutorial', { userID: userID, token: token });
    }
    function gotoTutorialPin(){
        navigation.navigate('Tutorial Pin', { userID: userID, token: token });
    }

    getModel = async () => {
        console.log('Começa a carregar o tensorflow');

        try {    
          await tf.ready();
          // Signal to the app that tensorflow.js can now be used.
          console.log('ready is on');
    
          await tf.setBackend('rn-webgl');
          console.log('backend is on');
    
          // Get reference to bundled model assets 
          const modelJson = require('../../assets/model/model.json');
          const modelWeights = require('../../assets/model/group-shard.bin');
    
    
          // 3. TODO - Load network      
          const net = await tf.loadGraphModel(
            bundleResourceIO(modelJson, modelWeights));
          console.log('modelo is on');
          
          let modelo = ModelSingleton.getInstance();
          modelo.setModelo(net);
    
        } catch (err) {
          console.log('erro no tensorflow');
          console.log(err);
        }
    };

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
            <TouchableOpacity
                style={[estilos.tema_button, estilos.elevation]}
                onPress={gotoTutorial} >
                <Text style={estilos.texto_button}>Novo por aqui? Acesse o tutorial</Text>
            </TouchableOpacity>

            <View style={[estilos.nivel, estilos.elevation]}>
                <Image key={nivel} source={pathImage(nivel)} style={estilos.icon_nivel}/>
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
                <TouchableOpacity onPress={() => { gotoTutorialPin() }}>
                    <Image source={require('../Images/pin.png')} style={estilos.icon_pin} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { gotoJogos() }}>
                    <Image source={require('../Images/learning.png')} style={estilos.icon_game} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    </>

    }
   

}