import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo: {
        backgroundColor: "#C1E2FF",
        height: "100%",
        justifyContent: "center",
        color: "black",
    },
    
    tema_button:{
        justifyContent: 'center',
        backgroundColor: "#037ca9",
        alignSelf:"center",
        borderRadius: 5,
        width: "80%",
        alignSelf: "center",
        height: 50,
        margin:2,

    },

    texto_button: {
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",

    },

});