import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MainPages from "./Pages/MainPages";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PagesApp from "./Pages/PagesApp";
import PagesWeb from "./Pages/PagesWeb";
import PagesDesign from "./Pages/PagesDesign";

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="MainPages" component={MainPages} options={{ headerShown: false }} />
        <Stack.Screen name="PagesApp" component={PagesApp} options={{ headerShown: false }} />
        <Stack.Screen name="PagesWeb" component={PagesWeb} options={{ headerShown: false }} />
        <Stack.Screen name="PagesDesign" component={PagesDesign} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
