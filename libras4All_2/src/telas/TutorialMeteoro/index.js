import React from 'react';
import  {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';

export default function TutorialMeteoro() {
    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/> 
            <View  style={estilos.bloco}>  
            <Text style={estilos.titulo}>Meteoro</Text>              
            <View style={[estilos.tipo , estilos.elevation]}>           
            <Text style={estilos.texto}>Nesse jogo temos 3 meteoros contendo 3 sinais de letras aleatoriamente escolhidas. Quando o jogo começar os meteoros começam a cair e o jogador tem <Image source={require('../Images/icon-time.png')} style={estilos.icon_time}/> 20s para selecionar no teclado as letras certas correspondentes aos sinais dos meteoros.
            </Text>    
            <Text style={estilos.texto}>Se o meteoro chegar na linha limite antes de você acertar o sinal, você não ganha Libracoins mas se acertar você ganha 10 Libracoins <Image source={require('../Images/coins.png')} style={estilos.icon}/> 
            </Text>       
            </View> 
            <TouchableOpacity  style={estilos.jogar_button}>
                <Text style={estilos.texto_button}>Jogar</Text>
            </TouchableOpacity> 
            </View>
            <View style={estilos.icon_area}>
            <Image source={require('../Images/home.png')} style={estilos.icon_home} />
            <Image source={require('../Images/pin.png')} style={estilos.icon_pin} />
            <Image source={require('../Images/game.png')} style={estilos.icon_game} />
            </View>
        </SafeAreaView>
    </>
}