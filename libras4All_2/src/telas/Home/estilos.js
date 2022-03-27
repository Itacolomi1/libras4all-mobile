import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"#e3f2ff",
        height: "100%",
        justifyContent: "space-between",
        color: "black",      
    },
    titulo:{
        color: "white",
    },
    logo:{
        height: 120,
        width: "50%",
        alignSelf: "center",
        resizeMode: "contain"
        
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
   
    tempo:{
        position: "relative",
        height: 45,
    },
    nivel:{        
        paddingTop: 15,
        paddingBottom: 15,
        alignSelf:"center",
            width: "89%",
            backgroundColor: "white",
            borderRadius: 15,
            flexDirection: 'row',
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 15
    },
    elevation:{
        elevation: 20,
        shadowColor: '#171717',
    },
    qtd_pontos:{
        fontSize: 18,
        color: "black",
        marginLeft: 5
    },
    txt:{
        fontSize: 15,
        color: "black",
        marginTop: 15,
        alignSelf: "center",
        fontWeight: "bold",
        width: "100%",
        paddingLeft: 15
        
    },
    jogos:{
        height: "57%",
    },
    btn_jogo:{       
        flex:1,
        width: "100%",
        resizeMode : 'contain',
        alignItems: 'center',
        },
         
        button:{
            justifyContent: 'center',
            backgroundColor:"#e3f2ff",
            alignSelf:"center",
            width: "89%",
            alignSelf: "center",
            height: "33%",
            
    
        },
    icon_nivel:{
        height: 37,
        width: 45,
        resizeMode : 'contain',
    },
    icon_ranking:{
        height: 37,
        width: 45,
        resizeMode : 'contain',
    },
    icon_perfil:{
        height: 37,
        width: 45,
        resizeMode : 'contain',
    },
    topo:{
        width: "100%",
        backgroundColor: "rgb(35, 36, 95)",
        flexDirection: 'row',
        justifyContent: "space-evenly",
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