import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"white",
        height: "100%",
        justifyContent: "space-between",
        color: "black"
    },
   
    
    btn_jogo:{       
    flex:1,
    width: "100%",
    resizeMode : 'contain',
    alignItems: 'center'
    },
     
    button:{
        justifyContent: 'center',
        backgroundColor: "white",
        alignSelf:"center",
        width: "89%",
        alignSelf: "center",
        height: 110,
        marginBottom: 35

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
    icon_game:{        
        height: 50,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center'
       
    },
    icon_pin:{        
        height: 45,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center'       
    },
    icon_home:{        
        height: 40,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center'       
    },
    icon_area:{
backgroundColor: "rgb(35, 36, 95)",
flexDirection: 'row',
justifyContent: "space-around",
height: 65,
alignItems: "center"


    },
});