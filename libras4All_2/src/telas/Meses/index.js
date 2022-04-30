import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image, Picker } from 'react-native';
import estilos from './estilos';
import { listaImagens } from './list-imagens';


export default function Saudacoes({ route, navigation }) {
  const { userID, token } = route.params;

  const [imagem, setImagem] = useState('jan');

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

      <Text style={estilos.texto}>Selecione o mês que deseja aprender:</Text>
      <View style={estilos.picker}>
        <Picker
          imagem={imagem}
          onValueChange={(itemValue, itemIndex) => setImagem(itemValue)}
        >
          <Picker.Item label="Janeiro" value="jan" />
          <Picker.Item label="Fevereiro" value="fev" />
          <Picker.Item label="Março" value="mar" />
          <Picker.Item label="Abril" value="abr" />
          <Picker.Item label="Maio" value="mai" />
          <Picker.Item label="Junho" value="jun" />
          <Picker.Item label="Julho" value="jul" />
          <Picker.Item label="Agosto" value="ago" />
          <Picker.Item label="Setembro" value="set" />
          <Picker.Item label="Outubro" value="out" />
          <Picker.Item label="Novembro" value="nov" />
          <Picker.Item label="Dezembro" value="dez" />
        </Picker>
      </View>

    </SafeAreaView>
  </>
}