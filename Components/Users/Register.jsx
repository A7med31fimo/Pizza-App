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
import { Addusers } from "../../db/Edit/Info"
import { getUserUId } from "../../db/auth/auth";
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
            <TextInput style={styles.inp} placeholder="First Name" onChangeText={setfName}></TextInput>
            <TextInput style={styles.inp} placeholder="last Name" onChangeText={setlName}></TextInput>
            <TextInput style={styles.inp} placeholder="phone" onChangeText={setphone}></TextInput>
            <TextInput style={styles.inp} placeholder="age" onChangeText={setage}></TextInput>
            <TextInput style={styles.inp} placeholder="address" onChangeText={setaddress}></TextInput>
            <TextInput
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.inp}
              placeholder="Email@Example.com"
            ></TextInput>
            {/* <TextInput style={styles.inp} placeholder="Phone"></TextInput>
            <TextInput style={styles.inp} placeholder="Addres"></TextInput> */}
            <TextInput
              onChangeText={setpassword}
              keyboardType="visible-password"
              secureTextEntry={true}
              style={styles.inp}
              placeholder="Password"
            ></TextInput>
            <View style={styles.btn}>
              <Button
                title="Register"
                onPress={() => {
                  {

                    // console.log(email, password,Name);
                    register(email, password, fName)
                      .then(() => {
                        console.log("registerd")
                        navigation.navigate("Home");

                        getUserUId().then((id) => {
                          Addusers({
                            id: id, fName: fName,
                            lName: lName,
                            phone: phone,
                            age: age,
                            email: email,
                            address: address,
                            password: password
                          });
                        });

                      }).catch((err) => {
                        setError(err.message)
                      });
                  }
                }}
                color="#FB081F"
              ></Button>
              <Text>{error}</Text>
            </View>
          </View>
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
    height: 400,
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
    marginBottom: 30,
    fontSize: 20,
    fontStyle: "italic",
    padding: 6,
    color: "#000000",
  },
  btn: {
    marginVertical: 5,
    width: "90%",
    borderRadius: 15,
    overflow: "hidden",
  },
});
