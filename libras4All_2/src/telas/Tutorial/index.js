import React, { useState, useRef } from 'react';

import {
    Dimensions,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    Alert,
    Text,
    ScrollView,
    View
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import * as estilos from './estilos';
import style from './estilos';
import img1 from '../../assets/images/tutorial/1.gif';
import img2 from '../../assets/images/tutorial/2.gif';
import img3 from '../../assets/images/tutorial/3.gif';
import img4 from '../../assets/images/tutorial/4.gif';
import img5 from '../../assets/images/tutorial/5.gif';
import img6 from '../../assets/images/tutorial/6.gif';
import img7 from '../../assets/images/tutorial/7.gif';
import img8 from '../../assets/images/tutorial/8.png';
import { data } from './data.js';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const { width: scrennWidth } = Dimensions.get('window');

const imgStyle = {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'flex-start',
    marginTop: -40, // subir o Título para mais próximo a barra
    backgroundColor: 'white',
};



export default function Tutorial({ route, navigation }) {
    const { userID, token } = route.params;

    const carouselRef = useRef(null);
    const [info] = useState(data);
    // const [background, setBackground] = useState('img8');
    const [activeIndex, setActiveIndex] = useState(0);

    const btnInformation = () => {
        const info =
            'Os botões não estão funcionando, projeto somente para teste da lib react-native-snap-carousel';
        Alert.alert('Atenção', `${info}`);
    };

    function gotoHome() {
        navigation.navigate('Home', { userID: userID, token: token });
    }

    function gotoPin() {
        navigation.navigate('Inserir Pin', { userID: userID, token: token });
    }


    function gotoAprendizado() {
        navigation.navigate('Consulta', { userID: userID, token: token });
    }

    function gotoRanking() {
        navigation.navigate('Ranking Geral', { userID: userID, token: token });
    }

    function gotoPerfil() {
        navigation.navigate('Perfil', { userID: userID, token: token });
    }

    const imgChange = img => {
        switch (img) {
            case 'img1':
                return img1;
            case 'img2':
                return img2;
            case 'img3':
                return img3;
            case 'img4':
                return img4;
            case 'img5':
                return img5;
            case 'img6':
                return img6;
            case 'img7':
                return img7;
            case 'img8':
                return img8;
            default:
                return 0;
        }
    };

    const telaChange = tela => {

        switch (tela) {
            case 'home':
                return gotoHome;
            case 'aprendizado':
                return gotoAprendizado;
            case 'pin':
                return gotoPin;
            case 'ranking':
                return gotoRanking;
            case 'perfil':
                return gotoPerfil;
            default:
                return 0;
        }
    };

    const infos = ({ item }) => {
        return (
            <TouchableOpacity onPress={telaChange(item.tela)}>
                <estilos.CarouselImg source={imgChange(item.img)} />
            </TouchableOpacity>
        );
    };

    return (
        <>
        <View style={estilos.fundo}>
            <StatusBar barStyle="light-content" />
            <ScrollView style={estilos.rolagem}> 
            <ImageBackground
                //   source={imgChange(background)}
                style={imgStyle}
                blurRadius={4}>
                <estilos.Title>{info[activeIndex].title}</estilos.Title>

                <estilos.CarouselView>
                    <Carousel
                        layout="default"
                        ref={carouselRef}
                        data={info}
                        renderItem={infos}
                        sliderWidth={scrennWidth}
                        itemWidth={230}
                        inactiveSlideOpacity={0.6}
                        onSnapToItem={index => {
                            setActiveIndex(index);
                        }}
                    />
                </estilos.CarouselView>

                <estilos.Information>
                    <estilos.Information.View>
                        <estilos.Information.Title>
                            {info[activeIndex].title}
                        </estilos.Information.Title>
                    </estilos.Information.View>

                    <estilos.Information.Text>{info[activeIndex].text}</estilos.Information.Text>

                </estilos.Information>

            </ImageBackground>
            <View style={style.view_button}>
                <TouchableOpacity
                    style={style.tema_button}
                    onPress={gotoHome} >
                    <Text style={style.texto_button}>Fechar Tutorial</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
        </>

    );
}