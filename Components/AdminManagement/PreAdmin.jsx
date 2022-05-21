import {
  View,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { getAllChats, subscribe } from "../../db/Edit/chat";
import Item from "./itemOfCardPreAdmin";
import { SignOut } from "../../db/auth/auth";
import { StatusBar } from "expo-status-bar";

import Icon from "react-native-vector-icons/Entypo";
export default function PreAdmin({ navigation }) {
  const [chat, setchats] = useState([]);
  const [empty, setEmpty] = useState(0);
  const getChats = () => {
    getAllChats().then((data) => {
      setchats(data);
      setEmpty(data.length);
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
          />
        </View>
      </View>

      {empty === 0 ? (
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 350, height: 350 }}
              source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "400",
              marginVertical: 10,
              color: "red",
            }}
          >
            There are no orders now ...
          </Text>
          <Text
            style={{ textAlign: "center", fontSize: 20, marginVertical: 10 }}
          >
            {" "}
            have a break{" "}
          </Text>
        </View>
      ) : (
        <ScrollView>
          {chat.map((a, index) => (
            <Item
              key={index}
              id={a.id}
              numberOfItems={a.numberOfItems}
              user={a.title}
              status={a.status}
              totalCost={a.totalCost}
              phone={a.phone}
              address={a.address}
              comment={a.comment}
              Cart={a.cardslist}
              Date={a.Date}
            />
          ))}
        </ScrollView>
      )}
      <StatusBar style="auto" />
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
