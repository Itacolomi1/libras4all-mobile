import React from 'react';
import  {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';

export default function Perfil() {
    return <>
       <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/>
            <View style={estilos.topo}>
            
            <Image source={require('../Images/logo.png')} style={estilos.logo}/>
            </View>

            <View style={[estilos.dados , estilos.elevation]}>
                <View style={estilos.bloco}>
                    <Text style={estilos.texto_bold}>Nome:</Text>
                    <Text style={estilos.nome}>Gabi</Text>
                </View>
                <View style={estilos.bloco}>
                    <Text style={estilos.texto_bold}>Email:</Text>
                    <Text style={estilos.email}>teste@gmail.com</Text>
                </View>
            
            </View>

            <View style={[estilos.nivel , estilos.elevation]}>
            <Image source={require('../Images/bronze.png')} style={estilos.icon_nivel}/>
            <Text style={estilos.qtd_pontos}>0 Libracoins</Text>
            <Text style={estilos.txt}>Jogue mais e ganhe Libracoins para subir de nivel</Text>
            </View>
            <View style={[estilos.salas , estilos.elevation]}>
            <Image source={require('../Images/sala.png')} style={estilos.icon_nivel}/>
            <Text style={estilos.texto}>Numero de Salas:</Text>
            <Text style={estilos.qtd_sala}>0</Text>
            </View>
            <View style={[estilos.jogos , estilos.elevation]}>
            <Image source={require('../Images/choose.png')} style={estilos.icon_nivel}/>
            <Text style={estilos.texto}>Quiz:</Text>
            <Text style={estilos.qtd_quiz}>0</Text>
            </View>
            <View style={[estilos.jogos , estilos.elevation]}>
            <Image source={require('../Images/megafone.png')} style={estilos.icon_nivel}/>
            <Text style={estilos.texto}>Mestre Mandou:</Text>
            <Text style={estilos.qtd_mestre}>0</Text>
            </View>
            <View style={[estilos.jogos , estilos.elevation]}>
            <Image source={require('../Images/meteoro_icon.png')} style={estilos.icon_nivel}/>
            <Text style={estilos.texto}>Meteoro:</Text>
            <Text style={estilos.qtd_meteoro}>0</Text>
           
            </View>
            <TouchableOpacity  style={estilos.sessao_button}>
                    <Text style={estilos.texto_button}>Encerrar sessão</Text>
                </TouchableOpacity> 
            
            <View style={estilos.icon_area}>
            <Image source={require('../Images/home.png')} style={estilos.icon_home} />
            <Image source={require('../Images/pin.png')} style={estilos.icon_pin} />
            <Image source={require('../Images/game.png')} style={estilos.icon_game} />
            </View>
            
        </SafeAreaView>
    </>
}