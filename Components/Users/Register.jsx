import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import { React, useState } from "react";
import { register } from "../../db/auth/auth";
import Background from "../../assets/pizza/logBack.jpg";
import logo from "../../assets/FirstPage/logo.png";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.Background}
      >
        <Image style={styles.logo} source={logo} />

        <View>
          <TextInput
            style={styles.inp}
            placeholder="Name"
            placeholderTextColor="#FFFFFF"
          ></TextInput>

          <TextInput
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.inp}
            placeholder="Email@Example.com"
            placeholderTextColor="#FFFFFF"
          ></TextInput>

          <TextInput
            style={styles.inp}
            placeholder="Phone"
            placeholderTextColor="#FFFFFF"
          ></TextInput>

          <TextInput
            style={styles.inp}
            placeholder="Addres"
            placeholderTextColor="#FFFFFF"
          ></TextInput>

          <TextInput
            onChangeText={setpassword}
            keyboardType="visible-password"
            secureTextEntry={true}
            style={styles.inp}
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
          ></TextInput>
        </View>

        <View style={styles.btn}>
          <Button
            title="Register"
            onPress={() => {
              console.log(email, password);
              register(email, password)
                .then(() => {
                  navigation.navigate("Home");
                })
                .catch((e) => setError(e.message));
            }}
            color="#FB081F"
          ></Button>
          <Text>{error}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
    marginTop: -60,
  },
  inp: {
    width: 300,
    height: 40,
    borderWidth: 2,
    borderColor: "#FB081F",
    borderRadius: 10,
    marginBottom: 30,
    fontSize: 20,
    fontStyle: "italic",
    padding: 6,
    color: "#FFFFFF",
  },
  foot: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 10,
  },
  btn: {
    marginVertical: 20,
    width: 250,
    borderRadius: 15,
    overflow: "hidden",
  },
});
