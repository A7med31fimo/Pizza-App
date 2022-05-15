import { View, Text, ScrollView, Button, StyleSheet , Image } from "react-native";
import { useState, useEffect } from "react";
import { getAllChats, subscribe } from "../../db/Edit/chat";
import Item from "./itemOfCard";

export default function ChatAdmin({ fuc1 }) {
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
    {
      empty === 0 ? (
        <View>
          <View style={{ alignItems: "center",}}>
            <Image
              style={{width: 350, height: 350,}}
              source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
            />
          </View>
          <Text style={{textAlign: "center", fontSize: 20,fontWeight : "400" ,marginVertical: 10 ,color : "red"}}> 
            There are no orders now ... 
            </Text>
            <Text style ={{textAlign: "center", fontSize: 20, marginVertical: 10}}> have a break </Text>
          <View style={styles.btnview}>
            <Button
              style={styles.btn}
              title="Explore Menu"
              color="#FB081F"
              onPress={() => fuc1()}
            />
          </View>
        </View>
      )   
    

      :
    
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
      }
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
