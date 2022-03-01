import React, {useState} from 'react';
import {Text} from 'react-native';
import * as settings from '../../assets/config/appSettings.json'
import {adicionaHistorico} from '../../services/historic.service';

export default function Meteoro({navigation}) {
    const salaID = '621bf02f2d53a30016a0b573';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWJmMTkzMmQ1M2EzMDAxNmEwYjU3ZSIsImlhdCI6MTY0NjA4MDc4NH0.2Vhsn6B1o6lJPlIS4MCdJrwwQo3hS67Rhuw9BOJBfns';
    const userId = '621bf1932d53a30016a0b57e';
    let sinaisID = [];
    let sinaisMeteoro = [];
    const [loading, setLoading] = useState(true);
    const [sinal, setSinal] = useState(null);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMeteoro();
        });

        return unsubscribe;
    }, [navigation]);

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
                    console.log('deu errado');
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
        console.log(sinaisMeteoro);
        proximoSinal();
        setLoading(false);
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

    function proximoSinal(){
   
        if(sinaisMeteoro.length === 0){
            Alert.alert('O Jogo Acabou');
            return;
        }        
        
        let sinalTemp = sinaisMeteoro.shift();
        console.log('O sinal');
        console.log(sinalTemp);
   
        console.log('depois');
        console.log(sinaisMeteoro);
    }


    return <>
        <Text>Tela Meteoro</Text>
    </>
}