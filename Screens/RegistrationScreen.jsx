import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";

const RegistrationScreen = () => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <View style={styles.registr}>
            <Text>Регистрация</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              value={text}
              onChangeText={onChangeText}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              value={text}
              onChangeText={onChangeText}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
              placeholder="Пароль"
              value={number}
              onChangeText={onChangeNumber}
            />
          </View>
          <TouchableOpacity activeOpacity={0.9} style={styles.button}>
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
	marginTop: 263,
	borderRadius: 25,
	// justifyContent: "flex-end",
	justifyContent: 'center',
	paddingBottom: 30,
  },
  form: {
    marginHorizontal: 16,
  },
  registr: {
	alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: `#E8E8E8`,
    borderRadius: 8,
    color: `#F6F6F6`,
    height: 50,
    padding: 16,
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,

    height: 51,
    marginTop: 43,
    alignItems: "center",
    backgroundColor: `#ffa500`,
    borderRadius: 100,
  },
  btnTitle: {
    color: `#f0f8ff`,
    fontSize: 16,
  },
});
export default RegistrationScreen;
