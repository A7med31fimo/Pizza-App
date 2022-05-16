import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import {
  editFeedBack,
  AddItemsFeedBack,
  getItemFeedBack,
  subscribe,
  deleteItemsFeedBack,
} from "../../db/Edit/FeedBackEdit";
import Icon from "react-native-vector-icons/Entypo";
import { useState, useEffect } from "react";
import { auth } from "../../db/Config";
// import Icon from "react-native-vector-icons/Entypo";

export default function FeedFeedBackList() {
  const getFeedBacksList = async () => {
    const c = await getItemFeedBack();
    setFeedBacks(c);
    console.log("FeedBacks", c);
    //setname(auth.currentUser.displayName);
  };
  useEffect(() => {
    getFeedBacksList();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      getFeedBacksList();
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const [name, setname] = useState([]);

  const [FeedBacks, setFeedBacks] = useState([]);

  return (
    <View style={{ flex: 1 }}>
      {FeedBacks.map((c) => (
        <View key={c.id} style={styles.FeedBacksview}>
          <Text style={styles.FeedBacks}>{c.conatnt}</Text>
          <Icon
            name="trash"
            size={25}
            color="grey"
            onPress={() => deleteItemsFeedBack(c.id)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  FeedBacksview: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginBottom: 10,
  },
  FeedBacksuser: {
    fontSize: 15,
    color: "blue",
    fontWeight: "bold",
  },
  FeedBacks: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btnview: {
    margin: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {
    width: "50%",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: "row",
    // marginHorizontal : 135 ,
    width: "90%",
  },
});
