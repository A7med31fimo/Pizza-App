import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { getUserById } from "../../../db/Edit/Info";
import { useEffect, useState } from "react";
import { auth } from "../../../db/Config";
import { addConversation } from "../../../db/Edit/chat";
import {
  deleteItemsCards,
  editCard,
  getCardItems,
  subscribe,
} from "../../../db/Edit/CartItems";

export default function CheckOut({ fuc1 }) {
  const getCardslist = async () => {
    const c = await getCardItems();
    getUserById(auth.currentUser.uid).then((user) => {
      setphone(user[0].phone);
      setaddress(user[0].address);
    });
    const name =
      (await auth.currentUser) != null
        ? auth.currentUser.email.split("@")[0]
        : "guest";
    setName(name);
    let s = 0,
      sum = 0;
    c.map((a) => {
      sum = sum + parseInt(a.price);
      s += a.number;
    });
    setCards(c);
    setItems(s);
    settotal(sum);
  };
  const [Cards, setCards] = useState([]);
  const [total, settotal] = useState(0);
  const [numberOfItems, setItems] = useState(0);
  const [phone, setphone] = useState("");
  const [Name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [comment, setcomment] = useState("No Comment");
  const [time, setTime] = useState(null);
  useEffect(() => {
    getCardslist();
    let time = getCurrentTime();
    setTime(time);
  }, []);
  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return (
      year +
      "-" +
      month +
      "-" +
      day +
      ": " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  };
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.Confirmtxt}> Confirm your details </Text>
          <View style={styles.inps}>
            <Text style={styles.text2}> Name </Text>
            <TextInput
              placeholder="Enter your Name"
              defaultValue={Name}
              onChangeText={(text) => setName(text)}
              style={styles.inp}
            ></TextInput>
            <Text style={styles.text2}> Phone </Text>
            <TextInput
              placeholder="Enter your Phone"
              defaultValue={phone}
              onChangeText={(text) => setphone(text)}
              style={styles.inp}
            ></TextInput>
            <Text style={styles.text2}>Address </Text>
            <TextInput
              placeholder="Enter your Address"
              defaultValue={address}
              onChangeText={(text) => setaddress(text)}
              style={styles.inp}
            ></TextInput>
            <Text style={styles.text2}> Comment </Text>
            <TextInput
              placeholder="Enter your comment"
              onChangeText={(text) => setcomment(text)}
              style={styles.inp}
            ></TextInput>
          </View>
          <View style={styles.Confirmbtnview}>
            <Button
              title="Done"
              color="#FB081F"
              onPress={async () => {
                let status = "In kitchen";
                if (Name !== "" && phone !== "" && address !== "") {
                  await addConversation(
                    Name,
                    total,
                    numberOfItems,
                    status,
                    Cards,
                    phone,
                    address,
                    comment,
                    time
                  );
                  fuc1();
                } else {
                  alert("Please Confirm your details");
                }
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    margin: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  Confirmtxt: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
  },
  inps: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  inp: {
    alignItems: "center",
    width: "99%",
    height: 40,
    borderWidth: 2,
    borderColor: "#FB081F",
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 20,
    fontStyle: "italic",
    padding: 6,
    color: "#000000",
  },
  Confirmbtnview: {
    marginTop: 30,
    margin: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  text2: {
    textAlign: "left",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
