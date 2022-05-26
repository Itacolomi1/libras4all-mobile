import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Picker } from 'react-native';
import estilos from './estilos';
import { listaImagens } from './list-imagens';

export default function Saudacoes({ route, navigation }) {
  const { userID, token } = route.params;

  const [imagem, setImagem] = useState('0');
  const saudacoes = ["Bom dia", "Boa tarde", "Boa noite"]

  function pathImage(caracter) {

    let lista = listaImagens();
    let imageTemp = lista.filter(x => x.id === caracter);

    if (imageTemp[0] != undefined) {

      return imageTemp[0].image;
    } else {
      return null;
    }

  }

  return <>
    <SafeAreaView style={estilos.fundo}>

      <View style={[estilos.campoLetra]} >
        <Image key={imagem} source={pathImage(imagem)} style={estilos.letra} />
      </View>

      <Text style={estilos.texto}>Selecione a saudação que deseja aprender:</Text>

      <View style={estilos.picker}>
        <Picker
          imagem={imagem}          
          onValueChange={(itemValue, itemIndex) => setImagem(itemValue)}
        >
          <Picker.Item itemStyle={estilos.picker_txt} color="#037ca9" label="Bom dia" value="0" />
          <Picker.Item itemStyle={estilos.picker_txt} color="#037ca9" label="Boa tarde" value="1" />
          <Picker.Item itemStyle={estilos.picker_txt} color="#037ca9" label="Boa noite" value="2" />

        </Picker>
      </View>

    </SafeAreaView>
  </>
}