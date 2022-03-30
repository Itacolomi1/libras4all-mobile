import React, { useRef, useState, useEffect } from 'react';
import {    
    Text,
    View,
    SafeAreaView
} from 'react-native';
import * as settings from '../../assets/config/appSettings.json';
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import MestreMando from '../MestreMando';



export default function MestreMandoWrap({ route, navigation }) {
    const { userID, token, salaID } = route.params;
    const [loading, setLoading] = useState(true);
    const [listaSinais, setListaSinais] = useState([]);
    const [sinalDaVez, setSinal] = useState(0);
    const [mestreMandou, setMestreMandou] = useState(false);
    let sinaisId =[];

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMestreMando();
        });

        return unsubscribe;
    }, [navigation]);

    //Pegar os sinais cadastrados para esse jogo
    function getMestreMando() {
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
                    sinaisId = responseJson;
                    getSinais();
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

    // Itera entre todos os sinais e salva em uma lista
    async function getSinais() {
        for (let index = 0; index < sinaisId.length; index++) {
            const element = sinaisId[index];
            console.log('id do sinal: ' + element);
            let sinal = await getSinal(element);
            listaSinais.push(sinal);
        }
        setLoading(false);
        console.log(listaSinais);
    }
    //Pega os dados de um sinal singular
    async function getSinal(elemento) {
        let retorno = '';
        await fetch(settings.backend.url + `/mestreMandou/obterSinal/${elemento}`, {
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
    //#endregion

    if (loading) {
        return <>
            <SafeAreaView style={estilos.carregando}>
                <Lottie style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
            </SafeAreaView>
        </>

    } else {
        return <>
            <View><Text>Os dados carregaram hehe</Text></View>
        </>

    }

    if(mestreMandou){
        return<>

        
        </>
    }
}