import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert, Linking } from 'react-native';
import estilos from './estilos';
import * as settings from '../../assets/config/appSettings.json'
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';



export default function Cadastro({ navigation }) {
    const [userNome, setUserNome] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickName] = useState('');
    const [loading, setLoading] = useState(false);
    const [dataNascimento, setDataNascimento] = useState(new Date());
    const [modal, setModal] = useState(false);
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [textoData, setTextoData] = useState();
    const [aceitouTermo, setAceitouTermo] = useState(false);

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dataNascimento;
        setShow(Platform.OS === 'ios');
        setDataNascimento(currentDate);

        let tempDate = new Date(currentDate);

        let dataSQL = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setTextoData(dataSQL)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };


    const Cadastrar = () => {
        console.log('Nick: ' + nickname);
        console.log('data: ' + dataNascimento);
        setLoading(true);
        fetch(settings.backend.url + '/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nome": userNome.trim(),
                "email": userEmail.trim(),
                "senha": password,
                "nickname": nickname.trim(),
                "dataNascimento": dataNascimento
            })
        })
            .then(response => {
                setLoading(false);
                if (response.ok) {
                    Alert.alert('Parabens !!', 'Cadastro realizado com sucesso !', [
                        {
                            text: 'Ok!',
                            onPress: () => {
                                navigation.navigate('Login');
                            }
                        }
                    ]);

                } else {
                    return response.json();
                    // Alert.alert('Erro ao realizar cadastro');
                }

            }).
            then( responseJson => {
                if(responseJson)
                {
                    Alert.alert(responseJson.mensagem);

                }else{
                    Alert.alert('Erro no processo de cadastro');

                }
              
                
            }
            )
            .catch(error => {
                Alert.alert('Erro ao realizar cadastro');
                console.error(error);
            });
    }

    function validaCampos() {
        if (userNome.length == 0) {
            Alert.alert('Informe o nome');
            return false;
        }

        if (password.length == 0) {
            Alert.alert('Informe a senha');
            return false;
        }

        if (!validateEmail(userEmail.trim())) {
            Alert.alert('Informe um e-mail válido!')
            return false;
        }

        if (nickname.length == 0) {
            Alert.alert('Informe um nickname!');
            return false;
        }
        if (textoData == undefined || textoData.length == 0) {
            Alert.alert('Informe sua Data de Nascimento!');
            return false;
        }

        if(!aceitouTermo){
            Alert.alert('Leia os termos antes de se cadastrar');
            return false;
        }

        return true;
    }

    function salvarDados() {
        if (!validaCampos())
            return;

        try {
            Cadastrar();

        } catch (e) {
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

    if (loading) {
        return <>
            <SafeAreaView style={estilos.carregando}>
                <Lottie style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
            </SafeAreaView>
        </>

    } else {
        return <>
        <ScrollView style={estilos.rolagem}>
            <SafeAreaView style={estilos.fundo}>
                <StatusBar backgroundColor="rgb(35, 36, 95)" />

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
                        secureTextEntry={true} />
                </View>
                <View style={estilos.icon_area}>
                    <Image source={require('../Images/user.png')} style={estilos.input_icon} />

                    <TextInput
                        style={estilos.cadastro__input}
                        placeholder='NickName'
                        placeholderTextColor="#acacac"
                        onChangeText={novoNickName => setNickName(novoNickName)}
                        defaultValue={nickname}
                    />
                </View>
                <View>

                    <View style={estilos.icon_area}>

                        <TouchableOpacity onPress={() => showMode('date')} title="Data">
                            <Image source={require('../Images/calendario.png')} style={estilos.input_icon} />

                        </TouchableOpacity>
                        <Text style={estilos.cadastro__data}>{textoData}</Text>
                    </View>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            format="YYYY-MM-DD"
                            value={dataNascimento}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>


                <View style={estilos.termo}>
                    <CheckBox
                        disabled={false}
                        value={aceitouTermo}
                        onValueChange={(newValue) => setAceitouTermo(newValue)}
                        tintColors={{ true: 'green', false: 'black' }}
                    />
                    <Text      
                       style={estilos.termo_text}                 
                        onPress={() => {
                            Linking.openURL('https://libras4all-web.herokuapp.com/HomePage/Privacy');
                        }}>
                        Declaro que li e aceito o  <Text style={estilos.hyperlink}>Termo de Política de Privacidade.</Text>
                    </Text>
                    
                </View>


                <View style={estilos.botao}>
                    <TouchableOpacity
                        style={estilos.salvar_button}
                        onPress={() => { salvarDados() }}
                    >
                        <Text style={estilos.texto_button}>Salvar</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
            </ScrollView>
        </>

    }


}
