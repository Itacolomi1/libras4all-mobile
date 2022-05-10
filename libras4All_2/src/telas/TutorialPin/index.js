import React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilo';

export default function TutorialPin({ route, navigation }) {
    const { userID, token } = route.params;

    // chumbado no código pois entrará sempre na mesma Sala.
    

    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    function gotToHome() {
        navigation.navigate('Home', { userID: userID, token: token });
    }
    function gotoJogos() {
        navigation.navigate('Jogos', { userID: userID, token: token });
    }
    function gotoQuiz() {
        navigation.navigate('Quiz', {userID: userID,token: token, salaID: salaID});
    }
    



    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)" />
            <View style={estilos.bloco}>
                <Text style={estilos.titulo}>Pin</Text>
                <View style={[estilos.tipo, estilos.elevation]}>
                    <Text style={estilos.texto}>Aqui você pode ingressar em uma sala criada na aplicação web
                    </Text>
                    <Text style={estilos.texto}>Para isso você deve digitar o código pin da sala</Text>
                </View>
                <TouchableOpacity style={estilos.jogar_button} onPress={()=>{gotoPin()}}>
                    <Text style={estilos.texto_button}>Ir</Text>
                </TouchableOpacity>
            </View>
           
        </SafeAreaView>
    </>
}