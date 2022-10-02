import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MainPages from "./Pages/MainPages";
import SignUp from "./Pages/SignUp";

export default function App() {
  return <MainPages />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
