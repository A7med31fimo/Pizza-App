import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  CheckBox,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Blank from "../../../assets/draft/blank_heart.png";
import * as ImagePicker from 'expo-image-picker';
import Icon from "react-native-vector-icons/Entypo";
import {
  AddItemsCards,
  getCardItems,
  subscribe,
} from "../../../db/Edit/CartItems";
import { auth } from "../../../db/Config";
import { deleteItemscake, editcake } from "../../../db/Edit/CakesEdit";
import { deleteItemsDeals, editdeal } from "../../../db/Edit/DealEdit";
import {
  deleteFavItems,
  getFavItems,
  AddFavItems,
} from "../../../db/Edit/FavEdit";
export default function Item({
  str,
  ID,
  label,
  desc,
  image,
  price,
  fu1,
  fu2,
  fu3,
}) {
  const count = fu3(label);
  const [icon, seticon] = useState("heart-outlined");
  const [number, setnumber] = useState(count);
  const [edit, setEdit] = useState(undefined);
  const [label1, setlabel1] = useState(label);
  const [desc1, setdesc1] = useState(desc);
  const [photo1, setphoto1] = useState(image);
  const [pric, setprice] = useState(price);

  const getFavlist = async () => {
    const c = await getFavItems();

    for (let i = 0; i < c.length; i++) {
      if (c[i].label === label) {
        seticon("heart");
        break;
      }
    }
  };

  useEffect(() => {
    getFavlist();
  }, []);

  const dislike = async () => {
    const c = await getFavItems();

    for (let i = 0; i < c.length; i++) {
      if (c[i].label === label) {
        deleteFavItems(c[i].id);
        break;
      }
    }
  };

  const handleRemove = () => {
    str === "deal" ? deleteItemsDeals(ID) : deleteItemscake(ID);
  };

  const clickHeart = () => {
    if (icon === "heart-outlined") {
      AddFavItems({ label, image, desc });
      seticon("heart");
    } else {
      dislike();
      seticon("heart-outlined");
    }
  };


  const size = "";
  const plusHandler = () => {
    setnumber(number + 1);

    fu1(label, image, price, size);
  };

  const minusHandler = () => {
    setnumber(number - 1);
    fu2(label, size);
  };


  const selectFile = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result)
      setphoto1(result.uri)
    
    }

  }
  return edit ? (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.body}>
          <View style={styles.inps}>
            <Text style={styles.text2}>Label</Text>
            <TextInput
              style={styles.inp}
              defaultValue={label1}
              placeholder={"label"}
              onChangeText={setlabel1}
            />
            <Text style={styles.text2}>Description</Text>
            <TextInput
              style={styles.inp}
              defaultValue={desc1}
              placeholder={"dec"}
              onChangeText={setdesc1}
            />
           <View style={styles.btn}>
            <Button title="select photo" onPress={selectFile}
          color="#FB081F" />
          </View>
            <Text style={styles.text2}>Price</Text>
            <TextInput
              style={styles.inp}
              defaultValue={price+""}
              placeholder={"price"}
              onChangeText={setprice}
            />
            <View
              style={{
                width: "99%",
                borderRadius: 15,
                overflow: "hidden",
                marginVertical: 20,
              }}
            >
              <Button
                onPress={() => {
                  if (
                    label1.length === 0 ||
                    desc1.length === 0 ||
                    pric.length === 0
                  )
                    alert("Invalid Details");
                  else {
                    if (str === "deal") {
                      editdeal({
                        id: ID,
                        desc: desc1,
                        image: photo1,
                        label: label1,
                        price: pric,
                      })
                        .then(() => {
                          alert("Product updated");
                          setEdit(undefined);
                        })
                        .catch((e) => console.log("error", e));
                    } else {
                      editcake({
                        id: ID,
                        desc: desc1,
                        image: photo1,
                        label: label1,
                        price: pric,
                      })
                        .then(() => {
                          alert("Product updated");
                          setEdit(undefined);
                        })
                        .catch((e) => console.log("error", e));
                    }
                  }
                }}
                title="Save"
                color="#FB081F"
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.content}>
      <View style={{ paddingHorizontal: 7 }}>
        <View style={styles.footer}>
          <Text style={styles.label}>{label}</Text>
          {auth.currentUser.displayName === "admin" ? (
            <Icon
              name="circle-with-minus"
              size={20}
              color="crimson"
              onPress={handleRemove}
            />
          ) : (
            <Icon name={icon} size={20} color="crimson" onPress={clickHeart} />
          )}
        </View>
        <Text style={styles.desc}>{desc} </Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />

      {auth.currentUser.displayName !== "admin" ? (
        <View style={styles.footer}>
          <Text style={styles.price}> {price}.00 EGP </Text>
          {number === 0 ? (
            <View style={styles.button}>
              <Button title="+ add" color="crimson" onPress={plusHandler} />
            </View>
          ) : number === 1 ? (
            <View style={styles.footer}>
              <Icon
                name="trash"
                size={25}
                color="grey"
                onPress={minusHandler}
              />
              <Text style={styles.number}>{number}</Text>
              <Icon
                name="plus"
                size={25}
                color="crimson"
                onPress={plusHandler}
              />
            </View>
          ) : (
            <View style={styles.footer}>
              <Icon
                name="minus"
                size={25}
                color="grey"
                onPress={minusHandler}
              />
              <Text style={styles.number}>{number}</Text>
              <Icon
                name="plus"
                size={25}
                color="crimson"
                onPress={plusHandler}
              />
            </View>
          )}
        </View>
      ) : (
        <View>
          <View style={styles.footer}>
            <Text style={styles.price}> {price}.00 EGP </Text>
            <View style={styles.button}>
              <Button
                title="Edit"
                color="crimson"
                onPress={() => {
                  setEdit("go");
                }}
              />
            </View>
          </View>
        </View>
      )}
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
    marginBottom: 20,
  },
  inps: {
    marginHorizontal: 15,
  },
  inp: {
    width: "99%",
    height: 40,
    borderWidth: 2,
    borderColor: "#FB081F",
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 20,
    fontStyle: "italic",
    padding: 6,
    color: "#000000",
  },
  body: {
    paddingTop: 10,
    margin: 10,
    backgroundColor: "#FFFFFF",
    width: "99%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text2: {
    textAlign: "left",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  image: {
    width: "99%",
    height: 180,
  },
  label: {
    width: "90%",
    fontSize: 16,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 12,
    paddingBottom: 10,
    paddingTop: 5,
  },
  price: {
    width: "75%",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    width: "25%",
    borderRadius: 10,
    overflow: "hidden",
  },
  footer: {
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  number: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f7eceb",
    fontSize: 16,
    paddingHorizontal: 12,
  }, btn: {
    marginVertical: 5,
    width: "90%",
    borderRadius: 15,
    overflow: "hidden",
  }
});
