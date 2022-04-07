import React, {useState} from 'react';
import {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert} from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 17);
const imageWidth = dimensions.width;

export default function InserirPin({route , navigation}) {

    const [pin,setPin] = useState('0');
    let salaId = '0';
    let nomeSala = '';
    let tipoJogoSala = '';     
    const{userID,token} = route.params;
  
    
     const ValidarPin =  async () => {   

        fetch( settings.backend.url + `/sala/validarCodigo/${pin}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + token
            },    
           
        })
        .then(response => {
            if(response.ok){
                return response.json()
            }
            Alert.alert('Código incorreto');
            })
        .then(responsejson =>{ 
                                
            if(responsejson != undefined){                
                salaId =  responsejson._id;
                nomeSala = responsejson.descricao;
                tipoJogoSala = responsejson.tipoJogo;   
                adicionarAluno();
            }else{
                Alert.alert('Código incorreto');
            }
        })
        .catch(error => {
          Alert.alert('Código incorreto');
        });
    }

    function adicionarAluno(){
        const corpo = JSON.stringify({"idSala": salaId, "idAluno":userID });
        fetch( settings.backend.url + `/sala/adicionarAluno`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + token
            },
            body: corpo
           
        })
        .then(response => {
            if(response.ok){
                return response.json()
            }
            })
        .then(responsejson =>{  
                                    
            if(responsejson){
                Alert.alert('Seja Bem-Vindo');
                navigation.navigate('Sala de Espera',{userID: userID,token: token, salaID: salaId, SalaName: nomeSala,tipoJogo: tipoJogoSala});
            }else{
                navigation.navigate('Sala de Espera',{userID: userID,token: token, salaID: salaId, SalaName: nomeSala,tipoJogo: tipoJogoSala});
          
            }
        })
        .catch(error => {
          Alert.alert('Código incorreto');
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

