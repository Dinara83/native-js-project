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
  Image,
  ImageBackground,
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
  const [isTextInputFocused, setTextInputFocused] = useState(false);

  const image = "../images/photo-bg.jpg";

  const keyBoardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
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
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={require(image)} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{ ...styles.form, marginBottom: isShowKeyBoard ? 0 : 74 }}
            >
              <View style={styles.headerExit}>
                <Text style={styles.headerTitleExit}>Войти</Text>
              </View>

              <View>
                <TextInput
                  onFocus={() => setIsShowKeyBoard(true)}
                  style={{
                    ...styles.input,
                    marginTop: 16,
					borderColor:
					isTextInputFocused == true ? `#FF6C00` : `#E8E8E8`,
                  }}
                  placeholder="Адрес электронной почты"
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
				  onFocus={() => setTextInputFocused(true)}
                  onSubmitEditing={() => setTextInputFocused(true)}
                  onEndEditing={() => setTextInputFocused(false)}
                  keyboardType="email-address"
                />
              </View>

              <View>
                <TextInput
                  onFocus={() => setIsShowKeyBoard(true)}
                  style={{
                    ...styles.input,
                    marginTop: 16,
					borderColor:
					isTextInputFocused == true ? `#FF6C00` : `#E8E8E8`,
                  }}
                  secureTextEntry={true}
                  placeholder="Пароль"
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
				  onFocus={() => setTextInputFocused(true)}
                  onSubmitEditing={() => setTextInputFocused(true)}
                  onEndEditing={() => setTextInputFocused(false)}
                />
                <Text style={styles.textPassword}>Показать</Text>
              </View>

			  <TouchableOpacity activeOpacity={0.9} style={styles.button}>
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.9} style={styles.btnQwastions}>
                <Text style={styles.btnQW}>Нет аккаунта? Зарегистрироваться</Text>
              </TouchableOpacity>

            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 0,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
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
