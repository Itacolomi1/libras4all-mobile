import React, { useRef, useState, useEffect } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import * as settings from '../../assets/config/appSettings.json';
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import MestreMando from '../MestreMando';
import TransicaoCertoMestre from '../TransicaoCertoMestre';
import {adicionaHistorico} from '../../services/historic.service';




export default function MestreMandoWrap({ route, navigation }) {
    const { userID, token, salaID } = route.params;
    const [loading, setLoading] = useState(true);
    const [listaSinais, setListaSinais] = useState([]);
    const [sinalDaVez, setSinal] = useState(0);
    const [mestreMandou, setMestreMandou] = useState(false);
    const [transicaoAcertou, setTransicaoAcertou] = useState(false);
    const [isLibracoins, setIsLibracoins] = useState(0);

    let sinaisId = [];

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
        setMestreMandou(true);
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

   async function ValidaMestre(close) {

        setMestreMandou(false);
        // validar com o close se é um acerto ou um erro
        if(close){
            setIsLibracoins(isLibracoins + 1);
            setTransicaoAcertou(true);
            await adicionaHistorico(token,salaID,userID,'Mestre Mandou',listaSinais[sinalDaVez]._id,'true')

        }
    }

    function TrocaLetra(close) {
        setTransicaoAcertou(close);
        //trocar a letra
        if ((sinalDaVez + 1) >= listaSinais.length) {
            //manda pra tela Resultado
            navigation.navigate('Resultado',
                {
                    userID: userID,
                    token: token,
                    salaID: salaID,
                    isLibracoins: (isLibracoins > 0) ? true : false
                })
            return;
        }
        setSinal(sinalDaVez + 1);
        setMestreMandou(true);
    }



    if (transicaoAcertou) {
        return <>
            <TransicaoCertoMestre TrocaLetra={TrocaLetra} />
        </>

    }

    if (mestreMandou) {
        return <>
            <MestreMando ValidaMestre={ValidaMestre} Letra={listaSinais[sinalDaVez].descricao} />
        </>
    }

    if (loading) {
        return <>
            <SafeAreaView style={estilos.carregando}>
                <Lottie style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
            </SafeAreaView>
        </>
    } else {
        console.log(mestreMandou);
        return <>
            <View><Text>Besteira Qualquer</Text></View>
        </>
    }





}