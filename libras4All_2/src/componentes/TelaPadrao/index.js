import React from 'react';
import {SafeAreaView,StatusBar,KeyboardAvoidingView, Platform}  from 'react-native'
import estilosGlobal, {cores} from '../../estilos-global';
import estilos from './estilos';

export default function TelaPadrao({children}) {

  return  <><SafeAreaView style={estilos.ajusteTela}> 
                <StatusBar backgroundColor="rgb(35, 36, 95)" />
                <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios"? "padding": "height"}
                    style={estilosGlobal.preencher}
                    > 
                    {
                        children
                    }
                
                </KeyboardAvoidingView>  
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
}