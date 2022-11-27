import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, LinearGradient, Image, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BiSearch } from "react-icons/bs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function PagesDesign({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image onPress={() => navigation.navigate("Profile")} style={styles.profile} source={require("../assets/charles.jpg")} />
          <Text onPress={() => navigation.navigate("Profile")} style={styles.welcome}>
            Welcome back Charles!
          </Text>
          <Text style={styles.explore}>Explore the Rpl’s leading{"\n"}design portfolios</Text>
          <View style={styles.bar}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput style={styles.search} placeholder="Web Design, Design Graphic"></TextInput>
          </View>
          <View style={styles.pagesTop}>
            <Text onPress={() => navigation.navigate("MainPages")} style={styles.Graphic}>
              Design Graphic
            </Text>
            <Text onPress={() => navigation.navigate("PagesApp")} style={styles.Application}>
              Application
            </Text>
            <Text onPress={() => navigation.navigate("PagesWeb")} style={styles.Web}>
              Web Design
            </Text>
            <Text onPress={() => navigation.navigate("PagesDesign")} style={styles.Design}>
              UI/UX Design
            </Text>
          </View>
          <View style={styles.MainPages}>
            <View style={styles.Main}>
              <Image style={styles.one} source={require("../assets/JuiceApp.png")} />
              <Text style={styles.onejudul}>Juiceup App</Text>
              <Text style={styles.onepembuat}>By Fathan Alfaruq</Text>
            </View>
            <View style={styles.Main}>
              <Image style={styles.one} source={require("../assets/BreakfastApp.png")} />
              <Text style={styles.onejudul}>Breakfast App</Text>
              <Text style={styles.onepembuat}>By Fathan Alfaruq</Text>
            </View>
          </View>
          <View style={styles.MainPages}>
            <View style={styles.Main}>
              <Image style={styles.one} source={require("../assets/ShakesyApp.png")} />
              <Text style={styles.onejudul}>Shakesy App</Text>
              <Text style={styles.onepembuat}>By Fathan Alfaruq</Text>
            </View>
            <View style={styles.Main}>
              <Image style={styles.one} source={require("../assets/FoodyApp.png")} />
              <Text style={styles.onejudul}>Foody App</Text>
              <Text style={styles.onepembuat}>By Fathan Alfaruq</Text>
            </View>
          </View>
          <View style={styles.MainPages}>
            <View style={styles.Main}>
              <Image style={styles.one} source={require("../assets/BurgeritApp.png")} />
              <Text style={styles.onejudul}>Burgerit App</Text>
              <Text style={styles.onepembuat}>By Fathan Alfaruq</Text>
            </View>
            <View style={styles.Main}>
              <Image style={styles.one} source={require("../assets/TravelApp.png")} />
              <Text style={styles.onejudul}>Travel App</Text>
              <Text style={styles.onepembuat}>By Fathan Alfaruq</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

export default PagesDesign;

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
  pagesTop: {
    flexDirection: "row",
    marginTop: 25,
  },
  Design: {
    marginLeft: 12,
    fontSize: 11,
    fontWeight: "bold",
    color: "#CD113B",
  },
  Web: {
    marginLeft: 12,
    fontSize: 11,
    fontWeight: "bold",
  },
  Application: {
    marginLeft: 12,
    fontSize: 11,
    fontWeight: "bold",
  },
  Graphic: {
    marginLeft: 20,
    fontSize: 11,
    fontWeight: "bold",
  },

  MainPages: {
    flexDirection: "row",
  },
  Main: {
    marginTop: 20,
    marginLeft: 15,
  },
  onejudul: {
    fontSize: 20,
    fontWeight: "bold",
  },
  onepembuat: {
    fontSize: 10,
    fontWeight: "400",
  },
});
