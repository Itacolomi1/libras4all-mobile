import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';
import { listaImagens } from './list-imagens';

export default function Numerais({ route, navigation }) {
    const { userID, token } = route.params;
    const [letra, setLetra] = useState('0');
 
 function pathImage(caracter) {
     
        let lista = listaImagens();
        let imageTemp =  lista.filter(x => x.id === caracter);

        if (imageTemp[0] != undefined) {
            
            return imageTemp[0].image;
        } else {
            return null;
        }
        
    }

    return <>
        <SafeAreaView style={estilos.fundo}>

            <View style={[estilos.campoLetra]} >
                <Image key={letra} source={pathImage(letra)} style={estilos.letra} />
            </View>

            <View style={[estilos.teclado, estilos.elevation]}>
                <View style={estilos.campo}>
                    <TouchableOpacity onPress={() => { setLetra('1') }} style={estilos.btn}><Text style={estilos.btnText}>1</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('2') }} style={estilos.btn}><Text style={estilos.btnText}>2</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('3') }} style={estilos.btn}><Text style={estilos.btnText}>3</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('4') }} style={estilos.btn}><Text style={estilos.btnText}>4</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('5') }} style={estilos.btn}><Text style={estilos.btnText}>5</Text></TouchableOpacity>
                    
                </View>
                <View style={estilos.campo}>
                    
                    <TouchableOpacity onPress={() => { setLetra('6') }} style={estilos.btn}><Text style={estilos.btnText}>6</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('7') }} style={estilos.btn}><Text style={estilos.btnText}>7</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('8') }} style={estilos.btn}><Text style={estilos.btnText}>8</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('9') }} style={estilos.btn}><Text style={estilos.btnText}>9</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('0') }} style={estilos.btn}><Text style={estilos.btnText}>0</Text></TouchableOpacity>
                </View>
               
            </View>


        </SafeAreaView>
    </>
}