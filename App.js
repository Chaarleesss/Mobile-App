import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MainPages from "./Pages/MainPages";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  return <Profile />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
