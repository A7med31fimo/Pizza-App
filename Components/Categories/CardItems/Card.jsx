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
  deleteItemsCards,
  editCard,
  getCardItems,
  subscribe,
} from "../../../db/Edit/CartItems";

import Carditem from "./ItemOfCard";

import { getUserById } from "../../../db/Edit/Info";
import { useEffect, useState } from "react";

import { auth } from "../../../db/Config";
import { addConversation } from "../../../db/Edit/chat";
export default function Cart({ fuc1, fuc2, fuc3 }) {
  const getCardslist = async () => {
    const c = await getCardItems();
    getUserById(auth.currentUser.uid).then((user) => {
      setphone(user[0].phone);
      setaddress(user[0].address);
    });
    let sum = 0.0;
    function compare(a, b) {
      if (a.label < b.label) {
        return -1;
      } else if (a.label > b.label) {
        return 1;
      } else {
        if (a.size < b.size) return -1;
        else if (a.size > b.size) return 1;
        else return 0;
      }
    }

    c.sort(compare);

    let x = 0;
    let count = 1;
    c.map((a) => {
      if (x == 0) x = a;
      else {
        if (a.label === x.label && a.size === x.size) {
          count++;
          editCard({
            id: a.id,
            label: a.label,
            number: count,
            price: a.price * count,
            size: a.size,
            image: a.image,
          });
          deleteItemsCards(x.id);
        } else count = 1;

        x = a;
      }
    });

    let s = 0;
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
  const [address, setaddress] = useState("");
  const [comment, setcomment] = useState("");
  useEffect(() => {
    getCardslist();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      getCardslist();
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={styles.container}>
      {total == 0 ? (
        <View>
          <View style={styles.logoview}>
            <Image
              style={styles.logo}
              source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
            />
          </View>
          <Text style={styles.text1}>Your Cart looks empty!</Text>
          <Text style={styles.text2}>Please add some item from the menu.</Text>
          <View style={styles.btnview}>
            <Button
              style={styles.btn}
              title="Explore Menu"
              color="#FB081F"
              onPress={fuc2}
            />
          </View>
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          {Cards.map((a, index) => (
            <View key={index} style={styles.container}>
              <Carditem
                id={a.id}
                label={a.label}
                price={a.price}
                size={a.size}
                image={a.image}
                number={a.number}
                fu1={fuc1}
              />
            </View>
          ))}
          <Text style={styles.texttotal}>Total Cost {total}</Text>
          {/* <View style={styles.inps}>
            <TextInput
              placeholder="Enter your Phone"
              defaultValue={phone}
              onChangeText={(text) => setphone(text)}
              style={styles.inp}
            ></TextInput>
            <TextInput
              placeholder="Enter your Address"
              defaultValue={address}
              onChangeText={(text) => setaddress(text)}
              style={styles.inp}
            ></TextInput>
            <TextInput
              placeholder="Enter your comment"
              onChangeText={(text) => setcomment(text)}
              style={styles.inp}
            ></TextInput>
          </View> */}
          <View style={styles.Confirmbtnview}>
            <Button
              style={styles.Confirmbtn}
              title="Confirm"
              color="#FB081F"
              onPress={fuc3}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoview: {
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
  },
  inps: {
    alignItems: "center",
    marginTop: 30,
  },
  inp: {
    width: "90%",
    height: 35,
    borderWidth: 2,
    borderColor: "#FB081F",
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 20,
    fontStyle: "italic",
    padding: 6,
    color: "#000000",
  },
  text1: {
    marginTop: -40,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginVertical: 10,
  },
  text2: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
    marginBottom: 20,
  },
  texticon: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnview: {
    marginTop: -5,
    margin: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {
    width: "50%",
  },
  texttotal: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  Confirmbtnview: {
    marginTop: 20,
    margin: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
});

//   async () => {
//   const name =
//     (await auth.currentUser) != null
//       ? auth.currentUser.email.split("@")[0]
//       : "guest";
//   let status = "In kitchen";
//   // if (phone !== "" && address !== "") {
//   await addConversation(
//     name,
//     total,
//     numberOfItems,
//     status,
//     Cards,
//     phone,
//     address,
//     comment
//   );
//   fuc3();
//   // } else {
//   // alert("Please Confirm your details");
//   // }
// }
