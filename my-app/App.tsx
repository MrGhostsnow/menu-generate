import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormScreen from "./src/screens/FormScreen";
import ResultScreen from "./src/screens/ResultScren";
import RecipeScreen from "./src/screens/RecipeScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={({ navigation }) => ({
            title: "Novo Cardápio",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ResultScreen")}
                style={{ marginRight: 15, paddingHorizontal: 10 }}
                accessibilityLabel="Go back to Home"
              >
                <Ionicons name="arrow-back" size={24} color="#101019" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: "Cardápio" }}
        />
        <Stack.Screen
          name="Recipe"
          component={RecipeScreen}
          options={{ title: "Receita" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
