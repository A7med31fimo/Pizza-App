import { Image, StyleSheet, Text, View, Button, TextInput } from "react-native";
import { React, useState } from "react";
import { register } from "../../db/auth/auth";
import logo from "../../assets/FirstPage/logo.png";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.logoback}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.inps}>
          <TextInput style={styles.inp} placeholder="Name"></TextInput>
          <TextInput
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.inp}
            placeholder="Email@Example.com"
          ></TextInput>
          <TextInput style={styles.inp} placeholder="Phone"></TextInput>
          <TextInput style={styles.inp} placeholder="Addres"></TextInput>
          <TextInput
            onChangeText={setpassword}
            keyboardType="visible-password"
            secureTextEntry={true}
            style={styles.inp}
            placeholder="Password"
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
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  Background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  logoback: {
    backgroundColor: "#e73636",
  },
  logo: {
    width: 400,
    height: 400,
    marginTop: -80,
    marginBottom: -40,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    color: "white",
    marginTop: -50,
  },
  inps: {
    marginTop: 30,
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
    color: "#000000",
  },
  foot: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    justifyContent: "center",
    marginVertical: 5,
    width: 300,
    borderRadius: 15,
    overflow: "hidden",
  },
});
