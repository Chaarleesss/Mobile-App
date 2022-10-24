import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import { AiOutlineUser } from "react-icons/ai";
import { AntDesign } from "@expo/vector-icons";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.content}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.userfirst}>Username</Text>
        <View style={styles.username}>
          <AntDesign name="user" size={24} color="black" styles={{}} />
          <TextInput style={styles.inputuser} placeholder="username"></TextInput>
        </View>
        <Text style={styles.userfirst}>Password</Text>
        <View style={styles.username}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput style={styles.inputuser} secureTextEntry={true} placeholder="password"></TextInput>
        </View>
        <Text style={styles.pass}>Forgot password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("MainPages")} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate("SignUp")} style={styles.acc}>
          Don't have an account?
        </Text>
        <View style={styles.img}>
          <Image source={require("../assets/gugel.png")} style={{ marginRight: 30 }} />
          <Image source={require("../assets/pesbuk.png")} />
        </View>
        <View style={styles.dot}>
          <Image source={require("../assets/Ellipse5.png")} />
          <Image source={require("../assets/Ellipse7.png")} style={{ marginRight: 10, marginLeft: 10 }} />
          <Image source={require("../assets/Ellipse6.png")} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 150,
  },
  login: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: 40,
    paddingBottom: 30,
    fontFamily: "Poppins_600SemiBold",
  },
  userfirst: {
    fontWeight: "400",
    fontSize: 20,
    letterSpacing: 0.1,
    marginLeft: 25,
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
    paddingTop: 10,
  },
  username: {
    marginLeft: 24,
    display: "flex",
    borderBottomWidth: 2,
    width: 320,
    borderColor: "black",
    margin: 10,
    flexDirection: "row",
    paddingBottom: 10,
  },
  inputuser: {
    marginLeft: 20,
  },
  pass: {
    marginLeft: "auto",
    marginRight: 50,
    marginTop: 5,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#553434",
    borderRadius: 10,
    width: 300,
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
  },
  acc: {
    textAlign: "center",
    alignSelf: "center",
    textDecorationLine: "underline",
    width: 170,
    borderColor: "black",
    marginTop: 20,
  },
  img: {
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  dot: {
    marginTop: 60,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
