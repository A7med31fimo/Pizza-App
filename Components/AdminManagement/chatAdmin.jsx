import { View, Text, ScrollView, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { getAllChats, subscribe } from "../../db/Edit/chat";
import Item from "./itemOfCard";

export default function ChatAdmin({ fuc1 }) {
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
        <View style={styles.btnview}>
          <Button
            style={styles.btn}
            title="Menu"
            color="#FB081F"
            onPress={() => fuc1()}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
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
