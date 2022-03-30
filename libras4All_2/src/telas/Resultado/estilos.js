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
    titulo:{
        color: "black",
        width: "100%",
        textAlign: "center",
        fontSize: 35,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    logo:{
        height: 65,
        width: "50%",
        alignSelf: "center"
        
    },
    
    bloco:{
        alignSelf:"center",
            width: "89%",
            backgroundColor: "white",
            borderRadius: 15,
            flexDirection: 'row',
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10
    },
    elevation:{
        elevation: 15,
        shadowColor: '#171717',
    },
    qtd_acertos:{
        fontSize: 18,
        color: "black",
        marginLeft: 5,
        fontWeight: "bold"
    },
    qtd_erros:{
        fontSize: 18,
        color: "black",
        marginLeft: 5,
        fontWeight: "bold"
    },
    txt:{
        fontSize: 18,
        color: "black",
        marginTop: 15,
        alignSelf: "center"
        
    },
    btn_jogo:{       
        flex:1,
        width: "100%",
        resizeMode : 'contain',
        alignItems: 'center'
        },
         
        button:{
            justifyContent: 'center',
            backgroundColor: "white",
            alignSelf:"center",
            width: "89%",
            alignSelf: "center",
            height: 110,
            marginBottom: 35
    
        },
    icon_nivel:{
        height: 37,
        width: 45,
        resizeMode : 'contain',
    },
    icon_ranking:{
        height: 37,
        width: 45,
        resizeMode : 'contain',
    },
    icon_perfil:{
        height: 37,
        width: 45,
        resizeMode : 'contain',
    },
    topo:{
        width: "100%",
        backgroundColor: "rgb(35, 36, 95)",
        flexDirection: 'row',
        justifyContent: "space-evenly",
        height: 65,
        alignItems: "center",
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
   
});