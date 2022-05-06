import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import estilos from './estilos';
import { listaImagens } from './list-imagens';

export default function Aprendizado({ route, navigation }) {
    const { userID, token } = route.params;
    const [letra, setLetra] = useState('A');
 
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
                    <TouchableOpacity onPress={() => { setLetra('Q') }} style={estilos.btn}><Text style={estilos.btnText}>Q</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('W') }} style={estilos.btn}><Text style={estilos.btnText}>W</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('E') }} style={estilos.btn}><Text style={estilos.btnText}>E</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('R') }} style={estilos.btn}><Text style={estilos.btnText}>R</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('T') }} style={estilos.btn}><Text style={estilos.btnText}>T</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('Y') }} style={estilos.btn}><Text style={estilos.btnText}>Y</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('U') }} style={estilos.btn}><Text style={estilos.btnText}>U</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('I') }} style={estilos.btn}><Text style={estilos.btnText}>I</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('O') }} style={estilos.btn}><Text style={estilos.btnText}>O</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('P') }} style={estilos.btn}><Text style={estilos.btnText}>P</Text></TouchableOpacity>
                </View>
                <View style={estilos.campo}>
                    <TouchableOpacity onPress={() => { setLetra('A') }} style={estilos.btn}><Text style={estilos.btnText}>A</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('S') }} style={estilos.btn}><Text style={estilos.btnText}>S</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('D') }} style={estilos.btn}><Text style={estilos.btnText}>D</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('F') }} style={estilos.btn}><Text style={estilos.btnText}>F</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('G') }} style={estilos.btn}><Text style={estilos.btnText}>G</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('H') }} style={estilos.btn}><Text style={estilos.btnText}>H</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('J') }} style={estilos.btn}><Text style={estilos.btnText}>J</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('K') }} style={estilos.btn}><Text style={estilos.btnText}>K</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('L') }} style={estilos.btn}><Text style={estilos.btnText}>L</Text></TouchableOpacity>
                </View>
                <View style={estilos.campo}>
                    <TouchableOpacity onPress={() => { setLetra('Z') }} style={estilos.btn}><Text style={estilos.btnText}>Z</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('X') }} style={estilos.btn}><Text style={estilos.btnText}>X</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('C') }} style={estilos.btn}><Text style={estilos.btnText}>C</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('V') }} style={estilos.btn}><Text style={estilos.btnText}>V</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('B') }} style={estilos.btn}><Text style={estilos.btnText}>B</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('N') }} style={estilos.btn}><Text style={estilos.btnText}>N</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setLetra('M') }} style={estilos.btn}><Text style={estilos.btnText}>M</Text></TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
    </>
}