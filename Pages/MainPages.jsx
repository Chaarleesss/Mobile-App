import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, LinearGradient, Image, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BiSearch } from "react-icons/bs";

function MainPages() {
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={require("../assets/charles.jpg")} />
      <Text style={styles.welcome}>Welcome back Charles!</Text>

      <Text style={styles.explore}>Explore the Rpl’s leading{"\n"}design portfolios</Text>
      <View style={styles.bar}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput style={styles.search} placeholder="Web Design, Design Graphic"></TextInput>
      </View>
    </View>
  );
}

export default MainPages;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 70,
    borderRadius: 30,
  },
  welcome: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: "solid",
    color: "#5E5E5E",
  },
  explore: {
    margin: "auto",
    fontSize: 25,
    marginLeft: 20,
    alignItems: "flex-start",
    flexDirection: "row",
    display: "flex",
    fontWeight: "700",
    marginTop: 10,
  },
  search: {
    alignItems: "center",
    justifyContent: "center",

    paddingLeft: 20,
  },
  bar: {
    marginTop: 20,
    width: 330,
    flexDirection: "row",
    marginLeft: 15,
    borderWidth: 10,
    borderColor: "#EEEEEE",
    borderRadius: 10,
    backgroundColor: "#EEEEEE",
  },
});
