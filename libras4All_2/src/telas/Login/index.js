import React, {useState,useEffect} from 'react';
import {Text,View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import Botao from '../../componentes/Botao'
import estilos from './estilos';

export default function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');



    return <>
         <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/>
        
            <View style={estilos.engloba}>
                <Text style={estilos.Titulo}>LOGIN</Text>
            </View>
            <View style={estilos.icon_area}>
            <Image source={require('../Images/email.png')} style={estilos.input_icon} />
            <TextInput 
                style={estilos.login__input}
                placeholder="Email"
                placeholderTextColor="#acacac" 
                onChangeText={novoEmail => setUserEmail(novoEmail)}
                defaultValue={userEmail}
                />
                </View>
                <View style={estilos.icon_area}>
                <Image source={require('../Images/cadeado.png')} style={estilos.input_icon} />
           
            <TextInput 
                style={estilos.login__input}
                placeholder='Senha'
                placeholderTextColor="#acacac" 
                onChangeText={novoPassword => setPassword(novoPassword)}
                defaultValue={password}
                secureTextEntry={true}/>
                </View>
            <View style={estilos.botao}>
                <TouchableOpacity  style={estilos.login_button}>
                    <Text style={estilos.texto_button}>Logar</Text>
                </TouchableOpacity> 
                <TouchableOpacity  style={estilos.cadastro_button}>
                    <Text style={estilos.texto_button}>Cadastre-se</Text>
                </TouchableOpacity>           
            </View>
   
        </SafeAreaView>
    </>
}

const Logar = (userEmail,password) => {
    const corpo = JSON.stringify({"email":userEmail,"senha":password});
    console.log(corpo);
    fetch('https://libras4all.herokuapp.com/api/usuario/login',{
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
    })
    .catch(error => {
      console.log('deu errado');
      console.error(error);
    });
}