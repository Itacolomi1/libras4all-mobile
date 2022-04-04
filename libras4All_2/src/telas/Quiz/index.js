import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert } from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'
import { adicionaHistorico } from '../../services/historic.service';
import { listaImagens } from './lista-imagens';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import TransicaoCerto from '../TransicaoCerto';
import TransicaoErrado from '../TransicaoErrado';
import Cronometro from '../../componentes/cronometro';

export default function Quiz({ route, navigation }) {
    const { userID, token, salaID } = route.params;

    let perguntasID = [];
    let perguntasQuiz = [];
    const [loading, setLoading] = useState(true);
    const [listaPergunta, setListaPergunta] = useState([]);
    const [perguntaDaVez, setPerguntaDaVez] = useState(0);
    const [respostaCerta, setRespostaCerta] = useState(false);
    const [respostaErrada, setRespostaErrada] = useState(false);    
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);

    const hoursMinSecs = { hours: 0, minutes: 0, seconds: 20 }

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
        setListaPergunta(perguntasQuiz);
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

    function proximaPergunta() {

        let tempNumb = perguntaDaVez;
        if ((tempNumb + 1) >= listaPergunta.length) {
            //manda pra tela Resultado
            navigation.navigate('Resultado',
                {
                    userID: userID,
                    token: token,
                    salaID: salaID,
                    acertos: acertos,
                    erros:erros
                })
            return;
        }
        setPerguntaDaVez(perguntaDaVez + 1);
    }

    async function validaResposta(alternativa) {

        if (alternativa.perguntaCorreta === 'true') {
            await adicionaHistorico(token, salaID, userID, 'Quiz', listaPergunta[perguntaDaVez]._id, 'true');
            setAcertos(acertos + 1);
            setRespostaCerta(true);
        } else {
            await adicionaHistorico(token, salaID, userID, 'Quiz', listaPergunta[perguntaDaVez]._id, 'false');
            setErros(erros + 1);
            setRespostaErrada(true);
        }
        //proximaPergunta();
    }

    function idImage() {
        console.log(listaPergunta[perguntaDaVez]._id);
        return listaPergunta[perguntaDaVez]._id;
    }

    function pathImage() {

        let lista = listaImagens();
        let imageTemp = lista.filter(x => x.id === listaPergunta[perguntaDaVez]._id);

        if (imageTemp[0] != undefined) {
            return imageTemp[0].image;
        } else {
            return null;
        }
    }

    async function validaTempo(close){

        if(!close){
            await adicionaHistorico(token, salaID, userID, 'Quiz', listaPergunta[perguntaDaVez]._id, 'false');
            setErros(erros + 1);
            setRespostaErrada(true);
            proximaPergunta();
        }
    }

    function childToParent(close) {
        setRespostaCerta(close);
        proximaPergunta();
    }

    function erraQuestao(close) {
        setRespostaErrada(close);
        proximaPergunta();
    }


    if (respostaCerta) {
        return <>
            <TransicaoCerto childToParent={childToParent}></TransicaoCerto>
        </>
    }

    if (respostaErrada) {
        return <>
            <TransicaoErrado erraQuestao={erraQuestao} ></TransicaoErrado>
        </>
    }

    if (loading) {
        return <>
            <SafeAreaView style={estilos.carregando}>
                <Lottie style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
            </SafeAreaView>
        </>
    } else {
        return <>
            <SafeAreaView style={estilos.fundo}>
                <StatusBar backgroundColor="rgb(35, 36, 95)" />

                <View style={estilos.topo}>
                    <Image source={require('../Images/categoria.png')} style={estilos.icon_categotia} />
                    <Text style={estilos.titulo}>{listaPergunta[perguntaDaVez].classe}</Text>
                    <Cronometro hoursMinSecs={hoursMinSecs} validaTempo={validaTempo}/>
                </View>
                <View style={[estilos.pergunta, estilos.elevation]}>
                    <Text style={estilos.texto_pergunta}>{listaPergunta[perguntaDaVez].descricao}</Text>
                    <Image key={idImage()} source={pathImage()} style={estilos.img_pergunta} />

                </View>
                <View style={estilos.alternativas}>
                    <TouchableOpacity
                        style={estilos.alternativa_button}
                        onPress={() => { validaResposta(listaPergunta[perguntaDaVez].alternativas[0]) }} >
                        <Text style={estilos.texto_button}>{listaPergunta[perguntaDaVez].alternativas[0].descricao}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={estilos.alternativa_button}
                        onPress={() => { validaResposta(listaPergunta[perguntaDaVez].alternativas[1]) }}>
                        <Text style={estilos.texto_button}>{listaPergunta[perguntaDaVez].alternativas[1].descricao}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={estilos.alternativa_button}
                        onPress={() => { validaResposta(listaPergunta[perguntaDaVez].alternativas[2]) }}>
                        <Text style={estilos.texto_button}>{listaPergunta[perguntaDaVez].alternativas[2].descricao}</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        </>


    }


}