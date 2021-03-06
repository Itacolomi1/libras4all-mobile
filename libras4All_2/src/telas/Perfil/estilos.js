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
        color: "white",
    },
    rolagem:{
        width: "100%",
        height: "100%",
        backgroundColor:"#e3f2ff",
    },
    logo:{
        height: 120,
        width: "50%",
        alignSelf: "center",
        resizeMode: "contain" 
        
    },
    
    nivel:{        
        paddingTop: 15,
        paddingBottom: 15,
        alignSelf:"center",
        width: "89%",
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,
        marginTop: 10,
        marginBottom: 10
    },
    salas:{        
        alignSelf:"center",
        width: "89%",
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: 'row',
        flexWrap: "wrap",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        marginTop: 10,        
        marginBottom: 10
    },
    engloba:{
        flexDirection: 'row',
        alignSelf: "center",        
        alignItems: "center",
        paddingHorizontal: 40
    },
    texto_bold:{
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        width: "19%"
    },
    bloco:{
        flexDirection: 'row',
        width: "95%",
        
    },
    sessao_button:{
        justifyContent: 'center',
        backgroundColor: "rgb(35, 36, 95)",
        alignSelf:"center",
        borderRadius: 5,
        width: "89%",
        alignSelf: "center",
        marginBottom: 30,
        height: 50,
        marginTop: 10
    },
    texto_button:{
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",       
        
    },
    jogos:{        
        alignSelf:"center",
        width: "89%",
        backgroundColor: "white",
        borderRadius: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        paddingLeft: 20,
        marginTop: 10,
        marginBottom: 10

       
    },
    dados:{        
        alignSelf:"center",
        width: "89%",
        backgroundColor: "white",
        borderRadius: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 10,        
        marginBottom: 10
       
    },
    elevation:{
        elevation: 5,
        shadowColor: '#171717',
    },
    qtd_pontos:{
        fontSize: 18,
        color: "black",
        marginLeft: 5
    },
    nome:{

        fontSize: 18,
        color: "black",
        marginLeft: 5,        
        width: "80%"
    },
    email:{
        fontSize: 18,
        color: "black",
        marginLeft: 5,        
        width: "80%",
    },
    texto:{
        fontSize: 18,
        color: "black",
        marginLeft: 15
    },
    qtd_sala:{
        fontSize: 18,
        color: "black",
        marginLeft: 5,
        fontWeight: "bold"
    },
    qtd_quiz:{
        fontSize: 18,
        color: "black",
        marginLeft: 5,
        fontWeight: "bold"
    },
    qtd_meteoro:{
        fontSize: 18,
        color: "black",
        marginLeft: 5,
        fontWeight: "bold"
    },
    qtd_mestre:{
        fontSize: 18,
        color: "black",
        marginLeft: 5,
        fontWeight: "bold"
    },
    txt:{
        fontSize: 15,
        color: "black",
        marginTop: 15,
        alignSelf: "center",
        fontWeight: "bold",
        width: "100%",
        paddingLeft: 15
        
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
            marginBottom: 35,
            marginTop: 10
    
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