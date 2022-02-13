import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from './telas/Login';
import MestreMando from "./telas/MestreMando";

import { cores } from "./estilos-global";


const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: cores.roxo,
                inativeTintColor: cores.claro,
                activeBackgroundColor: cores.roxo,
                inactiveBackgroundColor: cores.laranja,
                style:{
                    height: 70
                },
                labelStyle: {
                    width:'100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight:21,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.laranja
                },
                keyboardHidesTabBar: true
            }}   
        >
            <Tab.Screen name="Mestre Mando" component={MestreMando} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    </NavigationContainer>
}
