import React from 'react';
import  {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';

export default function TransicaoCertoMestre({TrocaLetra}) {
    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/> 
            <View  style={estilos.bloco}>  
                     
            <View style={[estilos.tipo , estilos.elevation]}>  
            <Text style={estilos.titulo}>80% Correto!</Text>       
            <Image source={require('../Images/coins.png')} style={estilos.icon} />    
            </View> 
            <TouchableOpacity onPress={() => {TrocaLetra(false)}} style={estilos.jogar_button}>
                <Text style={estilos.texto_button}>Continuar</Text>
            </TouchableOpacity> 
            </View>
            
        </SafeAreaView>
    </>
}