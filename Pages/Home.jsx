import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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

const Home = () => {
  let [fontsloaded, error] = useFonts({
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
  });
  if (!fontsloaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground source={require("../assets/iponcuy.png")} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.judul}>Yo fellas!</Text>
        <Text style={styles.looking}>Looking for something cool?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    marginTop: 550,
    justifyContent: "center",
    alignItems: "center",
  },
  judul: {
    fontSize: 60,
    color: "#FFF",

    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 0.1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },

    fontFamily: "Poppins_500Medium_Italic",
  },
  textAlign: "center",
  fontSize: 50,
  fontWeight: "bold",
  color: "white",
  textShadowColor: "black",

  button: {
    backgroundColor: "#553434",
    padding: 12,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 18,
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins_400Regular",
    fontSize: 17,
  },

  container: {
    flex: 1,
  },
  looking: {
    fontSize: 17,
    color: "#FFF",
    padding: 10,
    fontFamily: "Poppins_400Regular",
  },
});
