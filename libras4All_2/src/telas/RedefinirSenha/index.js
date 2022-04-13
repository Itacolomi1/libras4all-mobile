import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert } from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'



export default function RedefinirSenha({ navigation }) {

    const [userEmail, setUserEmail] = useState('');


    function EnviarEmail() {
        fetch(settings.backend.url + '/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": userEmail.trim(), "isMobile": true })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(responseJson => {
                if (responseJson) {
                    Alert.alert('Atenção', 'O email para redefinir senha foi enviado', [
                        {
                            text: 'Ok!',
                            onPress: () => {
                                navigation.navigate('Login');
                            }
                        }
                    ]);
                } else {
                    Alert.alert('Email incorreto!');
                }

            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });
    }
    function validaCampos() {


        if (!validateEmail(userEmail.trim())) {
            Alert.alert('Informe um e-mail válido!')
            return false;
        }


        return true;
    }
    function validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
    function salvarDados() {
        if (!validaCampos())
            return;

        try {
            EnviarEmail();

        } catch (e) {
            Alert.alert(e.toString());
        }

    }
    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)" />

            <View style={estilos.engloba}>
                <Text style={estilos.titulo}>Redefinir Senha</Text>
            </View>
            <View style={estilos.icon_area}>
                <Image source={require('../Images/email.png')} style={estilos.input_icon} />
                <TextInput
                    style={estilos.input}
                    placeholder="Insira o email do cadastro"
                    placeholderTextColor="#acacac"
                    keyboardType='email-address'
                    onChangeText={novoEmail => setUserEmail(novoEmail)}
                    defaultValue={userEmail}
                />
            </View>

            <View style={estilos.botao}>
                <TouchableOpacity onPress={() => salvarDados()}
                    style={estilos.button}
                >
                    <Text style={estilos.texto_button}>Enviar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    </>
}

