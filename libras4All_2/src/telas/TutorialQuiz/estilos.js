import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { AutoFocus } from "expo-camera/build/Camera.types";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo:{
        backgroundColor: "rgb(35, 36, 95)",
        height: "100%",
        justifyContent: "space-between",
        color: "black", 
    },
    bloco:{
        marginTop: "50%"
    },
    titulo:{
        color: "white",
        alignSelf: "center",
        fontSize: 40,        
        marginBottom: 40     

    },  
    
    tipo:{
        alignSelf:"center",
        width: "89%",
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: 'row',
        flexWrap: "wrap",
        paddingVertical: 10,
        marginBottom: 30
    },
    icon:{
        height: 26,
        width: 26,
    },
    icon_time:{
        height: 26,
        width: 26,
    },
    texto:{
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        marginLeft: 25
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
        backgroundColor: "#037ca9",
        flexDirection: 'row',
        justifyContent: "space-around",
        height: 65,
        alignItems: "center",
    },
});