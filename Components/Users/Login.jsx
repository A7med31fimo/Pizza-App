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
              placeholder="password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry
              onChangeText={(text) => setpassword(text)}
              style={styles.inp}
            ></TextInput>
          </View>
          <View style={styles.foot}>
            <View style={styles.btn}>
              <Button
                title="Log in"
                onPress={() => {




                  
                  login(email, password)
                    .then(() => {
                      if(auth.currentUser.displayName==="preAdmin")
                      navigation.navigate("PreAdmin")
                      else
                      navigation.navigate("Home")
                      alert("Login Success!");
                    })
                    .catch((e) => {
                      setError(e.message);
                      if (
                        e.message.includes("invalid-email") &&
                        email === "" &&
                        password === ""
                      ) {
                        setError("Please enter your email and password");
                        alert("Please enter your email and password");
                      } else if (
                        e.message.includes("invalid-email") &&
                        email === ""
                      ) {
                        setError("Please enter your email");
                        alert("Please enter your email");
                      } else if (
                        e.message.includes("invalid-email") &&
                        email !== ""
                      ) {
                        setError("The Email is incorrect");
                        alert("The Email is incorrect");
                      } else if (
                        e.message.includes("internal-error") &&
                        password === ""
                      ) {
                        setError("Please enter your password");
                        alert("Please enter your password");
                      } else if (
                        e.message.includes("wrong-password") &&
                        password !== ""
                      ) {
                        setError("The password is incorrect");
                        alert("The password is incorrect");
                      } else if (
                        e.message.includes("user-not-found") &&
                        email !== "" &&
                        password !== ""
                      ) {
                        setError("The user is not exist");
                        alert("The user is not exist");
                      }
                    });
                }}
                color="#FB081F"
              ></Button>
            </View>
            <Text style={styles.errortxt}>{error}</Text>
            <Text style={styles.ORtxt}>OR</Text>
            <View style={styles.btn}>
              <Button
                onPress={() => {
                  navigation.navigate("Register");
                }}
                title="Sign up"
                color="#FB081F"
              ></Button>
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
    height: 35,
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
    marginTop: 10,
    marginBottom: 25,
  },
  errortxt: {
    marginLeft: 10,
    color: "red",
    fontSize: 15,
    textAlign: "left",
  },
  ORtxt: {
    textAlign: "center",
    fontSize: 25,
    color: "#000000",
    margin: 10,
  },
  btn: {
    alignSelf: "center",
    width: "90%",
    borderRadius: 15,
    overflow: "hidden",
  },
});
