import { StyleSheet, Text, View, Image, Button } from "react-native";
//import Icon from 'react-native-vector-icons/Entypo';
// import { useState,useEffect } from "react";
//import { RadioButton } from "react-native-paper"
// import { AddItemsCards, getCardItems} from "../../../db/Edit/CartItems"
import Icon from "react-native-vector-icons/Entypo";
import { deleteItemsCards } from "../../../db/Edit/CartItems";
export default function Item({ id, image, label, size, price, number }) {
  return (
    <View style={styles.content}>
      <View style={{ paddingHorizontal: 7 }}>
        <View style={styles.footer}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.header}>
            <View style={styles.labelandicon}>
              <Text style={styles.label}>{label}</Text>
              <Icon
                name="trash"
                size={25}
                color="grey"
                onPress={() => {
                  deleteItemsCards(id);
                }}
              />
            </View>
            <Text style={styles.label2}>{size}</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.number}>{number} Items</Text>

        <Text style={styles.price}> {price}.00 EGP </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginVertical: 10,
  },
  image: {
    width: "30%",
    height: 100,
    alignItems: "center",
  },
  header: {
    flexDirection: "column",
  },
  labelandicon: {
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 20,
  },
  label2: {
    marginLeft: 10,
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
  price: {
    color: "crimson",
    width: "25%",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  number: {
    width: "75%",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 7,
    //paddingBottom : 10
  },
  footer: {
    //alignItems : 'center',
    marginTop: 15,
    flexDirection: "row",
  },
});
{
  /* {<h4 style={{ color: "crimson" }}>{size}</h4>} */
}
