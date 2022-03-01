import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert } from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'
import {adicionaHistorico} from '../../services/historic.service';


export default function Quiz({ navigation }) {
    const salaID = '621bf0052d53a30016a0b571';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWJmMTkzMmQ1M2EzMDAxNmEwYjU3ZSIsImlhdCI6MTY0NjA4MDc4NH0.2Vhsn6B1o6lJPlIS4MCdJrwwQo3hS67Rhuw9BOJBfns';
    const userId = '621bf1932d53a30016a0b57e';
    let perguntasID = [];
    let perguntasQuiz = [];
    const [loading, setLoading] = useState(true);
    const [pergunta, setPergunta] = useState(null);


    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getQuiz();
        });

        return unsubscribe;
    }, [navigation]);

    function getQuiz() {

        try {
            fetch(settings.backend.url + `/historico/obterItens/${salaID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },

            })
                .then(response => response.json())
                .then(responseJson => {
                    perguntasID = responseJson;
                    getPerguntas();
                })
                .catch(error => {
                    console.log('deu errado');
                    console.error(error);
                });

        } catch (e) {
            console.log('deu ruim na requisição')
            console.log(e);
        }

    }

    async function getPerguntas() {

        for (let index = 0; index < perguntasID.length; index++) {
            const element = perguntasID[index];
            let pergunta = await getPergunta(element);
            perguntasQuiz.push(pergunta);
        }       
        proximaPergunta();
        setLoading(false);
    }

    async function getPergunta(elemento) {
        let retorno = '';
        await fetch(settings.backend.url + `/pergunta/${elemento}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },

        })
            .then(response => response.json())
            .then(responseJson => {
                retorno = responseJson;
            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });

        return retorno;
    }

    function proximaPergunta(){
        console.log('antes');
        console.log(perguntasQuiz);
        if(perguntasQuiz.length === 0){
            Alert.alert('O Jogo Acabou');
            return;
        }        
        
        let perguntaTemp = perguntasQuiz.shift();
        console.log('A pergunta');
        console.log(perguntaTemp);
        setPergunta(perguntaTemp);
        console.log('depois');
        console.log(perguntasQuiz);
    }

    function validaResposta(alternativa){
       
        if(alternativa.perguntaCorreta === 'true'){
            //adicionaHistorico(token,salaID,userId,'Quiz',pergunta._id,'true');
            console.log('Acertou');
        }else{
            //adicionaHistorico(token,salaID,userId,'Quiz',pergunta._id,'false');
            console.log('Errou');
        }
        proximaPergunta();
    }

    if (loading) {
        return <Text>Loading</Text>
    } else {
        return <>
            <SafeAreaView style={estilos.fundo}>
                <StatusBar backgroundColor="rgb(35, 36, 95)" />

                <View style={estilos.topo}>
                    <Image source={require('../Images/categoria.png')} style={estilos.icon_categotia} />
                    <Text style={estilos.titulo}>{pergunta.classe}</Text>
                    <View style={estilos.tempo} >
                        <Image source={require('../Images/fundo-tempo.png')} style={estilos.icon_categotia} />
                        <Text style={estilos.relogio}>20</Text>
                    </View>
                </View>
                <View style={[estilos.pergunta, estilos.elevation]}>
                    <Text style={estilos.texto_pergunta}>{pergunta.descricao}</Text>
                    <Image source={require('../Images/A.gif')} style={estilos.img_pergunta} />

                </View>
                <View style={estilos.alternativas}>
                    <TouchableOpacity 
                        style={estilos.alternativa_button}
                        onPress={()=> {validaResposta(pergunta.alternativas[0])}} >
                        <Text style={estilos.texto_button}>{pergunta.alternativas[0].descricao}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={estilos.alternativa_button}
                        onPress={()=>{validaResposta(pergunta.alternativas[1])}}>
                        <Text style={estilos.texto_button}>{pergunta.alternativas[1].descricao}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={estilos.alternativa_button}
                        onPress={()=>{validaResposta(pergunta.alternativas[2])}}>
                        <Text style={estilos.texto_button}>{pergunta.alternativas[2].descricao}</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        </>


    }


}