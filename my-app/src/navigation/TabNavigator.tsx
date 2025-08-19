import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FormScreen from "../screens/FormScreen";
import ResultScreen from "../screens/ResultScren";
import RecipeScreen from "../screens/RecipeScreen";
import { TabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Menu") {
            iconName = focused ? "restaurant" : "restaurant-outline";
          } else if (route.name === "Recipe") {
            iconName = focused ? "book" : "book-outline";
          } else {
            iconName = "help-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          paddingBottom: 5,
          paddingTop: 5,
          height: 80,
        },
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={FormScreen}
        options={{
          title: "Novo Cardápio",
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="Menu"
        component={ResultScreen}
        options={{
          title: "Cardápio",
          tabBarLabel: "Cardápio",
        }}
        initialParams={{ action: undefined, preferences: {} }}
      />
      <Tab.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{
          title: "Receita",
          tabBarLabel: "Receita",
        }}
        initialParams={{ refeicao: "", action: undefined }}
      />
    </Tab.Navigator>
  );
}
