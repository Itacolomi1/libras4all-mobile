import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


export default function Home({ route ,navigation}) {
    //Get parameter
    const {userID,token} = route.params

    function gotoPin(){
        navigation.navigate('Inserir Pin', {userID: userID,token: token});
    }

    return <>
        <Text>Tela Home</Text>
        <TouchableOpacity onPress={()=>{gotoPin()}}>
            <Text>Inserir Pin</Text>
        </TouchableOpacity>
    </>
}