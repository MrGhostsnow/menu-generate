import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormScreen from "./src/screens/FormScreen";
import ResultScreen from "./src/screens/ResultScren";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{ title: "Preferências" }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: "Cardápio Gerado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
