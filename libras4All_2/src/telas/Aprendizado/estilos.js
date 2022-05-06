import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo: {
        backgroundColor: "rgb(35, 36, 95)",
        height: "100%",
        justifyContent: "center",
        color: "black",
    },

    logo:{
        height: "30%",
        alignSelf: "center",
        resizeMode: "contain"
        
    },
    
    tema_button:{
        justifyContent: 'center',
        backgroundColor: "#C1E2FF",
        alignSelf:"center",
        borderRadius: 5,
        width: "80%",
        alignSelf: "center",
        height: 50,
        margin:2,

    },

    texto_button: {
        color: "rgb(35, 36, 95)",
        fontSize: 15,
        fontWeight:"bold",
        alignSelf: "center",

    },

});