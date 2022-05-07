import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import {
  deleteItemsCards,
  editCard,
  getCardItems,subscribe
} from "../../../db/Edit/CartItems";
import Icon from "react-native-vector-icons/Entypo";
import Carditem from "./ItemOfCard";

import { useEffect, useState } from "react";
export default function Cart({ navigation }) {
  const getCardslist = async () => {
    const c = await getCardItems();
   
    let sum = 0.0;
    function compare(a, b) {
      if (a.Name < b.Name) {
        return -1;
      }
      if (a.Name > b.Name) {
        return 1;
      }
      return 0;
    }

    c.sort(compare);
   
    // let x=0;
    // c.map((a)=>{
    //    if(x==0)
    //    x=a;
    //   else{
    //      if(a.Name==x.Name && a.Size === x.Size)
    //    {
    //      editCard({id:a.id, Name: a.Name, Number:( x.Number+1), Price: a.Price + x.Price , Size : a.Size , Image : a.Image})
    //      deleteItemsCards(x.id)      
    //   }
    //    x=a
    //   }
    // })


    const scan = ()=> {
      for (let i = 0 ; i < c.length ; i++){
        for (let j = i+1 ; j< c.length ; j++){
          if(c[i].Name === c[j].Name && c[i].Size === c[j].Size){
            editCard({id:c[i].id, Name: c[i].Name, Number:( c[i].Number+1), Price: c[i].Price + c[j].Price , Size : c[i].Size , Image : c[i].Image});
            deleteItemsCards(c[j].id) ; 
          }
        }
      }
      return c ;
    }

    c.map((a) => {
      sum = sum + parseInt(a.Price);
    });
    setCards(scan);

    settotal(sum);
  };
  const [Cards, setCards] = useState([]);
  const [total, settotal] = useState(0);
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
              onPress={() => {
                navigation.navigate("FirstPage");
              }}
            />
          </View>
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          {Cards.map((a, index) => (
            <View key={index} style={styles.container}>
              <Carditem id = {a.id} label = {a.Name} price = {a.Price} size = {a.Size} image = {a.Image} number ={a.Number}/>
            </View>
          ))}
          <Text style={styles.texttotal}>Total Cost {total}</Text>
          <View style={styles.Confirmbtnview}>
            <Button
              style={styles.Confirmbtn}
              title="Confirm"
              color="#FB081F"
            ></Button>
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
