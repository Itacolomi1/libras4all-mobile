import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import * as settings from '../../assets/config/appSettings.json'
import estilos from './estilos';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';


const Item = ({ nickname, libracoins, posicao }) => (
    <View style={[estilos.itens, estilos.elevation]}>
         <Text style={estilos.item}>{posicao}º</Text>
        <Text style={estilos.item}>{nickname}</Text>
        <Text style={estilos.pontos}>{libracoins}</Text>
    </View>
);

export default function RankingGeral({ route, navigation }) {
    const { userID, token } = route.params;

    const [listaRanking, setListaRanking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [posicaoUser, setPosicaoUser] = useState();
    const [nicknameUser, setNickname] = useState();
    const [libracoinsUser, setLibracoins] = useState();


    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getRanking();
        });

        return unsubscribe;
    }, [navigation]);



    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }
    function gotToHome() {
        navigation.navigate('Home', { userID: userID, token: token });
    }
    function gotoJogos() {
        navigation.navigate('Jogos', { userID: userID, token: token });
    }
    function gotoTutorialPin(){
        navigation.navigate('Tutorial Pin', { userID: userID, token: token });
    }





    function getRanking() {
        fetch(settings.backend.url + `/usuario/ranking/geral`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },

        })
            .then(response => response.json())
            .then(responseJson => {
                console.log('Deu certo');
                //console.log(responseJson);
                setPosicaoUser((responseJson.find(x => x._id === userID)).posicao);
                setNickname((responseJson.find(x => x._id === userID)).nickname);
                setLibracoins((responseJson.find(x => x._id === userID)).libracoins);
                setListaRanking(responseJson);
                setLoading(false);

            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });

    }

    const renderItem = ({ item }) => (
        <Item nickname={item.nickname} libracoins={item.libracoins} posicao={item.posicao} />
    );

    if (loading) {
        return <>
            <SafeAreaView style={estilos.carregando}>
                <Lottie style={estilos.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
            </SafeAreaView>
        </>

    } else {
        return <>
            <SafeAreaView style={estilos.fundo}>
                <StatusBar backgroundColor="rgb(35, 36, 95)" />
                <View>
                    <Text style={estilos.titulo}>Ranking <Image source={require('../Images/trofeu.png')} style={estilos.icon} />  </Text>
                </View>
                <View style={[estilos.elevation, estilos.foco]}>
                    <Text style={estilos.itemfoco}>{posicaoUser}º</Text>
                    <Text style={estilos.itemfoco}>{nicknameUser}</Text>
                    <Text style={estilos.pontosfoco}>{libracoinsUser}</Text>
                </View>
                <View>
                    <FlatList
                        style={estilos.bloco}
                        data={listaRanking}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                    />

                </View>
                <View style={estilos.icon_area}>
                    <TouchableOpacity onPress={() => {gotToHome()}}>
                        <Image source={require('../Images/home.png')} style={estilos.icon_home} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { gotoTutorialPin() }}>
                        <Image source={require('../Images/pin.png')} style={estilos.icon_pin} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { gotoJogos() }}>
                        <Image source={require('../Images/game.png')} style={estilos.icon_game} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>

    }


}