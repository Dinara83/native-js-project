// @ts-nocheck
import React, { useState } from "react";
import onLayoutRootView from "../../App";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [isTextInputLogin, setTextInputLogin] = useState(false);
  const [isTextInputEmail, setTextInputEmail] = useState(false);
  const [isTextInputPassword, setTextInputPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const keyBoardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/background-photo.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
            onLayout={onLayoutRootView}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: !isShowKeyBoard
                  ? //   isTextInputEmail || isTextInputPassword || isTextInputPassword
                    0
                  : 10,
              }}
            >
              <View style={styles.wrapperImgstyle}>
                <View style={styles.ellipse}>
                  <Image
                    style={styles.imgPlus}
                    source={require("../../assets/images/union.png")}
                  />
                </View>
                <Image source={require("../../assets/images/add-photo.png")} />
              </View>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация</Text>
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor:
                      isTextInputLogin == true ? `#FF6C00` : `#E8E8E8`,
                  }}
                  placeholder="Логин"
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  onFocus={() => {
                    setTextInputLogin(true);
                    setIsShowKeyBoard(true);
                  }}
                  onSubmitEditing={() => setTextInputLogin(true)}
                  onEndEditing={() => setTextInputLogin(false)}
                />
              </View>

              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    marginTop: 16,
                    borderColor:
                      isTextInputEmail == true ? `#FF6C00` : `#E8E8E8`,
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

              <View style={styles.inputContainer}>
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
                onPress={() => {
                  handleSubmit();
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.btnQwastions}
              >
                <Text style={styles.btnQW}>
                  Уже есть аккаунт?
                  <Text> Войти</Text>
                </Text>
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
    paddingTop: 60,
    height: 549,
    paddingHorizontal: 16,
  },

  wrapperImgstyle: {
    position: "absolute",
    left: 150,
    top: -65,
    width: 120,
    height: 120,
    alignContent: "center",
    backgroundColor: `#F6F6F6`,
    borderRadius: 16,
  },

  ellipse: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 100,
    top: 80,
    backgroundColor: `#FFFFFF`,
    borderWidth: 1,
    borderColor: `#FF6C00`,
    borderRadius: 100,
  },

  imgPlus: {
    position: "absolute",
    width: 16,
    height: 16,
    left: 4,
    top: 4,
  },

  header: {
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },

  headerTitle: {
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

  inputContainer: {
    position: "relative",
    color: "#1B4371",
  },

  textPassword: {
    position: "absolute",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: `#1B4371`,
    textAlign: "center",
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
  },
});

export default RegistrationScreen;
