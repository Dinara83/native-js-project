import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const image = "./images/photo-bg.jpg";
  return (
    <View style={styles.container}>
      <ImageBackground source={require(image)} style={styles.image}>
        <RegistrationScreen />
        <LoginScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
