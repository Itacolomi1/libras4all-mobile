import React from 'react';
import {Text} from 'react-native';
import * as settings from '../../assets/config/appSettings.json'

export default function SalaEspera({route, navigation}) {
    const {userID,token} = route.params
    const salaId = '6205b1a6b80a183bb4d1ba61';
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // Screen was focused
          // Do something
            console.log('Hello, primeira coisa que fiz quando entrei');

        });
    
        return unsubscribe;
    }, [navigation]);

    function getIdsUser() {

        const corpo = JSON.stringify({"email":userEmail,"senha":password});
        console.log(corpo);
        fetch( settings.backend.url + `/sala/listarAlunos/${salaId}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email":userEmail,"senha":password})
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log('deu certo');
            console.log(responseJson);
            navigation.navigate('Home', {userID: responseJson._id, token: responseJson.token});
        })
        .catch(error => {
          console.log('deu errado');
          console.error(error);
        });


    }

    console.log('Segunda coisa');
    


    return <>
        <Text>Tela Sala Espera</Text>
    </>
}