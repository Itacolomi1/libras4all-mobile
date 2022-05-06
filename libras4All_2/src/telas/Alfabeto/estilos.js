import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo: {
        backgroundColor: "#C1E2FF",
        height: "100%",
        justifyContent: "flex-end",
        color: "black",
    },
    campo: {
        height: 32,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
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

    btn: {
        backgroundColor: "black",
        width: "10%",

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

    bloco: {

    },
    titulo: {
        color: "white",
        alignSelf: "center",
        fontSize: 40,
        marginBottom: 40

    },


    tipo: {
        alignSelf: "center",
        width: "89%",
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: 'row',
        flexWrap: "wrap",
        paddingVertical: 10,
        marginBottom: 30
    },
    icon: {
        height: 26,
        width: 26,
    },
    icon_time: {
        height: 26,
        width: 26,
    },
    texto: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        marginLeft: 25
    },

    jogar_button: {
        justifyContent: 'center',
        backgroundColor: "#037ca9",
        alignSelf: "center",
        borderRadius: 5,
        width: "80%",
        alignSelf: "center",
        height: 50

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


    icon_game: {
        height: 50,
        width: 45,
        resizeMode: 'contain',
        alignItems: 'center',

    },
    icon_pin: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        alignItems: 'center',
    },
    icon_home: {
        height: 40,
        width: 45,
        resizeMode: 'contain',
        alignItems: 'center',
    },
    icon_area: {
        backgroundColor: "#037ca9",
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 65,
        alignItems: "center",
    },
});