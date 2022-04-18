import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"white",
        height: "100%",
        justifyContent: "center",
        color: "black"
    },
    login__logomarca:{
        marginBottom: 10
    },
    visualizar:{
        position: "absolute",
        right: 5

    },
    icon_olho: {
        width: 32,
        height: 32,
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
    link:{
        color:"#0000ff",
        textDecorationLine: 'underline',
        textAlign: 'center',
        width: "100%",
        marginTop: 10
    },
    login__input:{
        fontSize: 15,       
        color: "black",
        width: "80%",
        alignSelf: "center",
        height: 50,
        paddingRight: 30
    },
    icon_area:{
        width: "80%",        
        alignSelf: "center",
    flexDirection: 'row',
    borderWidth: 1,
        borderColor: "#acacac",
        borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5 ,
    marginBottom: 30
    },
    input_icon:{
        padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
    },
    texto_button:{
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",
        
        
    },
    login_button:{
        justifyContent: 'center',
        backgroundColor: "rgb(35, 36, 95)",
        alignSelf:"center",
        borderRadius: 5,
        width: "80%",
        alignSelf: "center",
        marginBottom: 30,
        height: 50,

    },
    cadastro_button:{
        justifyContent: 'center',
        backgroundColor: "#037ca9",
        alignSelf:"center",
        borderRadius: 5,
        width: "80%",
        alignSelf: "center",
        height: 50

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
        backgroundColor: "white",
        
        
    },
    botao:{
        marginBottom: 5,
        width: "100%",
        alignItems: "center",
        alignSelf: "center"
    },
    carregando:{
        backgroundColor:"#e3f2ff",
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    carregar_animate:{
        alignSelf: "center",
        width: "100%"
    },
});