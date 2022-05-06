import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PokedexNavigation from "./PokedexNavigation";




const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
  <Image
  source={require("../assets/pokeball.png")}
  style={{width: 70, height:  70, top: -15}} 
  />
  );
}
