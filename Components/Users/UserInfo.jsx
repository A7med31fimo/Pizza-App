import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { React, useState, useEffect } from "react";
import { SignOut, getUserUId } from "../../db/auth/auth";
import { getUserById, edituser, subscribe } from "../../db/Edit/Info";
const UserInfo = ({ navigation }) => {
  const [c, setc] = useState("");
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(undefined);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");


     function getUser(){
       return (getUserUId().then((uid) => {   
        getUserById(uid).then((user) => {
          setUser(user[0])
          
          setc(user[0].fName)
          setfName(user[0].fName);
          setlName(user[0].lName);
          setage(user[0].age);
          setphone(user[0].phone);
          setaddress(user[0].address);
          console.log(user[0].id)
        });
      
    }))}
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      getUser();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return edit ? (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.body}>
          <View style={styles.inps}>
            <TextInput
              style={styles.inp}
              defaultValue={fName}
              placeholder={"first name"}
              onChangeText={setfName}
            />
            <TextInput
              style={styles.inp}
              defaultValue={lName}
              placeholder={"last name"}
              onChangeText={setlName}
            />
            <TextInput
              style={styles.inp}
              defaultValue={age}
              placeholder={"age"}
              onChangeText={setage}
            />
            <TextInput
              style={styles.inp}
              defaultValue={phone}
              placeholder={"phone"}
              onChangeText={setphone}
            />
            <TextInput
              style={styles.inp}
              defaultValue={address}
              placeholder={"address"}
              onChangeText={setaddress}
            />
            <View
              style={{ width: "90%", borderRadius: 15, overflow: "hidden" }}
            >
              <Button
                onPress={() => {

                  
                 
                  
if(fName.length===0||age.length===0||phone.length===0||address.length===0|| isNaN(age)||isNaN(phone))
alert("invalid information")
else
                  edituser( {...user,     
                    fName: fName,
                    lName: lName,
                    age: age,
                    address: address,
                    phone: phone,
                  })
                    .then(() => {
                      console.log("user updated");
                      setEdit(undefined);
                    })
                    .catch((e) => console.log(e));
                }}
                title="Save"
                color="#FB081F"
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.square}>
            <Text style={styles.texticon}>{c.charAt(0).toUpperCase()}</Text>
          </View>
          <View style={styles.Nameview}>
            <Text style={styles.Name}>
              {user.fName} {user.lName}
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.textView}>
            <Text style={styles.text}>Email:</Text>
            <Text style={styles.textVal}>{user.email}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>Number:</Text>
            <Text style={styles.textVal}>{user.phone}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>Address:</Text>
            <Text style={styles.textVal}>{user.address}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>Age:</Text>
            <Text style={styles.textVal}>{user.age}</Text>
          </View>

          <View style={styles.btns}>
            <View style={styles.btn}>
              <Button
                onPress={() => {
                  setEdit("go");
                }}
                title="Edit Info"
                color="#FB081F"
              ></Button>
            </View>
            <View style={{ padding: 5 }}></View>

            <View style={styles.btn}>
              <Button
                onPress={() => {
                  navigation.navigate("Home");
                }}
                title="Home"
                color="#FB081F"
              ></Button>
            </View>
            {/* <Text style={styles.ORtxt}>OR</Text> */}
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
      </ScrollView>
    </View>
  );
};
export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    margin: 10,
    // alignItems: "center",
    // marginTop: 30,
    // marginBottom: 40,
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
    margin: 10,
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
