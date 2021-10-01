import React from "react";
import { View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import TrackerScreen from "../screens/TrackerScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome to Expense Tracker" }}
        />

        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen
          name="Tracker"
          component={TrackerScreen}
          options={{ title: "Track Your Daily Expense" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
