import React, {useState,useEffect} from 'react';
import {Text,View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert} from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';

export default function Cadastro({navigation}) {
    const [userNome, setUserNome] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const Cadastrar = () => {  
        setLoading(true); 
        fetch( settings.backend.url + '/usuario',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"nome":userNome.trim(),"email":userEmail.trim(),"senha":password})
        })
        .then(response => {
            setLoading(false); 
            if(response.ok){
                Alert.alert('Parabens !!','Cadastro realizado com sucesso !',[
                    {
                        text: 'Ok!',
                        onPress: () => {
                            navigation.navigate('Login');
                        }
                    }
                ]);
               
            }else{
                Alert.alert('Erro ao realizar cadastro');
            }
            
        })  
        .catch(error => {
          Alert.alert('Erro ao realizar cadastro');
          console.error(error);
        });
    }

    function validaCampos(){
        if(userNome.length == 0){
            Alert.alert('Informe o nome');
            return false;
        }

        if(password.length == 0){
            Alert.alert('Informe a senha');
            return false;
        }

        if(!validateEmail(userEmail.trim())){
            Alert.alert('Informe um e-mail válido!')
            return false;
        }

        return true;
    }

    function salvarDados(){
        if(!validaCampos())
            return;
        
        try{
            Cadastrar();

        }catch(e){
            Alert.alert(e.toString());
        }

    }

    function validateEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      }

    if(loading){
        return<>
        <SafeAreaView style={estilos.carregando}>
            <Lottie  style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
        </SafeAreaView>
    </>

    }else{
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
                onPress={() =>{salvarDados()}}
                >
                    <Text style={estilos.texto_button}>Salvar</Text>
                </TouchableOpacity>           
            </View>
   
        </SafeAreaView>
    </>

    }

    
}
