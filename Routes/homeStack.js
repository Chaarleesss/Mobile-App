import React from "react";
import { createStackNavigator } from "@react-navigation-stack";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" components={Home} />
    </Stack.Navigator>
  );
};
