import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"#FDDEDE",
        flex:2
    },
    login__logomarca:{
        marginBottom: 10
    },
    login__msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text
    }),
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 10,
        marginBottom: 15,
        marginLeft:30,
        marginRight: 30
    },
    login__button:{
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf:"center",
        borderRadius:5
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    },
    Titlo:{
        fontWeight:'bold',
        fontSize: 22,        
    },
    botao:{
        marginBottom: 5,
        flexDirection: "column",
        flexWrap: "wrap",
    }
});