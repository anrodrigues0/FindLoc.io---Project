import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen,WelcomeScreen,RegisterScreen } from '../../screen/main.screens';
const { Navigator,Screen } =  createNativeStackNavigator();

export const AuthRoutes:React.FC = () => (
    <Navigator screenOptions={{headerShown:false}}>
        <Screen name="Welcome" component={WelcomeScreen}/>
        <Screen name="Login" component={LoginScreen}/>
        <Screen name="Register" component={RegisterScreen}/>
    </Navigator>
)