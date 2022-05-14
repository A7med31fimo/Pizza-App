import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import {
  getAllChats,
  subscribe,
  editConversation,
} from "../../../db/Edit/chat";
import { auth } from "../../../db/Config";
import { getCardItems } from "../../../db/Edit/CartItems";
import { deleteItemsCards } from "../../../db/Edit/CartItems";
export default function Confirmation({fuc1 , fuc2}) {
  const [chat, setchats] = useState([]);
  const [card, setCard] = useState([]);
  const [id, setId] = useState();
  const getChats = async () => {
    const c = await getAllChats();
    const cards = await getCardItems();
    setCard(cards);
    setchats(c);
    const s =
      (await auth.currentUser) != null
        ? auth.currentUser.email.split("@")[0]
        : "guest";
    c.map((a) => {
      if (a.title === s) {
        setId(a.id);
        console.log(a.id);
      }
    });
  };
  useEffect(() => {
    getChats();
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}> 
        Your order is Confirmed the Dlivery will call you soon on your phone
        number and when he arrived please press arrived .
      </Text>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <Button
            title="arrived"
            // color="#FB081F"
            onPress={() => {
              let status = "Arrived";
              editConversation(id, status);
              // card.map((a) => {
              //   deleteItemsCards(a.id);
              // });
              // navigation.navigate("Card");
              
              fuc2();
              fuc1();
              
            }}
          ></Button>
        </View>
        {/* <View style={styles.btn}>
          <Button
            title="No"
            color="#FB081F"
            onPress={() => {
              editConversation(id, "No");
              alert("Sorry for Delay order will arrived soon . . .");
            }}
          ></Button>
        </View> */}
        <Text>If face any problem please call 19999</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 20,
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
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
    margin: 10,
  },
});
