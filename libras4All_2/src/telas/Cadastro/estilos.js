import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo: {
        backgroundColor: "white",
        height: "100%",
        justifyContent: "center",
        color: "black"
    },
    rolagem:{
        paddingTop: 20,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
    cadastro__input: {
        fontSize: 15,
        color: "black",
        width: "80%",
        alignSelf: "center",
        height: 50

    },
    cadastro__data: {
        fontSize: 15,
        color: "black",
        width: "80%",
        alignSelf: "center",
        marginLeft: 5

    },

    icon_area: {
        width: "80%",
        alignSelf: "center",
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#acacac",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        marginBottom: 30
    },
    
  
    termo_text:{
        color: 'black',
    },
    termo: {
        
        backgroundColor: "#e9e9e9",
        width: "80%",
        alignSelf: "center",
        color: 'black',
        flexDirection: 'row',        
        borderColor: "#acacac",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        marginBottom: 30        
    },
    input_icon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    input_date: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start'


    },
    texto_button: {
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",


    },
    salvar_button: {
        justifyContent: 'center',
        backgroundColor: "rgb(35, 36, 95)",
        alignSelf: "center",
        borderRadius: 5,
        width: "80%",
        alignSelf: "center",
        marginBottom: 30,
        height: 50,

    },
    Titulo: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: "center",
        backgroundColor: "white",
        color: "black",
        alignItems: 'center',
        marginBottom: 30


    },
    engloba: {
        width: "100%",
        backgroundColor: "white",
    },
    botao: {
        marginBottom: 5,
        width: "100%",
        alignItems: "center",
        alignSelf: "center"
    },
    carregar_animate: {
        alignSelf: "center",
        width: "100%"
    },
    carregando: {
        backgroundColor: "#e3f2ff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hyperlink:{
        color: 'blue'
    }
});