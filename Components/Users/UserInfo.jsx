import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { React, useState, useEffect } from "react";
import { auth } from "../../db/Config";
import { SignOut } from "../../db/auth/auth";
const UserInfo = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  function getInfo() {
    if (auth.currentUser != null) {
      setName(auth.currentUser.displayName);
      setEmail(auth.currentUser.email);
    }
  }
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.square}>
          <Text style={styles.texticon}>{Name.charAt(0).toUpperCase()}</Text>
        </View>
        <View style={styles.Nameview}>
          <Text style={styles.Name}>{Name}</Text>
          <Icon name="edit" size={25} color="grey" />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.textView}>
          <Text style={styles.text}>Email:</Text>
          <Text style={styles.textVal}>{email}</Text>
          <Icon name="edit" size={20} color="grey" />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Number:</Text>
          <Text style={styles.textVal}>010000000</Text>
          <Icon name="edit" size={20} color="grey" />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Address:</Text>
          <Text style={styles.textVal}>Address Value</Text>
          <Icon name="edit" size={20} color="grey" />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Password:</Text>
          <Text style={styles.textVal}>********</Text>
          <Icon name="edit" size={20} color="grey" />
        </View>
        <View style={styles.btns}>
          <View style={styles.btn}>
            <Button
              onPress={() => {
                navigation.navigate("Home");
              }}
              title="Home"
              color="#FB081F"
            ></Button>
          </View>
          <Text style={styles.ORtxt}>OR</Text>
          <View style={styles.btn}>
            <Button
              onPress={() => {
                {
                  SignOut()
                    .then(() => {
                      console.log("sign out");
                      navigation.navigate("FirstPage");
                    })
                    .catch((err) => {
                      setError(err.message);
                    });
                }
              }}
              title="Log out"
              color="#FB081F"
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
};
export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  header: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#FFFFFF",
    width: "95%",
    height: 80,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
  },
  square: {
    width: 60,
    height: "100%",
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
  },
  texticon: {
    fontSize: 30,
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  Nameview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  Name: {
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    marginRight: 20,
  },
  body: {
    paddingTop: 30,
    margin: 10,
    backgroundColor: "#FFFFFF",
    width: "95%",
    height: 600,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    alignItems: "center",
    padding: 10,
    paddingBottom: 15,
  },
  text: {
    fontSize: 23,
    textAlign: "center",
    color: "#000000",
  },
  textVal: {
    fontSize: 15,
    textAlign: "center",
    color: "#000000",
  },
  ORtxt: {
    marginVertical: 5,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  btns: {
    paddingTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
