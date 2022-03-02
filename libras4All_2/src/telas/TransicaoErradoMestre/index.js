import React from 'react';
import  {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';

export default function TransicaoErradoMestre() {
    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/> 
            <View  style={estilos.bloco}>  
                     
            <View style={[estilos.tipo , estilos.elevation]}>  
            <Text style={estilos.titulo}>Você não atingiu o minimo de 75%</Text>       
            <Image source={require('../Images/perdeu.png')} style={estilos.icon} />  
              
            </View> 
            <TouchableOpacity  style={estilos.jogar_button}>
                <Text style={estilos.texto_button}>Continuar</Text>
            </TouchableOpacity> 
            </View>
            
        </SafeAreaView>
    </>
}