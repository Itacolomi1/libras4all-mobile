import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, Picker } from 'react-native';
import estilos from './estilos';
import { listaImagens } from './list-imagens';


export default function Numerais({ route, navigation }) {
  const { userID, token } = route.params;

  const [imagem, setImagem] = useState('seg');
  

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

      <Text style={estilos.texto}>Selecione o dia da semana que deseja aprender:</Text>

      <View style={estilos.picker}>
      <Picker
        imagem={imagem}
        onValueChange={(itemValue, itemIndex) => setImagem(itemValue)}
      >
        <Picker.Item label="Segunda" value="seg" />
        <Picker.Item label="Terça" value="ter" />
        <Picker.Item label="Quarta" value="qua" />
        <Picker.Item label="Quinta" value="qui" />
        <Picker.Item label="Sexta" value="sex" />
        <Picker.Item label="Sábado" value="sab" />
        <Picker.Item label="Domingo" value="dom" />
      </Picker>
      </View>

    </SafeAreaView>
  </>
}