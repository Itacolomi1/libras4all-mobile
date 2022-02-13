import React, {useState,useEffect} from 'react';
import {Text,View, TextInput} from 'react-native';
import Botao from '../../componentes/Botao'
import estilos from './estilos';

export default function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');



    return <>
        <Text style={estilos.Titlo}>LOGIN</Text>
        <View style={estilos.fundo}>
            <TextInput 
                style={estilos.login__input}
                placeholder='librinho@gmail.com'
                onChangeText={novoEmail => setUserEmail(novoEmail)}
                defaultValue={userEmail}/>
            <TextInput 
                style={estilos.login__input}
                placeholder='Senha'
                onChangeText={novoPassword => setPassword(novoPassword)}
                defaultValue={password}
                secureTextEntry={true}/>
            <View style={estilos.botao}>
                <Botao valor="Logar" acao={() => {Logar(userEmail,password)}} />
                <Botao valor="Cadastre-se" acao={() => {console.log("Cadastro")}} />
            </View>
   
        </View>
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