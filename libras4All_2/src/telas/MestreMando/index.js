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
} from 'react-native';

import {drawRect} from './utilities';
import Canvas from 'react-native-canvas';


const TensorCamera = cameraWithTensors(Camera);
let modeloTensorFlow = null;


export default function MestreMando() {
    let requestAnimationFrameId = 0;

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
  
        // Loop and detect hands
        // setInterval(() => {
        //   detect(net, images);
        // }, 16.7);
  
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
  
  
    const detect = async (net, images) => {
  
        // Get Video Properties
        const video = images;
        const videoWidth = Dimensions.get('window').width;
        const videoHeight = Dimensions.get('window').height;    

        // console.log('video widht');
        // console.log(videoWidth);

        // console.log('video height');
        // console.log(videoHeight);




        // Set video width
        camRef.current.props.cameraTextureHeight = videoHeight;
        camRef.current.props.cameraTextureWidth = videoWidth;
  
       
        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
  
        video.isDisposedInternal = true;
        // 4. TODO - Make Detections
        //const img = tf.browser.fromPixels(video);
        // console.log('Images variable');
        // console.log(images);
        const resized = tf.image.resizeBilinear(video, [640,480]);
        // resized.isDisposedInternal = true;
        // console.log('resized variable');
        // console.log(resized);

        const casted = resized.cast('int32');

        // console.log('casted variable');
        // console.log(casted);

        const expanded = casted.expandDims(0);

        // console.log('expanded variable');
        // console.log(expanded);

        // faz a previsão.
        const obj = await net.executeAsync(expanded);

        // console.log('obj variable');
        // console.log(obj);
  
        // console.log('classes');
        // console.log(await obj[4].array());
  
        const boxes = await obj[2].array();
        const classes = await obj[4].array();
        const scores = await obj[1].array();
  
        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
  
        // 5. TODO - Update drawing utility
        // drawSomething(obj, ctx)
        requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.7, videoWidth, videoHeight, ctx)});
  
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
  
  
 
    return ( 

      <>
      <View style={styles.container}>
      <TensorCamera
        ref={camRef}
        style={styles.camera}
        type={type}
        //ratio={'4:3'}
        cameraTextureHeight={1200}
        cameraTextureWidth={1600}
        resizeHeight={480}
        resizeWidth={640}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={true}>
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
        style={styles.canvas}/>
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
      marginLeft: 'auto',
      marginRight: 'auto',
      left: 0,
      right: 0,
      textAlign: 'center',
      //elevation: 9,
      zIndex: 9,
      width: 392.72,
      height: 823.63,
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
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",    
      zIndex: 8,
      width: 640,
      height: 480,
    }
  });