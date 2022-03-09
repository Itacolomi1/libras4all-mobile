import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

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
    texto_pergunta:{
        color: "black",
        alignSelf: 'center',
        padding: 10,
    },
    pergunta:{
        width: "80%",
        backgroundColor: "white",
        alignSelf: "center",
        justifyContent:"center",
        borderRadius: 15,
        height: "40%",       
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
    alternativa_button:{
        width: "80%",
        backgroundColor: "rgb(35, 36, 95)",
        borderRadius: 5,
        marginBottom: 5,
        alignSelf: "center",
        height: 50,
        justifyContent: "center",
    },
    alternativas:{
        marginBottom: "25%"
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