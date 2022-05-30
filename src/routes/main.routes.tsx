import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from './authentication/auth.routes';
export const MainRoutes:React.FC = () => {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}