import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import { login } from "../../db/auth/auth";
// import Register from "./Register";
// import CitiesList from "../Cities/CitiesList";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../db/Config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Background from "../../assets/pizza/logBack.jpg";
import logo from "../../assets/FirstPage/logo.png";
export default function Login({ navigation }) {
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
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.inp}
            placeholder="Email@Example.com"
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

        <View style={styles.foot}>
          <View style={styles.btn}>
            <Button
              title="Log in"
              onPress={() => {
                console.log(email, password);
                login(email, password)
                  .then(() => {
                    navigation.navigate("Home");
                  })
                  .catch((e) => setError(e.message));
              }}
              color="#FB081F"
            ></Button>
            <Text>{error}</Text>
          </View>
          <Text style={styles.ORtxt}>OR</Text>
          <View style={styles.btn}>
            <Button title="Sign up" color="#FB081F"></Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

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
    marginBottom: 20,
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
    marginTop: 20,
  },
  ORtxt: {
    textAlign: "center",
    fontSize: 30,
    color: "#FFFFFF",
    marginVertical: 10,
  },
  btn: {
    width: 250,
    borderRadius: 15,
    overflow: "hidden",
  },
});
