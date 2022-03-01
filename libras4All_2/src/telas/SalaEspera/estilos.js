import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"white",
        height: "100%",
        justifyContent: "space-around",
        color: "black",      
    },
    lista:{
        height: "50%",        
    },
    itens:{
        width: "80%",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#C1E2FF",
        borderRadius: 5,
        marginBottom: 5,
        height: 40,
        justifyContent: "center",
        alignSelf: "center",
    },
    titulo:{
        color: "black",
        fontSize: 20,
        alignSelf: "center",
        marginTop: 50
        
    },
    item:{
        color:"black"
    },
    texto_button:{
        color: "white",
        alignSelf: "center",
    },
    button:{
        width: "80%",
        backgroundColor: "rgb(35, 36, 95)",
        borderRadius: 5,
        marginBottom: 65,
        alignSelf: "center",
        height: 50,
        justifyContent: "center",
    },
    
});