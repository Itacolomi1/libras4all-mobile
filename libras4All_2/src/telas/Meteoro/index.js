import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert, Animated } from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'
import { adicionaHistorico } from '../../services/historic.service';
import Cronometro from '../../componentes/cronometro';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import { listaImagens } from './list-imagens';


export default function Meteoro({ route, navigation }) {
    const { userID, token, salaID } = route.params;

    let sinaisID = [];
    let sinaisMeteoro = [];
    const [listaSinais, setListaSinais] = useState([]);
    const [sinalDaVez, setSinal] = useState(0);
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);
    const [loading, setLoading] = useState(true);
    const [positionLento, setPostioLento] = useState(new Animated.ValueXY(0, 0));
    const [positionMedio, setPostioMedio] = useState(new Animated.ValueXY(0, 0));
    const [positionRapido, setPostioRapido] = useState(new Animated.ValueXY(0, 0));


    const [meteoroLento, setMeteoroLento] = useState(true);
    const [gifMeteoroLento, setGifMeteoroLento] = useState(false);
    const [acertoMeteoroLento, setAcertoMeteoroLento] = useState(false);
    const [limiteMeteoroLento, setLimiteMeteoroLento] = useState(false);

    const [meteoroMedio, setMeteoroMedio] = useState(true);
    const [gifMeteoroMedio, setGifMeteoroMedio] = useState(false);
    const [acertoMeteoroMedio, setAcertoMeteoroMedio] = useState(false);
    const [limiteMeteoroMedio, setLimiteMeteoroMedio] = useState(false);

    const [meteoroRapido, setMeteoroRapido] = useState(true);
    const [gifMeteoroRapido, setGifMeteoroRapido] = useState(false);
    const [acertoMeteoroRapido, setAcertoMeteoroRapido] = useState(false);
    const [limiteMeteoroRapido, setLimiteMeteoroRapido] = useState(false);

    const [verifica,setVerifica] = useState(false);
    const [verificaLimite,setVerificaLimite] = useState(false);

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
            duration: 11000,
        }).start(() => {
            killMeteoro('lento');
            setLimiteMeteoroLento(true);
            setVerificaLimite(!verificaLimite);
        });
        setLoading(false);
    }

    function startAnimationMedio() {
        Animated.timing(positionMedio, {
            toValue: { x: 0, y: 420 },
            duration: 8000,
        }).start(() => {
            killMeteoro('medio');
            setLimiteMeteoroMedio(true);
            setVerificaLimite(!verificaLimite);
        });
    }

    function startAnimationRapido() {
        Animated.timing(positionRapido, {
            toValue: { x: 0, y: 420 },
            duration: 6500,
        }).start(() => {
            killMeteoro('rapido');
            setLimiteMeteoroRapido(true);
            setVerificaLimite(!verificaLimite);
        });
    }
    function stopAnimations(){
        Animated.timing(positionLento).stop();
        Animated.timing(positionMedio).stop();
        Animated.timing(positionRapido).stop();
    }
    function letItFall() {
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
                if (response.ok) {
                    return response.json();
                } else {
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

    function pathImage(id) {

        let lista = listaImagens();
        let imageTemp = lista.filter(x => x.id === listaSinais[id]._id);

        if (imageTemp[0] != undefined) {
            return imageTemp[0].image;
        } else {
            return null;
        }
    }

    function idImage(id) {
        return listaSinais[id]._id;
    }

    useEffect(()=>{
        console.log('passou pelo useEffect');
        validaFimJogo();  
    },[verifica]);

    useEffect(()=>{
        console.log('passou pelo useEffect');
        validaLimiteJogo();  
    },[verificaLimite]);

    function validaFimJogo(){
        let tempLento = acertoMeteoroLento;
        let tempMedio = acertoMeteoroMedio;
        let tempRapido = acertoMeteoroRapido;
        if(tempLento && tempMedio && tempRapido){
            goToResultado();
            return;

        }
    }

    function validaLimiteJogo(){
        let tempLento = limiteMeteoroLento;
        let tempMedio = limiteMeteoroMedio;
        let tempRapido = limiteMeteoroRapido;

        if(tempLento && tempMedio && tempRapido){
            goToResultado();
            return;
        }
    }

    async function validaResposta(letra) {

        resposta = listaSinais.find(x => x.descricao === letra);

        if (resposta) {
            setAcertos(acertos + 1);
            switch (letra) {

                case listaSinais[0].descricao:
                    killMeteoro('lento');
                    setAcertoMeteoroLento(true);
                    await adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[0]._id, 'true');
                    setVerifica(!verifica);
                    break;

                case listaSinais[1].descricao:
                    killMeteoro('rapido');
                    setAcertoMeteoroRapido(true);
                    await adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[1]._id, 'true');
                    setVerifica(!verifica);
                    break;

                case listaSinais[2].descricao:
                    killMeteoro('medio');
                    setAcertoMeteoroMedio(true);
                    await adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[2]._id, 'true');
                    setVerifica(!verifica);
                    break;

            }
        }

    }
    function killMeteoro(meteoro) {
        switch (meteoro) {

            case 'lento':
                setMeteoroLento(false);
                setGifMeteoroLento(true);
                break;
            case 'medio':
                setMeteoroMedio(false);
                setGifMeteoroMedio(true);
                break;

            case 'rapido':
                setMeteoroRapido(false);
                setGifMeteoroRapido(true);
                break;
        }

    }

    function goToResultado(){
        navigation.navigate('Resultado',
        {
            userID: userID,
            token: token,
            salaID: salaID,
            acertos: acertos,
            erros: erros
        });  
    }



    async function validaTempo(close) {
        
        if (!close) {
            
            // if (!acertoMeteoroLento) {
            //     await adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[0]._id, 'false');
            //     setErros(erros + 1);
            // }

            // if (!acertoMeteoroMedio) {
            //     await adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[2]._id, 'false');
            //     setErros(erros + 1);
            // }

            // if (!acertoMeteoroRapido) {
            //     await adicionaHistorico(token, salaID, userID, 'Meteoro', listaSinais[1]._id, 'false');
            //     setErros(erros + 1);
            // }
            stopAnimations();
            setErros(3 - acertos);
            goToResultado();
           
     
        }
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
                    {/* Meteoro Lento */}
                    {
                        meteoroLento && <Animated.Image key={idImage(0)} source={pathImage(0)} style={[positionLento.getLayout(), estilos.meteoro]} />
                    }
                    {
                        gifMeteoroLento && <Animated.Image source={require('../../assets/images/meteoro/explocao.gif')} style={[positionLento.getLayout(), estilos.meteoro]} />
                    }
                    {/* Meteoro Rápido */}

                    {
                        meteoroRapido && <Animated.Image key={idImage(1)} source={pathImage(1)} style={[positionRapido.getLayout(), estilos.meteoro]} />
                    }
                    {
                        gifMeteoroRapido && <Animated.Image source={require('../../assets/images/meteoro/explocao.gif')} style={[positionRapido.getLayout(), estilos.meteoro]} />
                    }
                    {/* Meteoro Médio */}

                    {
                        meteoroMedio && <Animated.Image key={idImage(2)} source={pathImage(2)} style={[positionMedio.getLayout(), estilos.meteoro]} />
                    }
                    {
                        gifMeteoroMedio && <Animated.Image source={require('../../assets/images/meteoro/explocao.gif')} style={[positionMedio.getLayout(), estilos.meteoro]} />
                    }
                </View>
                <View style={estilos.limite}>

                </View>
                <View style={[estilos.teclado, estilos.elevation]}>
                    <View style={estilos.campo}>
                        <TouchableOpacity onPress={() => { validaResposta('1') }} style={estilos.btn}><Text style={estilos.btnText}>1</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('2') }} style={estilos.btn}><Text style={estilos.btnText}>2</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('3') }} style={estilos.btn}><Text style={estilos.btnText}>3</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('4') }} style={estilos.btn}><Text style={estilos.btnText}>4</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('5') }} style={estilos.btn}><Text style={estilos.btnText}>5</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('6') }} style={estilos.btn}><Text style={estilos.btnText}>6</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('7') }} style={estilos.btn}><Text style={estilos.btnText}>7</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('8') }} style={estilos.btn}><Text style={estilos.btnText}>8</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('9') }} style={estilos.btn}><Text style={estilos.btnText}>9</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('0') }} style={estilos.btn}><Text style={estilos.btnText}>0</Text></TouchableOpacity>
                    </View>
                    <View style={estilos.campo}>
                        <TouchableOpacity onPress={() => { validaResposta('Q') }} style={estilos.btn}><Text style={estilos.btnText}>Q</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('W') }} style={estilos.btn}><Text style={estilos.btnText}>W</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('E') }} style={estilos.btn}><Text style={estilos.btnText}>E</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('R') }} style={estilos.btn}><Text style={estilos.btnText}>R</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('T') }} style={estilos.btn}><Text style={estilos.btnText}>T</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('Y') }} style={estilos.btn}><Text style={estilos.btnText}>Y</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('U') }} style={estilos.btn}><Text style={estilos.btnText}>U</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('I') }} style={estilos.btn}><Text style={estilos.btnText}>I</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('O') }} style={estilos.btn}><Text style={estilos.btnText}>O</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('P') }} style={estilos.btn}><Text style={estilos.btnText}>P</Text></TouchableOpacity>
                    </View>
                    <View style={estilos.campo}>
                        <TouchableOpacity onPress={() => { validaResposta('A') }} style={estilos.btn}><Text style={estilos.btnText}>A</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('S') }} style={estilos.btn}><Text style={estilos.btnText}>S</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('D') }} style={estilos.btn}><Text style={estilos.btnText}>D</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('F') }} style={estilos.btn}><Text style={estilos.btnText}>F</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('G') }} style={estilos.btn}><Text style={estilos.btnText}>G</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('H') }} style={estilos.btn}><Text style={estilos.btnText}>H</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('J') }} style={estilos.btn}><Text style={estilos.btnText}>J</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('K') }} style={estilos.btn}><Text style={estilos.btnText}>K</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('L') }} style={estilos.btn}><Text style={estilos.btnText}>L</Text></TouchableOpacity>
                    </View>
                    <View style={estilos.campo}>
                        <TouchableOpacity onPress={() => { validaResposta('Z') }} style={estilos.btn}><Text style={estilos.btnText}>Z</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('X') }} style={estilos.btn}><Text style={estilos.btnText}>X</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('C') }} style={estilos.btn}><Text style={estilos.btnText}>C</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('V') }} style={estilos.btn}><Text style={estilos.btnText}>V</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('B') }} style={estilos.btn}><Text style={estilos.btnText}>B</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('N') }} style={estilos.btn}><Text style={estilos.btnText}>N</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { validaResposta('M') }} style={estilos.btn}><Text style={estilos.btnText}>M</Text></TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </>





    }



}