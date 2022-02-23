import React, {useState} from 'react';
import {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 17);
const imageWidth = dimensions.width;

export default function InserirPin() {

    const [pin,setPin] = useState('0');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDk3MTNkY2U2NDQyMDAxNjhhZDk5MCIsImlhdCI6MTY0NTY0MTc5M30.-nV2_60oHvjkj_GhGrqOQKwRT-q7vhDpys3S5fJPjks';
    const salaId = '6205b1a6b80a183bb4d1ba61';
    
    const ValidarPin = () => {   

        fetch( settings.backend.url + `/sala/validarCodigo/${salaId}/${pin}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + token
            },    
           
        })
        .then(response => response.json())
        .then(responsejson =>{
            console.log('Deu certo');
            console.log(responsejson);
        })
        .catch(error => {
          console.log('deu errado');
          console.error(error);
        });
    }
    return <>
         <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/>
        
            <View style={estilos.engloba}>
            <Image source={require('../Images/logo.png')} style={{ height: imageHeight, width: imageWidth }} />
            </View>
            <View style={estilos.icon_area}>
            <Image source={require('../Images/cadeado.png')} style={estilos.input_icon} />
            <TextInput 
                style={estilos.input}
                placeholder="Insira o Pin"
                placeholderTextColor="#acacac"
                onChangeText={novoPin => setPin(novoPin)}
                defaultValue={pin}
                keyboardType='number-pad'
                />
                </View>
                
            <View style={estilos.botao}>
                <TouchableOpacity  
                    style={estilos.button}
                    onPress={ValidarPin}    
                        >
                    <Text style={estilos.texto_button}>Enviar</Text>
                </TouchableOpacity>           
            </View>
   
        </SafeAreaView>
    </>
}

