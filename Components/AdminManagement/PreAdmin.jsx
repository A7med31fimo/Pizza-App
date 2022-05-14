import { View, ScrollView, Button, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { getAllChats, subscribe } from "../../db/Edit/chat";
import Item from "./itemOfCardPreAdmin";
import { SignOut } from "../../db/auth/auth";

import Icon from "react-native-vector-icons/Entypo";
export default function PreAdmin({ navigation }) {
  const [chat, setchats] = useState([]);
  const getChats = () => {
    getAllChats().then((data) => {
      setchats(data);
    });
  };
  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      getChats();
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headertext}>PreAdmin</Text>
        <View style={styles.headericon}>
          <Icon
            name="log-out"
            size={30}
            color="crimson"
            onPress={() => {
              SignOut()
                .then(() => {
                  console.log("sign out");
                  navigation.navigate("FirstPage");
                })
                .catch((err) => {
                  setError(err.message);
                });
            }}
          ></Icon>
        </View>
      </View>
      <ScrollView>
        {chat.map((a, index) => (
          <View key={index} style={{ flex: 1, padding: 10 }}>
            <Item
              id={a.id}
              number={a.numberOfItems}
              label={a.title}
              status={a.status}
              price={a.totalCost}
              size={""}
              image={
                "https://miro.medium.com/max/1080/1*4c6WJXtj5OYfq6d7ON4j0A.png"
              }
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headertext: {
    margin: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  headericon: {
    margin: 15,
  },
  btnview: {
    // marginTop: -5,
    // margin: 50,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    overflow: "hidden",
  },
  btn: {
    width: "50%",
  },
});
