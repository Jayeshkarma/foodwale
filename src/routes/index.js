/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import WebPage from '../screens/WebPage';


export const Routes=()=> {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false} }>
      <Stack.Screen name="Home"   options={{ title: 'FoodWale 🍽️'  }} component={Home} />
      <Stack.Screen name="WebPage" headerMode="none"  component={WebPage} />
    </Stack.Navigator>
  );
}