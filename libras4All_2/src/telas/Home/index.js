import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {

    function gotoPin(){
        navigation.navigate('Inserir Pin');
    }

    return <>
        <Text>Tela Home</Text>
        <TouchableOpacity onPress={()=>{gotoPin()}}>
            <Text>Inserir Pin</Text>
        </TouchableOpacity>
    </>
}