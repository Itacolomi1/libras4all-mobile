
import { StyleSheet } from "react-native";
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default StyleSheet.create({
    fundo: {
      backgroundColor:"white",
      height: "100%",
    },
    campoImg: {
        width: "95%",
        height: "80%",
        justifyContent: "center",
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',

    },
    tema_button:{
        justifyContent: 'center',
        backgroundColor: "rgb(35, 36, 95)",
        alignSelf:"center",
        borderRadius: 8,
        width: "50%",
        alignSelf: "center",
        height: 50,
        margin:2,

    },
    texto_button: {
        color: "#fff",
        fontSize: 15,
        fontWeight:"bold",
        alignSelf: "center",

    },
    img: {
        resizeMode: "contain",
        height: "95%",
        width: "95%",
    },
    view_button:{
        backgroundColor:"white",
        paddingBottom:2
    }
});

export const Title = styled.Text`
  align-self: center;
  margin-top: 45px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(35, 36, 95);
`;
export const CarouselView = styled.View`
  margin-top: 2%;
  width: 100%;
`;

export const CarouselImg = styled.Image`
  height: 420px;
  width: 250px;
  align-self: center;
  border-radius: 12px;
`;
export const CarouselIcon = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
`;
export const Information = styled.View`
  align-self: center;
  margin-top: 0px;
  padding: 10px 14px;
  width: 94%;
  border-radius: 8px;
  border-color: rgb(35, 36, 95);
  border-width:1px;
  background-color: #C1E2FF;
`;
Information.View = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
Information.Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(35, 36, 95);
`;
Information.Text = styled.Text`
  margin-bottom: 10px;
  color: rgb(35, 36, 95);
  font-size: 16px;
  text-align:justify;
`;