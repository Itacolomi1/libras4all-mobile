import React, {useState} from 'react';
import {Text} from 'react-native';
import * as settings from '../../assets/config/appSettings.json'
import {adicionaHistorico} from '../../services/historic.service';

export default function Meteoro({route,navigation}) {
    const { userID, token, salaID} = route.params;

    let sinaisID = [];
    let sinaisMeteoro = [];
    const [listaSinais,setListaSinais] = useState([]);
    const [sinalDaVez,setSinal] = useState(0);
    const [loading, setLoading] = useState(true);


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
        setListaSinais(sinaisMeteoro);  
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
        let tempNumb = sinalDaVez;
        if((tempNumb + 1) >= sinalDaVez.length){
            Alert.alert('O Jogo Acabou');
            return;
        }
        setSinal(sinalDaVez + 1); 
    }

    function registra_resultado(resultado){
       
        if(resultado){
            adicionaHistorico(token,salaID,userID,'Meteoro',listaSinais[sinalDaVez]._id,'true');
            Alert.alert('Acertouuuuu');
        }else{
            adicionaHistorico(token,salaID,userID,'Meteoro',listaSinais[sinalDaVez]._id,'false');
            Alert.alert('Errouuuuuuuu');
        }
        proximoSinal();
      }


    return <>
        <Text>Tela Meteoro</Text>
    </>
}