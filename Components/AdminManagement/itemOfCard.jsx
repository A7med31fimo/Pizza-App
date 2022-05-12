import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
//import Icon from 'react-native-vector-icons/Entypo';
// import { useState,useEffect } from "react";
//import { RadioButton } from "react-native-paper"
// import { AddItemsCards, getCardItems} from "../../../db/Edit/CartItems"
import Icon from "react-native-vector-icons/Entypo";
import { deleteItem } from "../../db/Edit/chat";
export default function Item({
  id,
  image,
  label,
  status,
  size,
  price,
  number,
}) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      {status === "Arrived" ? (
        <View style={styles.content1}>
          <View style={{ paddingHorizontal: 7 }}>
            <View style={styles.footer}>
              <Image source={{ uri: image }} style={styles.image} />
              <View style={styles.header}>
                <View style={styles.labelandicon}>
                  <Text style={styles.status1}>
                    user: {label}
                    {"\n"}status: {status}
                  </Text>
                  <View style={styles.icon}>
                    <Icon
                      name="trash"
                      size={25}
                      color="grey"
                      onPress={() => {
                        deleteItem(id);
                      }}
                    />
                  </View>
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
      ) : (
        <View style={styles.content2}>
          <View style={{ paddingHorizontal: 7 }}>
            <View style={styles.footer}>
              <Image source={{ uri: image }} style={styles.image} />
              <View style={styles.header}>
                <View style={styles.labelandicon}>
                  <Text style={styles.status2}>
                    user: {label}
                    {"\n"}status: {status}
                  </Text>
                  <View style={styles.icon}>
                    <Icon
                      name="trash"
                      size={25}
                      color="grey"
                      onPress={() => {
                        deleteItem(id);
                      }}
                    />
                  </View>
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
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content1: {
    margin: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blue",
    shadowColor: "blue",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginVertical: 10,
  },
  content2: {
    margin: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
    shadowColor: "red",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginVertical: 10,
  },
  image: {
    width: "25%",
    height: 80,
    // alignItems: "center",
  },
  header: {
    flexDirection: "column",
  },
  labelandicon: {
    flexDirection: "column",
  },
  status1: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    marginLeft: 15,
    color: "blue",
  },
  status2: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    marginLeft: 15,
    color: "red",
  },
  icon: {
    // width: "25%",
    margin: 20,
  },
  label2: {
    marginLeft: 10,
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
  price: {
    // color: "crimson",
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
