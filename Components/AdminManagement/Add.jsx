import { View, StyleSheet, TextInput, Button, ActivityIndicator } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { AddItemsDrinks } from "../../db/Edit/DrinksEdit";
import { AddItemscakes } from "../../db/Edit/CakesEdit";
import { AddItemsDeals } from "../../db/Edit/DealEdit";
import { AddItemsPizza } from "../../db/Edit/PizzaEdit";
import { storage } from "../../db/Config";

import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
export default function Add({ name }) {

  const [Price, setprice] = useState("");
  const [photo, setphoto] = useState("");
  const [Name, setName] = useState("");
  const [desc, setdesc] = useState("");
  const [loading, setloading] = useState(false)
  const selectFile = async () => {
    setloading(true)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result)
      setphoto(result.uri)
      setloading(false)
    }

  }

  return (

    <View style={styles.body}>
      <View style={styles.inps}>
        <TextInput
          style={styles.inp}
          placeholder="Name"
          onChangeText={setName}
        ></TextInput>
       

        {name != "drink" ? (
          <TextInput
            onChangeText={setdesc}
            style={styles.inp}
            placeholder="descrpition of meal"
          ></TextInput>
        ) : null}

        <TextInput
          onChangeText={setprice}
          style={styles.inp}
          placeholder="price"
        ></TextInput>
         <View style={styles.btn}>
            <Button title="select photo" onPress={selectFile}
          color="#FB081F" />
          
          </View>
        <View style={styles.btn}>

          {loading ? <ActivityIndicator
            animating={true}
            color='#bc2b78'
            size="large"
            style={styles.activityIndicator} />
            :
            <Button
              title="Add"
              onPress={() => {
                setloading(true)
                if (Name === "" || photo === "" || Price === "") {
                  alert("invalid inputs")
                } else {
                  if (name === "drink")
                    AddItemsDrinks({
                      image: photo,
                      label: Name,
                      price: parseInt(Price),
                    });

                  if (name === "cake")
                    if (desc === "")
                      alert("invalid inputs")
                    else
                      AddItemscakes({
                        desc: desc,
                        image: photo,
                        label: Name,
                        price: parseInt(Price),
                      });
                  if (desc === "")
                    alert("invalid inputs")
                  else
                    if (name === "deal")
                      AddItemsDeals({
                        desc: desc,
                        image: photo,
                        label: Name,
                        price: parseInt(Price),
                      });
                  if (name === "pizza")
                    if (desc === "")
                      alert("invalid inputs")
                    else
                      AddItemsPizza({
                        desc: desc,
                        image: photo,
                        label: Name,
                        price: parseInt(Price),
                      });
                }
                setloading(false)
              }}
              color="#FB081F"
            ></Button>

          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inps: {
    alignItems: "center",
    marginTop: 30,
  },
  inp: {
    width: "90%",
    height: 40,
    borderWidth: 2,
    borderColor: "#FB081F",
    borderRadius: 10,
    marginBottom: 30,
    fontSize: 20,
    fontStyle: "italic",
    padding: 6,
    color: "#000000",
  },
  btn: {
    marginVertical: 5,
    width: "90%",
    borderRadius: 15,
    overflow: "hidden",
  }, activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});

