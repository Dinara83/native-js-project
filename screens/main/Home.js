import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTab = createBottomTabNavigator();

import PostsScreen from "./PostsScreen";

const Home = () => {
  return (
    <View style={styles.container}>
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
      ></MainTab.Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
