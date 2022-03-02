import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor: "rgb(35, 36, 95)",
        height: "100%",
        justifyContent: "center",
        color: "black", 
    },
    bloco:{        
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    titulo:{ 
        color: "black",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 30,        
        marginBottom: 5,
        width: "100%",
        textAlign: "center"

    },  
    
    tipo:{
        alignSelf:"center",
        width: "89%",
        backgroundColor: "white",
        borderRadius: 15,
        flexWrap: "wrap",
        paddingVertical: 10,
        marginBottom: 30
    },
    icon:{
        height: 100,
        width: 100,
        alignSelf: "center",
        alignItems: "center"
    },
    
    texto:{
        fontSize: 30,
        color: "green",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        width: "100%"
    },
    
  jogar_button:{
    justifyContent: 'center',
    backgroundColor: "#037ca9",
    alignSelf:"center",
    borderRadius: 5,
    width: "80%",
    alignSelf: "center",
    height: 50

},
    texto_button:{
        color: "#fff",
        fontSize: 15,
        alignSelf: "center",       
        
    },
    
    elevation:{
        elevation: 20,
        shadowColor: '#171717',
    },
   
    
    
});