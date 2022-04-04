import React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';

export default function TutorialQuiz({ route, navigation }) {
    const { userID, token } = route.params;

    // chumbado no código pois entrará sempre na mesma Sala.
    const salaID = '621bf0052d53a30016a0b571';

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
                <Text style={estilos.titulo}>Quiz</Text>
                <View style={[estilos.tipo, estilos.elevation]}>
                    <Text style={estilos.texto}>Nesse jogo você terá <Image source={require('../Images/icon-time.png')} style={estilos.icon_time} /> 20s por questão para selecionar a alternativa correta.
                    </Text>
                    <Text style={estilos.texto}>Para cada resposta correta você ganha 10 Libracoins <Image source={require('../Images/coins.png')} style={estilos.icon} />
                    </Text>
                </View>
                <TouchableOpacity style={estilos.jogar_button} onPress={()=>{gotoQuiz()}}>
                    <Text style={estilos.texto_button}>Jogar</Text>
                </TouchableOpacity>
            </View>
           
        </SafeAreaView>
    </>
}