import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, Alert, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import * as settings from '../../assets/config/appSettings.json'
import { listaImagens } from './list-imagens';

export default function Perfil({ route, navigation }) {
    const { userID, token } = route.params;
    const [loading, setLoading] = useState(true);
    const [usuario, setUsuario] = useState(null);
    const [listaSalas, setListaSalas] = useState([]);
    const [numeroSala, setNumeroSalas] = useState(0);
    const [nivel, setNivel] = useState();

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
                obterNivel(responseJson.libracoins);
                getSalas();
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


    function getSalas() {

        fetch(settings.backend.url + `/sala/listarSalasAluno/${userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },

        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(responseJson => {
                if (responseJson) {
                    setListaSalas(responseJson);
                    setNumeroSalas(responseJson.length);
                    setLoading(false);

                } else {
                    ;
                    console.log('Problema ao carregar lista de salas')
                }
            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });
    }


    function getNumeroQuiz() {
        return listaSalas.filter(x => x.tipoJogo === 'Quiz').length
    }

    function getNumeroMeteoro() {
        return listaSalas.filter(x => x.tipoJogo === 'Meteoro').length
    }

    function getNumeroMestreMando() {
        return listaSalas.filter(x => x.tipoJogo === 'Mestre Mandou').length
    }

    function gotoTutorialPin(){
        navigation.navigate('Tutorial Pin', { userID: userID, token: token });
    }
    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    function gotToHome() {
        navigation.navigate('Home', { userID: userID, token: token });
    }
    function gotoJogos() {
        navigation.navigate('Jogos', { userID: userID, token: token });
    }
    function logOut() {
        navigation.navigate('Login');
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

                    <Image source={require('../Images/logo.png')} style={estilos.logo} />
                </View>
                <ScrollView style={estilos.rolagem}>
                    <View style={[estilos.dados, estilos.elevation]}>
                        <View style={estilos.bloco}>
                            <Text style={estilos.texto_bold}>Nome:</Text>
                            <Text style={estilos.nome}>{usuario.nome}</Text>
                        </View>
                        <View style={estilos.bloco}>
                            <Text style={estilos.texto_bold}>Email:</Text>
                            <Text style={estilos.email}>{usuario.email}</Text>
                        </View>

                    </View>

                    <View style={[estilos.nivel, estilos.elevation]}>
                    <Image key={nivel} source={pathImage(nivel)} style={estilos.icon_nivel}/>
                        <Text style={estilos.qtd_pontos}>{usuario.libracoins} Libracoins</Text>
                        <Text style={estilos.txt}>Jogue mais e ganhe Libracoins para subir de nivel</Text>
                    </View>
                    <View style={[estilos.salas, estilos.elevation]}>
                        <Image source={require('../Images/sala.png')} style={estilos.icon_nivel} />
                        <Text style={estilos.texto}>Numero de Salas:</Text>
                        <Text style={estilos.qtd_sala}>{numeroSala}</Text>
                    </View>
                    <View style={[estilos.jogos, estilos.elevation]}>
                        <Image source={require('../Images/choose.png')} style={estilos.icon_nivel} />
                        <Text style={estilos.texto}>Sala Quiz:</Text>
                        <Text style={estilos.qtd_quiz}>{getNumeroQuiz()}</Text>
                    </View>
                    <View style={[estilos.jogos, estilos.elevation]}>
                        <Image source={require('../Images/megafone.png')} style={estilos.icon_nivel} />
                        <Text style={estilos.texto}>Sala Mestre Mandou:</Text>
                        <Text style={estilos.qtd_mestre}>{getNumeroMestreMando()}</Text>
                    </View>
                    <View style={[estilos.jogos, estilos.elevation]}>
                        <Image source={require('../Images/meteoro_icon.png')} style={estilos.icon_nivel} />
                        <Text style={estilos.texto}>Sala Meteoro:</Text>
                        <Text style={estilos.qtd_meteoro}>{getNumeroMeteoro()}</Text>

                    </View>
                </ScrollView>
                <TouchableOpacity style={estilos.sessao_button} onPress={() => {
                    Alert.alert('Atenção !!', 'Deseja realmente sair?', [

                        {
                            text: "Sim",
                            onPress: () => {
                                logOut();
                            }
                        },
                        {
                            text: "Não",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        }

                    ]);
                }}>
                    <Text style={estilos.texto_button}>Encerrar sessão</Text>
                </TouchableOpacity>

                <View style={estilos.icon_area}>
                    <TouchableOpacity onPress={() => { gotToHome() }}>
                        <Image source={require('../Images/home.png')} style={estilos.icon_home} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { gotoTutorialPin() }}>
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