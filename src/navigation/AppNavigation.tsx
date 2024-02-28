import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from '../screens/Login';
import InstagramHome from '../screens/InstagramHome';
import Page1 from '../screens/Page1';
import Page3 from '../screens/Page3';
import Page4 from '../screens/Page4';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Page2 from '../screens/Page2';

const BottomNav = createBottomTabNavigator();
export function BottomTabNavigator() {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Home"
        component={InstagramHome}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Page 1"
        component={Page1}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Page 2"
        component={Page2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Page 3"
        component={Page3}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <BottomNav.Screen
        name="Page 4"
        component={Page4}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
}

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
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}
