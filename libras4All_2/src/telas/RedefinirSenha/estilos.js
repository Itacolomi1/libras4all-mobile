import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"white",
        height: "100%",
        justifyContent: "center",
        color: "black",
        backgroundColor: "rgb(35, 36, 95)",
    },
    logo:{
        width: "100%"
    },
   titulo:{
    color:"white",
    fontSize: 20,
    textAlign: 'center',
    width: "100%"
   },
    input:{
        
        fontSize: 15,       
        color: "black",
        width: "80%",
        alignSelf: "center",
        height: 48,
        backgroundColor: "white"
        
    },
    icon_area:{
        marginTop: 30,
        width: "80%",        
        alignSelf: "center",
    flexDirection: 'row',
    borderWidth: 1,
        borderColor: "#acacac",
        borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5 ,
    marginBottom: 30,
    backgroundColor: "white"
    },
    input_icon:{
        padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
    },
    texto_button:{
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",
        
        
    },
    
    button:{
        justifyContent: 'center',
        backgroundColor: "#037ca9",
        alignSelf:"center",
        borderRadius: 5,
        width: "80%",
        alignSelf: "center",
        height: 50

    },
    Titulo:{
        fontWeight:'bold',        
        fontSize: 22,    
        alignSelf: "center", 
        backgroundColor: "white",        
        color: "black",
        alignItems: 'center',
        marginBottom: 30
        
                  
    },
    engloba:{
        width: "100%",
        
        
    },
    botao:{
        marginBottom: 5,
        width: "100%",
        alignItems: "center",
        alignSelf: "center"
    }
});