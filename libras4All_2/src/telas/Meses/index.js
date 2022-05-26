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
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Janeiro" value="jan" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Fevereiro" value="fev" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Março" value="mar" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Abril" value="abr" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Maio" value="mai" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Junho" value="jun" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Julho" value="jul" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Agosto" value="ago" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Setembro" value="set" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Outubro" value="out" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Novembro" value="nov" />
          <Picker.Item style={estilos.picker_txt} color="#037ca9" label="Dezembro" value="dez" />
        </Picker>
      </View>

    </SafeAreaView>
  </>
}