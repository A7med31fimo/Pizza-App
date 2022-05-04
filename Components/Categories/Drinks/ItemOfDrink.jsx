import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { useState,useEffect } from "react";
import { RadioButton } from "react-native-paper"
import { AddItemsCards, getCardItems, editCard } from "../../../db/pizzaEdit/CartItems"
import firebase from '@react-native-firebase/app';
import { async } from "@firebase/util";
export default function Item({ image, label, price}) {
 
    const getCardslist = async () => {
      const c = await getCardItems();
      setCards(c);
      //console.log(c);
    };
    const [Cards, setCards] = useState([]);
    useEffect(() => {
      getCardslist();
    }, []);

    const [icon, seticon] = useState("heart-outlined");
    const [small, setsmall] = useState('checked');
    const [large, setlarge] = useState('unchecked');
    const [pric, setprice] = useState(price);
    const [count, setCount] = useState(1);
    const clickHandler = () => {
      if (icon === "heart-outlined")
        seticon('heart');
      else
        seticon("heart-outlined");
    }

    const clicksmall = () => {
      if (small === "unchecked") {
        setsmall('checked');
        setlarge('unchecked');
        setprice(price);
      }
    }


    const clicklarge = () => {
      if (large === "unchecked") {
        setsmall('unchecked');
        setlarge('checked')
        setprice(price + 7);
      }
    }
    function HandleAdd() {

    }


    return (
      <View style={styles.content}>

        <View style={{ paddingHorizontal: 7 }} >
          <View style={styles.footer}>
            <Text style={styles.label}>{label}</Text>
            <Icon.Button
              name="heart"
              size={20}
              color='crimson'
              backgroundColor="white"
              onPress={() => alert('hi')}
            />

            {/* <Image source={Love} style = {styles.icon} /> */}
          </View>
        </View>
        <Image source={{ uri: image }} style={styles.image} />


        <View style={styles.footer}>
          <RadioButton
            status='checked'
            color="red"
            value='Small'
            uncheckedColor="black"
          />
          <Text style={styles.radio}>330 ml</Text>
          <RadioButton
            color="red"
            value='Medium'
            uncheckedColor="black"
          />
          <Text style={styles.radio}>1 Litre</Text>

        </View>

        <View style={styles.footer}>
          <Text style={styles.label} > {pric}EGP </Text>
          <View style={styles.button}>
            <Button title="+ Add" color="crimson" onPress={ () => {
             // let s = 1            
              Cards.map((e) => {

                //if (e.Name === label) {   
                //   s = 2
                //   const val=e.Number;
                //   //setCount(val+ 1)
                // const  a={id:e.id,Name:e.Name,Number:e.Number+1,Price:e.Price}
                //   editCard(a)
                //     .then(() => {
                //      console.log(e)
                //     })
                //     .catch((x) => console.log(x));
                // }}
              }
              )

          //if(s==1) {  
                AddItemsCards({ Name: label, Number: 1, Price: pric })}
             //await  getCardslist();  
            }
            
             />
          </View>
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
      marginBottom: 20,
    },
    image: {
      width: 50,
      height: 80,
    },
    label: {
      width: "97%",
      fontSize: 16,
      fontWeight: "bold",
      paddingBottom: 10
    },
    button: {
      width: '30%',
      borderRadius: 10,
      overflow: "hidden",
    },

    footer: {
      alignItems: 'center',
      marginTop: 15,
      flexDirection: "row",
    },

    radio: {
      width: "50%"
    }
  });