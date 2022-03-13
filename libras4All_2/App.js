/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, {useRef,useState, useEffect } from 'react';
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-react-native';
// import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
// import { Camera } from 'expo-camera';
// import {
//   //SafeAreaView,
//   //ScrollView,
//   //StatusBar,
//   StyleSheet,
//   Text,
//  // useColorScheme,
//   View,
//   TouchableOpacity,
// } from 'react-native';

// import {drawRect} from "./utilities";
// import Canvas from 'react-native-canvas';
// import Botao from './src/componentes/Botao';



// const TensorCamera = cameraWithTensors(Camera);

// let modeloTensorFlow = null;
// export default function App() {

//   let requestAnimationFrameId = 0;

//   const getModel = async () => {
//     console.log('Começa a carregar o tensorflow');

//     try{

//       await tf.ready();
//       // Signal to the app that tensorflow.js can now be used.
//       console.log('ready is on');

//       await tf.setBackend('rn-webgl');
//       console.log('backend is on');

//       // 3. TODO - Load network
//       const net = await tf.loadGraphModel('https://libras4alltfod.s3.br-sao.cloud-object-storage.appdomain.cloud/model.json')
//       console.log('modelo is on');

//       modeloTensorFlow = net;

//       // Loop and detect hands
//       // setInterval(() => {
//       //   detect(net, images);
//       // }, 16.7);

//     }catch(err) {
//       console.log('erro no tensorflow');
//       console.log(err);
//     }
//   };

//   const handleCameraStream = (images, updatePreview, gl) => {
//     console.log('entrou no stream handle');
//     const loop = async () => {
//       if (modeloTensorFlow != null) {
//         const imageTensor = images.next().value;
//         await detect(modeloTensorFlow, imageTensor);
//       }

//       tf.dispose(images);
//       requestAnimationFrameId = requestAnimationFrame(loop);
//     };
//     loop();

//   };


//   const detect = async (net, images) => {

//       // Get Video Properties
//       const video = images;
//       //video = video.expandDims(axis=0);
//       const videoWidth = 1600;
//       const videoHeight = 1200;

//       // Set video width
//       // webcamRef.current.video.width = videoWidth;
//       // webcamRef.current.video.height = videoHeight;
//       camRef.current.props.cameraTextureHeight = videoHeight;
//       camRef.current.props.cameraTextureWidth = videoWidth;

     
//       // Set canvas height and width
//       canvasRef.current.width = videoWidth;
//       canvasRef.current.height = videoHeight;

//       // 4. TODO - Make Detections
//       //const img = tf.browser.fromPixels(video);
//       const resized = tf.image.resizeBilinear(video, [640,480]);
//       const casted = resized.cast('int32');
//       const expanded = casted.expandDims(0);
//       const obj = await net.executeAsync(expanded);

//       console.log('classes');
//       console.log(await obj[0].array());

//       const boxes = await obj[3].array();
//       const classes = await obj[0].array();
//       const scores = await obj[5].array();

//       // Draw mesh
//       const ctx = canvasRef.current.getContext("2d");

//       // 5. TODO - Update drawing utility
//       // drawSomething(obj, ctx)
//       requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)});

//       tf.dispose(video);
//       tf.dispose(resized);
//       tf.dispose(casted);
//       tf.dispose(expanded);
//       tf.dispose(obj);


//   };



//   const camRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [hasPermission, setHasPermission] = useState(null);
//   const [model, setModel] = useState();

//   const [type, setType] = useState(Camera.Constants.Type.front);


//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   useEffect(() => {
//     getModel();
//   }, []);

//   useEffect(() => {
//     return () => {
//       cancelAnimationFrame(requestAnimationFrameId);
//     };
//   }, [requestAnimationFrameId]);




//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }



//   return (
//     <>
//     <View style={styles.container}>
//     <TensorCamera
//       ref={camRef}
//       style={styles.camera}
//       type={type}
//       cameraTextureHeight={1200}
//       cameraTextureWidth={1600}
//       resizeHeight={480}
//       resizeWidth={640}
//       onReady={handleCameraStream}
//       autorender={true}>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             setType(
//               type === Camera.Constants.Type.back
//                 ? Camera.Constants.Type.front
//                 : Camera.Constants.Type.back
//             );
//           }}>
//           <Text style={styles.text}> Flip </Text>
//         </TouchableOpacity>
//       </View>
//     </TensorCamera>
//     <Canvas ref={canvasRef}
//       style={styles.canvas}/>
//   </View>
//   <View>
//       <Botao valor="Emergency" acao={() => {console.log("Oh my god you shouldn't have done this!")}} />
//   </View>
//   </>

  

//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     margin: 20,
//   },
//   button: {
//     flex: 0.1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     color: 'white',
//   },
//   canvas: {
//     position: "absolute",
//     marginLeft: "auto",
//     marginRight: "auto",
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     elevation: 8,
//     width: 640,
//     height: 480,
//   }
// });

import React from 'react';
import TelaPadrao from './src/componentes/TelaPadrao';
import Login from './src/telas/Login';
import InserirPin from './src/telas/InserirPin';
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/telas/Cadastro';
import Resultado from './src/telas/Resultado';
const Stack = createNativeStackNavigator();

export default function App () {
  return <NavigationContainer>
            <TelaPadrao>
              <Stack.Navigator>
              <Stack.Screen name='Resultado' component={Resultado} options={{headerShown:false}}/>
              <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
              <Stack.Screen name='Cadastro' component={Cadastro}/>
              <Stack.Screen name='Inserir Pin' component={InserirPin}/>
              <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
              <Stack.Screen name='Perfil' component={Perfil} options={{headerShown:false}}/>
              <Stack.Screen name='Sala de Espera' component={SalaEspera}/>
              <Stack.Screen name='Quiz' component={Quiz} options={{headerShown:false}}/>
              <Stack.Screen name='Tutorial Quiz' component={TutorialQuiz}/>
              <Stack.Screen name='Tutorial Meteoro' component={TutorialMeteoro}/>              
              <Stack.Screen name='Tutorial Mestre Mando' component={TutorialMestreMando}/>
              <Stack.Screen name='Jogos' component={Jogos}/>
              <Stack.Screen name='Ranking Geral' component={RankingGeral} options={{headerShown:false}}/>
              <Stack.Screen name='Mestre Mando' component={MestreMando} options={{headerShown:false}}/>
              </Stack.Navigator>
            </TelaPadrao> 
          </NavigationContainer>
}

