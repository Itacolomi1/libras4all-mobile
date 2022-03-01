import React, {useRef,useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { cameraWithTensors, bundleResourceIO  } from '@tensorflow/tfjs-react-native';
import { Camera } from 'expo-camera';
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,   
  Alert
} from 'react-native';
import * as settings from '../../assets/config/appSettings.json'

import {drawRect} from './utilities';
import Canvas from 'react-native-canvas';
import {adicionaHistorico} from '../../services/historic.service';


const TensorCamera = cameraWithTensors(Camera);
let modeloTensorFlow = null;
const {width, height} = Dimensions.get('window');


const labelMap = {
  1:{name:'A', color:'red'},
  2:{name:'B', color:'yellow'},
  3:{name:'C', color:'lime'},
  4:{name:'D', color:'blue'},
}

export default function MestreMando({navigation}) {
  let context = useRef();
  let canvas = useRef();
  let requestAnimationFrameId = 0;
  const salaID = '621bf0572d53a30016a0b575';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWJmMTkzMmQ1M2EzMDAxNmEwYjU3ZSIsImlhdCI6MTY0NjA4MDc4NH0.2Vhsn6B1o6lJPlIS4MCdJrwwQo3hS67Rhuw9BOJBfns';
  const userId = '621bf1932d53a30016a0b57e';
  let sinaisId =[];
  let sinaisMestreMando = [];
  const [loading, setLoading] = useState(true);
  const[sinal,setSinal] = useState(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {      
      getMestreMando();
    });

    return unsubscribe;
}, [navigation]);

//#region Get Mestre Mando 
    //Pegar os sinais cadastrados para esse jogo
    function getMestreMando(){
      try{
        fetch( settings.backend.url + `/historico/obterItens/${salaID}`,{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
          },
         
        })
          .then(response => response.json())
          .then(responseJson => {            
            sinaisId = responseJson;
            getSinais();
          })
          .catch(error => {
            console.log('deu errado');
            console.error(error);
          });

      }catch(e){
        console.log('deu ruim na requisição')
        console.log(e);
      }     
    }

    // Itera entre todos os sinais e salva em uma lista
    async function getSinais() {
      for (let index = 0; index < sinaisId.length; index++) {
        const element = sinaisId[index];
        let sinal = await getSinal(element);
        sinaisMestreMando.push(sinal);        
      }
      proximoSinal();
      setLoading(false);
    }
    //Pega os dados de um sinal singular
    async function getSinal(elemento){
      let retorno = '';
      await fetch(settings.backend.url + `/mestreMandou/obterSinal/${elemento}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
          },

      })
          .then(response => response.json())
          .then(responseJson => {
              retorno = responseJson;
          })
          .catch(error => {
              console.log('deu errado');
              console.error(error);
          });

      return retorno;
    }
//#endregion

//#region Exibindo sinais
  function proximoSinal(){
    console.log(sinaisMestreMando);
    console.log(sinaisMestreMando.length);
    if(sinaisMestreMando.length === 0){
      Alert.alert('O jogo acabou');
      console.log('Fui para a Home');
      return;
    }

    let sinalTemp = sinaisMestreMando.shift();    
    setSinal(sinalTemp);
    console.log('lista depois do shift');
    console.log(sinaisMestreMando);
  }

//#endregion
    const getModel = async () => {
      console.log('Começa a carregar o tensorflow');
  
      try{
  
        await tf.ready();
        // Signal to the app that tensorflow.js can now be used.
        console.log('ready is on');
  
        await tf.setBackend('rn-webgl');
        console.log('backend is on');
        
        // Get reference to bundled model assets 
        const modelJson = require('../../assets/model/model.json');
        const modelWeights = require('../../assets/model/group-shard.bin');

  
        // 3. TODO - Load network
        // const net = await tf.loadGraphModel('https://libras4alltfod.s3.br-sao.cloud-object-storage.appdomain.cloud/model.json')
        const net = await tf.loadGraphModel(
          bundleResourceIO(modelJson, modelWeights));
        console.log('modelo is on');
  
        modeloTensorFlow = net;  
  
      }catch(err) {
        console.log('erro no tensorflow');
        console.log(err);
      }
    };
  
    const handleCameraStream = (images, updatePreview, gl) => {
      console.log('entrou no stream handle');
      const loop = async () => {
        if (modeloTensorFlow != null) {
          const imageTensor = images.next().value;
          await detect(modeloTensorFlow, imageTensor);
        }
  
        tf.dispose(images);
        requestAnimationFrameId = requestAnimationFrame(loop);
      };
      loop();
  
    };

    function drawRectangle(boxes, classes, scores, threshold, scaleWidth, scaleHeight){

      if(!context.current || !canvas.current) {
        console.log('Canvas não iniciado');
        return;
      }

      const flipHorizontal = Platform.OS == 'ios'? false: true;

      // limpar previsões antigas;
      context.current.clearRect(0,0,width,height);

      // Desenha o retangulo pra cada previsão

      for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){

          // extrair as variáveis
          const [y,x,height,width] = boxes[i];
          const text = classes[i];

          console.log('previsão');
          console.log(labelMap[text]['name'] + ' ' + scores[i]);
          // escalar as coordenadas baseadas no 'ratio' calculado
          const boundingBoxX = flipHorizontal? 
            canvas.current.width - x * scaleWidth - width * scaleWidth 
            : x * scaleWidth;
          
          const boundingBoxY = y * scaleHeight;       

          //desenha o retangulo
          context.current.strokeRect(100,boundingBoxY, width * scaleWidth, height * scaleHeight);

          //desenhar a Label
          context.current.strokeText(
            text,
            boundingBoxX -5,
            boundingBoxY - 5
          );

          //Adiciona ao historico
          if(labelMap[text]['name'] == sinal.descricao.toUpperCase()){
            adicionaHistorico(token,salaID,userId,'Mestre Mando',sinal._id,'true');
            proximoSinal();
          }
         

        }
      
      
      }


    }

    async function handleCanvas(can) {
      
      if(can){
        
        can.width = width;
        can.height = height;
        const ctx = can.getContext('2d');
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
   
        context.current = ctx;
        canvas.current = can;
     
      }

    }
  
  
    const detect = async (net, images) => {
  
        // Get Video Properties
        const video = images;
        const videoWidth = Dimensions.get('window').width;
        const videoHeight = Dimensions.get('window').height;

        // Set video width
        //camRef.current.props.cameraTextureHeight = videoHeight;
        //camRef.current.props.cameraTextureWidth = videoWidth;
  
       
        // Set canvas height and width
        //canvasRef.current.width = videoWidth;
        //canvasRef.current.height = videoHeight;
  
        //video.isDisposedInternal = true;
        // 4. TODO - Make Detections
     
        const resized = tf.image.resizeBilinear(video, [640,480]);
        // resized.isDisposedInternal = true;

        const casted = resized.cast('int32');

        const expanded = casted.expandDims(0);


        // faz a previsão.
        const obj = await net.executeAsync(expanded);
  
        const boxes = await obj[2].array();
        const classes = await obj[4].array();
        const scores = await obj[1].array();
  
        // Draw mesh
        //const ctx = canvasRef.current.getContext("2d");
  
        // 5. TODO - Update drawing utility
        // drawSomething(obj, ctx)
        
        const scaleWidth = width/ images.shape[1];
        const scaleHeight = height/ images.shape[0];

        //requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.7, videoWidth, videoHeight, ctx)});
        requestAnimationFrame(()=>{drawRectangle(boxes[0], classes[0], scores[0], 0.7, scaleWidth, scaleHeight)});
  
        tf.dispose(video);
        tf.dispose(resized);
        tf.dispose(casted);
        tf.dispose(expanded);
        tf.dispose(obj);
  
  
    };
  
  
  
    const camRef = useRef(null);
    const canvasRef = useRef(null);
  
    const [hasPermission, setHasPermission] = useState(null);
    const [model, setModel] = useState();

  
    const [type, setType] = useState(Camera.Constants.Type.front);
  
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    useEffect(() => {
      getModel();
    }, []);
  
    useEffect(() => {
      return () => {
        cancelAnimationFrame(requestAnimationFrameId);
      };
    }, [requestAnimationFrameId]);
  
  
  
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    
    let textureDims = Platform.OS == 'ios'
        ? {height: 1920, width: 1080}
        : {height: 1200, width: 1600}
  
    if(loading){
      return  <View>               
                <Text>To carregando meu filhooo</Text>
              </View>
    }
 
    return ( 

      <>
      <View style={styles.container}>
      <TensorCamera
        ref={camRef}
        style={styles.camera}
        type={type}       
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={480}
        resizeWidth={640}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={true}
        useCustomShadersToResize={false}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </TensorCamera>
      <Canvas ref={handleCanvas}
        style={styles.canvas}/>
    </View>
    <View styles={styles.barraSinais}>
      <Text>Faça a letra {sinal.descricao}</Text> 
    </View> 
    </>
    );
  
    
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      width: '100%',
      height: '100%'
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    canvas: {
      position: "absolute", 
      zIndex: 10000000,
      width: '100%',
      height: '100%',
    },
    barraSinais: {
      width: '100%',
      backgroundColor: '#3682F5'
    },
  });