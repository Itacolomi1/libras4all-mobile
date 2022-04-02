import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert, Animated } from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'
import { adicionaHistorico } from '../../services/historic.service';
import Cronometro from '../../componentes/cronometro';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';

export default function Meteoro({ route, navigation }) {
    const { userID, token, salaID } = route.params;

    let sinaisID = [];
    let sinaisMeteoro = [];
    const [listaSinais, setListaSinais] = useState([]);
    const [sinalDaVez, setSinal] = useState(0);
    const [acertos, setAcertos] = useState(0);
    const [loading, setLoading] = useState(true);
    const [positionLento, setPostioLento] = useState(new Animated.ValueXY(0, 0));
    const [positionMedio, setPostioMedio] = useState(new Animated.ValueXY(0, 0));
    const [positionRapido, setPostioRapido] = useState(new Animated.ValueXY(0, 0));

    const hoursMinSecs = { hours: 0, minutes: 0, seconds: 20 }


    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMeteoro();
        });

        return unsubscribe;
    }, [navigation]);

    function startAnimationLento() {
        Animated.timing(positionLento, {
            toValue: { x: 0, y: 420 },
            duration: 10000,           
        }).start();
        setLoading(false);
    }
    
    function startAnimationMedio() {
        Animated.timing(positionMedio, {
            toValue: { x: 0, y: 420 },
            duration: 7000,           
        }).start();        
    }
    
    function startAnimationRapido() {
        Animated.timing(positionRapido, {
            toValue: { x: 0, y: 420 },
            duration: 5000,           
        }).start();       
    }
    function letItFall(){
        startAnimationLento();
        startAnimationMedio();
        startAnimationRapido();
    }

    function getMeteoro() {

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
                    sinaisID = responseJson;
                    console.log(sinaisID);
                    getSinais();
                })
                .catch(error => {
                    console.log('deu errado no get Meteoro');
                    console.error(error);
                });

        } catch (e) {
            console.log('deu ruim na requisição')
            console.log(e);
        }

    }

    async function getSinais() {

        for (let index = 0; index < sinaisID.length; index++) {
            const element = sinaisID[index];
            let pergunta = await getSinal(element);
            sinaisMeteoro.push(pergunta);
        }
        setListaSinais(sinaisMeteoro);
        setLoading(false);
        letItFall();
    }

    async function getSinal(elemento) {
        let retorno = '';
        await fetch(settings.backend.url + `/meteoro/obterSinal/${elemento}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },

        })
            .then(response => {
                if(response.ok){
                    return response.json();
                }else{
                    console.log(response);
                }            
            })
            .then(responseJson => {
                retorno = responseJson;
            })
            .catch(error => {
                console.log('deu errado no getSinal');
                console.error(error);
            });

        return retorno;
    }

    function proximoSinal() {
        let tempNumb = sinalDaVez;
        if ((tempNumb + 1) >= sinalDaVez.length) {
            Alert.alert('O Jogo Acabou');
            return;
        }
        setSinal(sinalDaVez + 1);
    }

    async function validaTempo(close) {

        if (!close) {
            await adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[sinalDaVez]._id, 'false');
        }
    }

    function registra_resultado(resultado) {

        if (resultado) {
            adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[sinalDaVez]._id, 'true');
            Alert.alert('Acertouuuuu');
        } else {
            adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[sinalDaVez]._id, 'false');
            Alert.alert('Errouuuuuuuu');
        }
        proximoSinal();
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
                    <Image source={require('../Images/meteoro_icon.png')} style={estilos.icon_categotia} />
                    <Text style={estilos.titulo}></Text>
                    <Cronometro hoursMinSecs={hoursMinSecs} validaTempo={validaTempo} />
                </View>
                <View style={estilos.meteoros}>
                    <Animated.Image source={require('../../assets/images/meteoro/A.png')} style={[positionLento.getLayout(), estilos.meteoro]} />
                    <Animated.Image source={require('../../assets/images/meteoro/A.png')} style={[positionRapido.getLayout(), estilos.meteoro]} />
                    <Animated.Image source={require('../../assets/images/meteoro/A.png')} style={[positionMedio.getLayout(), estilos.meteoro]} />                   
                </View>
                <View style={estilos.limite}>

                </View>
                <View style={[estilos.teclado, estilos.elevation]}>
                    <View style={estilos.campo}>
                        <TouchableOpacity onPress={()=>{letItFall()}} style={estilos.btn}><Text style={estilos.btnText}>1</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>2</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>3</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>4</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>5</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>6</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>7</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>8</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>9</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>0</Text></TouchableOpacity>
                    </View>
                    <View style={estilos.campo}>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>Q</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>W</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>E</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>R</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>T</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>Y</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>U</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>I</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>O</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>P</Text></TouchableOpacity>
                    </View>
                    <View style={estilos.campo}>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>A</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>S</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>D</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>F</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>G</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>H</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>J</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>K</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>L</Text></TouchableOpacity>
                    </View>
                    <View style={estilos.campo}>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>Z</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>X</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>C</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>V</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>B</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>N</Text></TouchableOpacity>
                        <TouchableOpacity style={estilos.btn}><Text style={estilos.btnText}>M</Text></TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </>





    }



}