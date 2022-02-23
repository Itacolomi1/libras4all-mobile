import React, {useState,useEffect} from 'react';
import {Text,View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'

export default function Cadastro() {
    const [userNome, setUserNome] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');


    const Cadastrar = () => {
        const corpo = JSON.stringify({"nome":userNome,"email":userEmail,"senha":password});
        console.log(corpo);
        fetch( settings.backend.url + '/usuario',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"nome":userNome,"email":userEmail,"senha":password})
        })
        .then(response => {
            if(response.ok){
                console.log('Cadastrado com sucesso');
            }
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
                <Text style={estilos.Titulo}>CADASTRO</Text>
            </View>
            <View style={estilos.icon_area}>
            <Image source={require('../Images/user.png')} style={estilos.input_icon} />
            <TextInput 
                style={estilos.cadastro__input}
                placeholder="Nome"
                placeholderTextColor="#acacac" 
                onChangeText={novoNome => setUserNome(novoNome)}
                defaultValue={userNome}
                />
                </View>
            <View style={estilos.icon_area}>
            <Image source={require('../Images/email.png')} style={estilos.input_icon} />
            <TextInput 
                style={estilos.cadastro__input}
                placeholder="Email"
                placeholderTextColor="#acacac" 
                onChangeText={novoEmail => setUserEmail(novoEmail)}
                defaultValue={userEmail}
                />
                </View>
                <View style={estilos.icon_area}>
                <Image source={require('../Images/cadeado.png')} style={estilos.input_icon} />
           
            <TextInput 
                style={estilos.cadastro__input}
                placeholder='Senha'
                placeholderTextColor="#acacac" 
                onChangeText={novoPassword => setPassword(novoPassword)}
                defaultValue={password}
                secureTextEntry={true}/>
                </View>
            <View style={estilos.botao}>               
                <TouchableOpacity 
                style={estilos.salvar_button}
                onPress={Cadastrar}
                >
                    <Text style={estilos.texto_button}>Salvar</Text>
                </TouchableOpacity>           
            </View>
   
        </SafeAreaView>
    </>
}
