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
export default function Confirmation() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> 
        Your order is Confirmed the Dlivery will call you soon on your phone
        number and when he arrived please press arrived .
      </Text>
      <View style={styles.btns}>
        <View style={styles.btn}>
        </View>
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
