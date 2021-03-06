import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert } from 'react-native';
import * as settings from '../../assets/config/appSettings.json'
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import show from '../Images/eye.png';
import hide from '../Images/hide.png';

export default function Login({ navigation }) {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [exibirSenha, setExibirSenha] = useState(false);
    
    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {      
            setLoading(false);
            limpaCampos();
          });
      
          return unsubscribe;
    },[navigation])

    const Logar = () => {
        setLoading(true);
        fetch(settings.backend.url + '/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": userEmail.trim(), "senha": password })
        })
            .then(response => {
                if (response.ok) {                    
                    return response.json();
                }
                setLoading(false);
            })
            .then(responseJson => {
                if (responseJson) {
                    navigation.navigate('Home', { userID: responseJson._id, token: responseJson.token });
                } else {
                    Alert.alert('Usuário ou senha incorretos!');
                }

            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });
    }

    function validaCampos() {
        if (userEmail.length == 0) {
            Alert.alert('Informe o email!');
            return false;
        }

        if (password.length == 0) {
            Alert.alert('Informe a senha!');
            return false;
        }

        return true;
    }

    function sendLogin() {
        if (!validaCampos())
            return;

        try {
            Logar();
        } catch (e) {
            Alert.alert(e.toString());
        }

    }

    function limpaCampos(){
        setUserEmail('');
        setPassword('');
    }

    function goToCadastro() {
        navigation.navigate('Cadastro');
    }
    function goToRedefinirSenha() {
        navigation.navigate('Redefinir Senha');
    }
    if (loading) {
        return <>
            <SafeAreaView style={estilos.carregando}>
            <StatusBar backgroundColor="rgb(35, 36, 95)" />
                <Lottie style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
            </SafeAreaView>
        </>
    } else {

        return <>
            <SafeAreaView style={estilos.fundo}>
                <StatusBar backgroundColor="rgb(35, 36, 95)" />

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
                        secureTextEntry={!exibirSenha} />
                         <TouchableOpacity
            style={estilos.visualizar}
            onPress={() => setExibirSenha(!exibirSenha)}>
            <Image source={exibirSenha ? hide : show} style={estilos.icon_olho} />
          </TouchableOpacity>
                </View>
                <View style={estilos.botao}>
                    <TouchableOpacity
                        style={estilos.login_button}
                        onPress={() => { sendLogin() }}
                    >
                        <Text style={estilos.texto_button}>Logar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={estilos.cadastro_button}
                        onPress={goToCadastro}
                    >
                        
                        <Text style={estilos.texto_button}>Cadastre-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {goToRedefinirSenha() }}>
                    <Text style={estilos.link}>Esqueceu a senha ?</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>





    }


}

