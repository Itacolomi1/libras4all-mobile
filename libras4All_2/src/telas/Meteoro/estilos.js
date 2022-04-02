import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"#C1E2FF",
        height: "100%",
        justifyContent: "space-between",
        color: "black",      
    },
    titulo:{
        color: "white",
    },
    relogio:{
        color: "black",
        position: "absolute",
        top: 11,
        right: 14,
        fontWeight: "bold",
    },
    img_pergunta:{
        width: "27%",
        height: "40%",
        resizeMode : 'contain',
        alignSelf: 'center',
    },
    
    elevation:{
        elevation: 20,
        shadowColor: '#171717',
    },
    tempo:{
        position: "relative",
        height: 45,
    },
    icon_categotia:{
        height: 45,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center',
        rotation: 90
        },
    topo:{
        width: "100%",
        backgroundColor: "rgb(35, 36, 95)",
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 65,
        alignItems: "center",
    },
    texto_button:{
        color: "white",
        alignSelf: "center",
    },
    
    meteoros:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignContent:"space-between",
        position: "absolute",        
        top: 0
    }, 
    meteoro:{
        width: "30%",
        resizeMode : 'contain',
        alignItems: 'center',
        //position:'absolute',
        //paddingLeft: '15%'
    },
    campo:{
        height: 32,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
    },
    btn:{
backgroundColor: "black",
width: "10%",

    },
    btnText:{
        color: "white",
textAlign: "center"
    },
   
    
    teclado:{
        paddingTop: 10,
        backgroundColor: "black",
        height: "20%",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    limite:{
        height: 5,
        backgroundColor: "red",
        width: "100%",
        position: "absolute",
        bottom: "25%"

    },
    icon_game:{        
        height: 50,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center',
       
    },
    icon_pin:{        
        height: 45,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center',       
    },
    icon_home:{        
        height: 40,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center',       
    },
    icon_area:{
        backgroundColor: "rgb(35, 36, 95)",
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 65,
        alignItems: "center",
    },
    carregar_animate:{
        alignSelf: "center",
        width: "100%"
    },
    carregando:{
        backgroundColor:"#e3f2ff",
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
});