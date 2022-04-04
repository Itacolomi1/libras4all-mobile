import { useEffect } from "react";
import { Text, View, Image } from 'react-native';
import React from 'react'
import estilos from './estilos';



export default function Cronometro({ hoursMinSecs, validaTempo}) {

    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);


    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0){
            validaTempo(false);
            //reset();
        }
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    return (
        <View style={estilos.tempo} >
            <Image source={require('../../telas/Images/fundo-tempo.png')} style={estilos.icon_categotia} />
            <Text style={estilos.relogio}>{`${secs.toString().padStart(2, '0')}`}</Text>
        </View>
    );
}

