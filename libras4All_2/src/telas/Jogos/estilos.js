import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"#e3f2ff",
        height: "100%",
        justifyContent: "space-between",
        color: "black"
    },
   
    
   
    btn_jogo:{       
        flex:1,
        width: "100%",
        resizeMode : 'contain',
        alignItems: 'center',
        },
         
        button:{
            justifyContent: 'space-between',
            backgroundColor:"#e3f2ff",
            alignSelf:"center",
            width: "89%",
            alignSelf: "center",
            height: "33%",
            


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
        alignItems: "center",
        height: "25%",
        paddingTop: 20
    },
    imagem:{
        resizeMode: "contain",
        height: "100%",
    },
    jogos:{
        height: "65%",
        paddingBottom: 20
    },
    icon_game:{        
        height: "100%",
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center'
       
    },
    icon_pin:{        
        height: "100%",
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center'       
    },
    icon_home:{        
        height: "100%",
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center'       
    },
    icon_area:{
backgroundColor: "rgb(35, 36, 95)",
flexDirection: 'row',
justifyContent: "space-around",
height: 65,
maxHeight: "8%",
alignItems: "center",


    },
});