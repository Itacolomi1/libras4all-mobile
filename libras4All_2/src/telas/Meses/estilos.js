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
        borderColor:"#87CEFA", 
        backgroundColor:"#FFF",
        borderRadius: 4,
        height: '8%', 
        width: '80%',
    },
    campoLetra: {
        width: "95%",
        height:"80%",
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
        fontSize: 15,
        color: "black",
        marginBottom:'3%',
    },

   
});