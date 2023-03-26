// @ts-nocheck
import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App(isAuth) {
  const newLocalRobotoRegular = "./fonts/Roboto-Regular.ttf";
  const newLocalRobotoBold = "./fonts/Roboto-Bold.ttf";
  const newLocalRobotoMedium = "./fonts/Roboto-Medium.ttf";

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require(newLocalRobotoRegular),
    "Roboto-Bold": require(newLocalRobotoBold),
    "Roboto-Medium": require(newLocalRobotoMedium),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(null);

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
