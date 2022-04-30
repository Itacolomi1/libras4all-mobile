import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo: {
        backgroundColor: "#C1E2FF",
        height: "100%",
        alignItems: "center",
        paddingBottom:'10%',
    },    
    picker:{
        borderWidth: 2, 
        borderColor: "rgb(35, 36, 95)", 
        borderRadius: 4,
        height: '5%', 
        width: '40%',
    },
    campoLetra: {
        width: "95%",
        justifyContent: "center",
        marginLeft:'auto',
        marginTop:'auto',
        marginBottom:'auto',  
        
    },
    letra: {
        resizeMode: "contain",
        height: "95%",
        width: "95%",
    },    

   
    texto: {
        fontSize: 20,
        color: "black",
        marginBottom:'1%',
    },

   
});