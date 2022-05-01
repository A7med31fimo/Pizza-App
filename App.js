import { onAuthStateChanged } from "firebase/auth";
import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import { auth } from "./db/Config";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Log_Sign_Home from "./Components/Log_Sign_Home";
import Drinks from "./Components/Categories/Drinks";
import { View, Text, Button } from "react-native";
import FirstPage from "./Components/FirstPage";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={FirstPage}
          options={{ title: "Pizza 🍕" }}
        />
          <Stack.Screen
          name="LogOrSign"
          component={Log_Sign_Home}
          options={{ title: "Getting Start" }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
