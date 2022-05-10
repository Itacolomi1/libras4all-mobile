import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo: {
        backgroundColor: "#C1E2FF",
        height: "100%",
        justifyContent: "space-between",
        color: "black",
    },
    campo: {
        height: 32,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
    },

    centraliza:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "60%",
        marginTop: 50
 
    },
     campoLetra: {
         width: "95%",
         justifyContent: "center",
         backgroundColor: "white",
         borderRadius: 15,
         height: "100%",
         alignItems: "center"
     },
    letra: {
        resizeMode: "contain",
        height: "95%",
        width: "95%",
    },

    btn: {
        backgroundColor: "black",
        width: "20%",

    },
    btnText: {
        color: "white",
        textAlign: "center"
    },


    teclado: {
        paddingTop: 10,
        backgroundColor: "black",
        height: "20%",
        justifyContent: "space-evenly",
        alignItems: "center"
    },


    titulo: {
        color: "white",
        alignSelf: "center",
        fontSize: 40,
        marginBottom: 40

    },


    texto: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        marginLeft: 25
    },


    texto_button: {
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",

    },

    elevation: {
        elevation: 20,
        shadowColor: '#171717',
    },

});