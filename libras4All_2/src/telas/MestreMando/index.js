import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { cameraWithTensors, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { Camera } from 'expo-camera';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  Alert,
  SafeAreaView
} from 'react-native';
import ModelSingleton from '../../shared/model.singleton';

//import {drawRect} from './utilities';
import Canvas from 'react-native-canvas';
import Lottie from 'lottie-react-native';
import carregar from '../Images/carregar.json';
import Cronometro from '../../componentes/cronometro';


const TensorCamera = cameraWithTensors(Camera);
let modeloTensorFlow = null;
const { width, height } = Dimensions.get('window');


const labelMap = {
  1: { name: 'A', color: 'red' },
  2: { name: 'B', color: 'yellow' },
  3: { name: 'C', color: 'lime' },
  4: { name: 'D', color: 'blue' },
}

export default function MestreMando({ ValidaMestre, Letra }) {

  const [loading, setLoading] = useState(true);
  let requestAnimationFrameId = 0;
  const hoursMinSecs = { hours: 0, minutes: 0, seconds: 20 }
  console.log('A Letra recebida foi ' + Letra);
   

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

  // Define a drawing function
  const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {

    for (let i = 0; i <= boxes.length; i++) {
      if (boxes[i] && classes[i] && scores[i] > threshold) {
        ctx.width = imgWidth;
        ctx.height = imgHeight;

        // Extract variables
        const [y, x, height, width] = boxes[i];
        const text = classes[i];

        console.log('Previsão');
        console.log(labelMap[text]['name'] + ' ' + Math.round(scores[i] * 100) / 100);



        // Set styling
        ctx.strokeStyle = labelMap[text]['color']
        ctx.lineWidth = 10
        ctx.fillStyle = 'black'
        ctx.font = '30px Arial'

        // DRAW!!
        ctx.beginPath()
        ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i] * 100) / 100, x * imgWidth, y * imgHeight - 10)
        ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 2);
        ctx.stroke()

        // if(labelMap[text]['name'] === listaSinais[sinalDaVez].descricao){
        //    //Salva o resultado do Mestre Mando;
        //   registra_resultado(true);
        // }
        if (labelMap[text]['name'] === Letra) {
          ValidaMestre(true);
        }


      }
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

    const resized = tf.image.resizeBilinear(video, [640, 480]);
    // resized.isDisposedInternal = true;

    const casted = resized.cast('int32');

    const expanded = casted.expandDims(0);


    // faz a previsão.
    const obj = await net.executeAsync(expanded);

    const boxes = await obj[3].array();
    const classes = await obj[1].array();
    const scores = await obj[5].array();

    // Draw mesh
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const ctx = canvasRef.current.getContext("2d");

    // 5. TODO - Update drawing utility
    // drawSomething(obj, ctx)

    const scaleWidth = width / images.shape[1];
    const scaleHeight = height / images.shape[0];

    requestAnimationFrame(() => { drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx) });
    //requestAnimationFrame(()=>{drawRectangle(boxes[0], classes[0], scores[0], 0.7, videoWidth, videoHeight, ctx)});

    tf.dispose(video);
    tf.dispose(resized);
    tf.dispose(casted);
    tf.dispose(expanded);
    tf.dispose(obj);


  };

  function validaTempo(close){
    if(!close){
        ValidaMestre(false);       
    }
}



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
    let modelo = ModelSingleton.getInstance();
    modeloTensorFlow = modelo.getModelo();
    console.log('pegou modelo da Home');
    setLoading(false);  
    //getModel();
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
    ? { height: 1920, width: 1080 }
    : { height: 1200, width: 1600 }

  if (loading) {
    return <>
      <SafeAreaView style={styles.carregando}>
        <Lottie style={styles.carregar_animate} source={carregar} autoPlay loop renderMode='contain' autoSize />
      </SafeAreaView>
    </>
  }

  return (

    <>
      <View style={styles.barraSinais}>
        <Text style={styles.texto}>Faça a letra {Letra}</Text>
        <Cronometro hoursMinSecs={hoursMinSecs} validaTempo={validaTempo}/>
      </View>
     
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
        <Canvas ref={canvasRef}
          style={styles.canvas} />
      </View>

    </>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    position: 'absolute',
    elevation: 0,
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
  texto: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold",
    marginLeft: 10
  },
  canvas: {
    position: "absolute",
    elevation: 8,
    width: '100%',
    height: '100%',
  },
  barraSinais: {
    width: '100%',
    backgroundColor: "rgb(35, 36, 95)",
    height: 50,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center'

  },
  carregar_animate: {
    alignSelf: "center",
    width: "100%"
  },
  carregando: {
    backgroundColor: "#e3f2ff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});