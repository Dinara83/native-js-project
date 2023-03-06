// @ts-nocheck
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={require("./assets/images/background-photo.png")}
        style={styles.image}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "flex-end",
  },
});
