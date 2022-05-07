import React from 'react';
import TelaPadrao from './src/componentes/TelaPadrao';
import Login from './src/telas/Login';
import InserirPin from './src/telas/InserirPin';
import Meteoro from './src/telas/Meteoro';
import Aprendizado from './src/telas/Aprendizado';
import Alfabeto from './src/telas/Alfabeto';
import Saudacoes from './src/telas/Saudacoes';
import Numerais from './src/telas/Numerais';
import Meses from './src/telas/Meses';
import Semana from './src/telas/DiasSemana';
import Home from './src/telas/Home'
import Perfil from './src/telas/Perfil'
import SalaEspera from './src/telas/SalaEspera';
import Quiz from './src/telas/Quiz';
import TutorialQuiz from './src/telas/TutorialQuiz';
import TutorialMeteoro from './src/telas/TutorialMeteoro';
import TutorialMestreMando from './src/telas/TutorialMestreMando';
import MestreMando from './src/telas/MestreMando';
import RankingGeral from './src/telas/RankingGeral';
import Jogos from './src/telas/Jogos';
import TransicaoCerto from './src/telas/TransicaoCerto';
import TransicaoErrado from './src/telas/TransicaoErrado';
import TransicaoCertoMestre from './src/telas/TransicaoCertoMestre';
import TransicaoErradoMestre from './src/telas/TransicaoErradoMestre';
import MestreMandoWrap from './src/telas/MestreMandoWrap';
import RedefinirSenha from './src/telas/RedefinirSenha';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/telas/Cadastro';
import Resultado from './src/telas/Resultado';
import Tutorial from './src/telas/Tutorial';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
const Stack = createNativeStackNavigator();


export default function App () {
  useEffect(() => {
    BackHandler.addEventListener('backPress', () => true)
    return () => BackHandler.removeEventListener('backPress', () => true)
  }, [])
  return <NavigationContainer>
            <TelaPadrao>              
              <Stack.Navigator>
              <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
              <Stack.Screen name='Resultado' component={Resultado} options={{headerShown:false}}/>
              <Stack.Screen name='Transicao Certo' component={TransicaoCerto} options={{headerShown:false}}/>
              <Stack.Screen name='Transicao Errado' component={TransicaoErrado} options={{headerShown:false}}/>
              <Stack.Screen name='Transicao Certo Mestre' component={TransicaoCertoMestre} options={{headerShown:false}}/>
              <Stack.Screen name='Transicao Errado Mestre' component={TransicaoErradoMestre} options={{headerShown:false}}/>
              <Stack.Screen name='Cadastro' component={Cadastro}/>
              <Stack.Screen name='Inserir Pin' component={InserirPin}/>
              <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
              <Stack.Screen name='Perfil' component={Perfil} options={{headerShown:false}}/>
              <Stack.Screen name='Sala de Espera' component={SalaEspera}/>
              <Stack.Screen name='Quiz' component={Quiz} options={{headerShown:false}}/>
              <Stack.Screen name='Tutorial Quiz' component={TutorialQuiz}/>
              <Stack.Screen name='Tutorial Meteoro' component={TutorialMeteoro}/>              
              <Stack.Screen name='Tutorial Mestre Mandou' component={TutorialMestreMando}/>
              <Stack.Screen name='Jogos' component={Jogos}/>
              <Stack.Screen name='Redefinir Senha' component={RedefinirSenha}/>
              <Stack.Screen name='Ranking Geral' component={RankingGeral} options={{headerShown:false}}/>
              <Stack.Screen name='Mestre Mando' component={MestreMandoWrap} options={{headerShown:false}}/>
              <Stack.Screen name='Meteoro' component={Meteoro} options={{headerShown:false}}/>
              <Stack.Screen name='Aprendizado' component={Aprendizado}/>
              <Stack.Screen name='Alfabeto' component={Alfabeto}/>
              <Stack.Screen name='Numerais' component={Numerais}/>
              <Stack.Screen name='Saudacoes' component={Saudacoes}/>
              <Stack.Screen name='Meses' component={Meses}/>
              <Stack.Screen name='Semana' component={Semana}/>
              <Stack.Screen name='Tutorial' component={Tutorial}/>
              </Stack.Navigator>
            </TelaPadrao> 
          </NavigationContainer>
}

