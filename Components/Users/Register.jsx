import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import { register } from "../../db/auth/auth";
import { Addusers } from "../../db/Edit/Info";
import { getUserUId } from "../../db/auth/auth";
import { auth } from "../../db/Config";
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
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
              style={styles.inp}
              placeholder="First Name"
              onChangeText={setfName}
            ></TextInput>
            <TextInput
              style={styles.inp}
              placeholder="last Name"
              onChangeText={setlName}
            ></TextInput>
            <TextInput
              style={styles.inp}
              placeholder="phone"
              onChangeText={setphone}
            ></TextInput>
            <TextInput
              style={styles.inp}
              placeholder="age"
              onChangeText={setage}
            ></TextInput>
            <TextInput
              style={styles.inp}
              placeholder="address"
              onChangeText={setaddress}
            ></TextInput>
            <TextInput
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.inp}
              placeholder="Email@Example.com"
            ></TextInput>
            {/* <TextInput style={styles.inp} placeholder="Phone"></TextInput>
            <TextInput style={styles.inp} placeholder="Addres"></TextInput> */}
            <TextInput
              placeholder="password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry
              onChangeText={(text) => setpassword(text)}
              style={styles.inp}
            ></TextInput>
            <View style={styles.btn}>
              <Button
                title="Register"
                onPress={() => {
                  {
                    if(fName.length===0||age.length===0||phone.length===0||address.length===0||
                       isNaN(age)||isNaN(phone)||!email.includes("@")||!email.includes(".com")||
                       password.length===0  
                       )
                    alert("invalid information")
                    else
                    register(email, password, fName)
                      .then(() => {
                        console.log("registerd");
                        if (auth.currentUser.displayName === "preAdmin")
                          navigation.navigate("PreAdmin");
                        else {
                          alert("Register Success!\nPlease Login");
                          navigation.navigate("Log In");
                        }

                        getUserUId().then((id) => {
                          Addusers({
                            uid: id,
                            fName: fName,
                            lName: lName,
                            phone: phone,
                            age: age,
                            email: email,
                            address: address,
                            password: password,
                          });
                        });
                      })
                      .catch((err) => {
                        {
                          setError(err.message);
                          if (
                            err.message.includes("invalid-email") &&
                            fName === "" &&
                            lName === "" &&
                            phone === "" &&
                            age === "" &&
                            email === "" &&
                            address === "" &&
                            password === ""
                          ) {
                            setError("Please enter your data");
                            alert("Please enter your data");
                          } else if (
                            err.message.includes("already-in-use") &&
                            email !== "" &&
                            password !== ""
                          ) {
                            setError("The email is already exist");
                            alert("The email is already exist");
                          } else if (
                            err.message.includes("weak-password") &&
                            password.length < 8
                          ) {
                            setError(
                              "Password should includes at least 6 characters"
                            );
                            alert(
                              "Password should includes at least 6 characters"
                            );
                          } else if (
                            err.message.includes("invalid-email") &&
                            email !== ""
                          ) {
                            setError("The Email is incorrect");
                            alert("The Email is incorrect");
                          }
                        }
                      });
                  }
                }}
                color="#FB081F"
              ></Button>
            </View>
          </View>
          <Text style={styles.errortxt}>{error}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

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
    height: 380,
    marginTop: -80,
    marginBottom: -40,
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
    marginBottom: 15,
    fontSize: 20,
    fontStyle: "italic",
    padding: 6,
    color: "#000000",
  },
  errortxt: {
    marginLeft: 10,
    color: "red",
    fontSize: 15,
    textAlign: "left",
    marginBottom: 30,
  },
  btn: {
    width: "90%",
    borderRadius: 15,
    overflow: "hidden",
  },
});
