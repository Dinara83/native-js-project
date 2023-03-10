// @ts-nocheck
import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const LoginScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [isTextInputEmail, setTextInputEmail] = useState(false);
  const [isTextInputPassword, setTextInputPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const keyBoardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const newLocalRobotoRegular = "../fonts/Roboto-Regular.ttf";
  const newLocalRobotoBold = "../fonts/Roboto-Bold.ttf";
  const newLocalRobotoMedium = "../fonts/Roboto-Medium.ttf";

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

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyBoardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          onLayout={onLayoutRootView}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyBoard ? 80 : 0 }}
          >
            <View style={styles.headerExit}>
              <Text style={styles.headerTitleExit}>Войти</Text>
            </View>

            <View>
              <TextInput
                style={{
                  ...styles.input,
                  marginTop: 16,
                  borderColor: isTextInputEmail == true ? `#FF6C00` : `#E8E8E8`,
                }}
                placeholder="Адрес электронной почты"
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={() => {
                  setTextInputEmail(true);
                  setIsShowKeyBoard(true);
                }}
                onSubmitEditing={() => setTextInputEmail(true)}
                onEndEditing={() => setTextInputEmail(false)}
                keyboardType="email-address"
              />
            </View>

            <View>
              <TextInput
                style={{
                  ...styles.input,
                  marginTop: 16,
                  borderColor:
                    isTextInputPassword == true ? `#FF6C00` : `#E8E8E8`,
                }}
                secureTextEntry={showPassword}
                placeholder="Пароль"
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
                onFocus={() => {
                  setTextInputPassword(true);
                  setIsShowKeyBoard(true);
                }}
                onSubmitEditing={() => setTextInputPassword(true)}
                onEndEditing={() => setTextInputPassword(false)}
              />
              <TouchableOpacity
                style={styles.textPassword}
                onPressIn={() => setShowPassword(false)}
                onPressOut={() => setShowPassword(true)}
              >
                <Text>Показать</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.button}
              onPress={keyBoardHide}
            >
              <Text style={styles.btnTitle}>Войти</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.btnQwastions}>
              <Text style={styles.btnQW}>Нет аккаунта? Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    height: 489,
    paddingHorizontal: 16,
  },

  headerExit: {
    alignItems: "center",
    marginBottom: 32,
  },

  headerTitleExit: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontStyle: "normal",
    color: `#212121`,
    lineHeight: 35,
    letterSpacing: 0.1,
  },

  input: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: `#212121`,
    borderWidth: 1,
    borderColor: `#E8E8E8`,
    borderRadius: 8,
    height: 50,
    padding: 16,
    backgroundColor: `#F6F6F6`,
  },

  textPassword: {
    position: "absolute",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: `#1B4371`,
    top: `50%`,
    left: `75%`,
  },

  button: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    height: 51,
    marginTop: 43,
    alignItems: "center",
    backgroundColor: `#ff6c00`,
    borderRadius: 100,
  },

  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: `#FFFFFF`,
  },

  btnQwastions: {
    alignItems: "center",
    paddingTop: 16,
  },

  btnQW: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: `#1B4371`,
    paddingBottom: 0,
  },
});

export default LoginScreen;
