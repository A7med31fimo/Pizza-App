import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { login } from "../../db/auth/auth";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../db/Config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import logo from "../../assets/FirstPage/logo.png";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoback}>
          <Image
            style={styles.logo}
            source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.inps}>
            <TextInput
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.inp}
              placeholder="Email@Example.com"
            ></TextInput>
            <TextInput
              onChangeText={setpassword}
              keyboardType="visible-password"
              secureTextEntry={true}
              style={styles.inp}
              placeholder="Password"
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
              <Button 
              onPress={() => {
                navigation.navigate("Register");
              }}
              title="Sign up" color="#FB081F"></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoback: {
    alignItems: "center",
    backgroundColor: "#e73636",
  },
  logo: {
    width: 400,
    height: 400,
    marginTop: -60,
    marginBottom: -20,
  },
  inps: {
    alignItems: "center",
    marginTop: 30,
  },
  inp: {
    width: "90%",
    height: 40,
    borderWidth: 2,
    borderColor: "#FB081F",
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 20,
    fontStyle: "italic",
    padding: 6,
    color: "#000000",
  },
  foot: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
  },
  ORtxt: {
    textAlign: "center",
    fontSize: 30,
    color: "#000000",
    marginVertical: 10,
  },
  btn: {
    width: "90%",
    borderRadius: 15,
    overflow: "hidden",
  },
});
