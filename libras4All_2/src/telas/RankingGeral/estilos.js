import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor:"#e3f2ff",
        height: "100%",
        justifyContent: "space-between",
        color: "black",      
    },
    lista:{
        height: "50%",        
    },
    itens:{
        alignSelf:"center",
        width: "89%",
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    bloco:{
        height: "50%"
    },
    carregar_animate:{
        alignSelf: "center",
        width: "100%"
    },
    carregando:{
        backgroundColor:"#e3f2ff",
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    titulo:{
        color: "black",
        fontSize: 30,
        alignSelf: "center",
        marginTop: 50,
        fontWeight: "bold"
        
    },
    icon:{
        width: 40,
        height: 40,        
        resizeMode : 'contain',
    },
    elevation:{
        elevation: 2,
        shadowColor: '#171717',
    },
    item:{
        color:"black",
        marginLeft: 15
        
    },
    pontos:{
        color:"black",
        fontWeight: "bold",
        marginRight: 15
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
    
    icon_game:{        
        height: 50,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center',
       
    },
    icon_pin:{        
        height: 45,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center',       
    },
    icon_home:{        
        height: 40,
        width: 45,
        resizeMode : 'contain',
        alignItems: 'center',       
    },
    icon_area:{
        backgroundColor: "rgb(35, 36, 95)",
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 65,
        alignItems: "center",
    },
});