import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/Login";
import InstagramHome from "../screens/InstagramHome";

const StackNav = createNativeStackNavigator();

export function HomeStackNavigator() {
    return (
        <StackNav.Navigator>
            <StackNav.Screen
            name="LoginScreen"
            component={LoginPage}
            options={{
                headerShown: false,
            }}
        />
        <StackNav.Screen 
            name="Instagram"
            component={InstagramHome}
            options={{
                headerShown: false,
            }}
        />
        </StackNav.Navigator>
    );
}