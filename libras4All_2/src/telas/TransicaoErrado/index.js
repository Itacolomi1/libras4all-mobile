import React from 'react';
import  {Text,View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import estilos from './estilos';

export default function TransicaoErrado({erraQuestao,getrespostaCerta}) {
    console.log('Alternativa Certa');
    console.log(getrespostaCerta());
    return <>
        <SafeAreaView style={estilos.fundo}>
            <StatusBar backgroundColor="rgb(35, 36, 95)"/> 
            <View  style={estilos.bloco}>  
                     
            <View style={[estilos.tipo , estilos.elevation]}>  
            <Text style={estilos.titulo}>Não foi dessa vez...</Text>         
            <Image source={require('../Images/perdeu.png')} style={estilos.icon} />  
              
            </View> 
            <View style={[estilos.tipo , estilos.elevation]}>    
            <Text style={estilos.resposta_certa}>A resposta correta era: </Text>
            <Text style={estilos.resposta_certa_verde}> {getrespostaCerta()}</Text> 
              
            </View> 
            <TouchableOpacity onPress={() => {erraQuestao(false)}}  style={estilos.jogar_button}>
                <Text style={estilos.texto_button}>Continuar</Text>
            </TouchableOpacity> 
            </View>
            
        </SafeAreaView>
    </>
}