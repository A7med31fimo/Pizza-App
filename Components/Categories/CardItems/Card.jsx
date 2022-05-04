import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button,ScrollView } from "react-native";
import logo from "../../../assets/FirstPage/logo.png";
import {
  AddItemsCards,deleteItemsCards,getCardItems
} from "../../../db/pizzaEdit/CartItems";
import { useEffect, useState } from "react";
export default function Cart() {
  const getCardslist = async () => {
    const c = await getCardItems();
    
    //console.log(c);
    let sum=0.0;
    function compare( a, b ) {
      if ( a.Name< b.Name ){
        return -1;
      }
      if ( a.Name > b.Name){
        return 1;
      }
      return 0;
    }
    
    c.sort( compare );
    c.map((a) => {

         sum=sum+parseInt(a.Price)
        })
    setCards(c);
    settotal(sum)
  };
  const [Cards, setCards] = useState([]); 
  const [total, settotal] = useState(0); 
  useEffect(() => {
    getCardslist();
  }, []);

  return (
    <View style={styles.container}>
      <View  style={{flex:4}}> 
      <Image style={styles.logo} source={logo} />
      </View>
      {
    total==0?    
    <View style={{alignContent:"center",justifyContent:"center",flex:12}}>
      <Text style={styles.text1}>Your Cart looks empty!</Text>
      <Text style={styles.text2}>Please add some item from the menu.</Text>
      <View style={styles.btn}>
        <Button title="Explore Menu" color="#FB081F"></Button>
      </View>
      </View>
      
    :  
    <ScrollView style={{flex:8}}>
        
        {Cards.map((a,index) => ( 
          <View key={index}>       
           
            <Text style={{fontSize:"16",fontWeight:"normal"}}>{a.Number}  {a.Name}   cost: {a.Price} </Text>
          </View>
        ))}
        <Text style={{fontSize:"16",fontWeight:"normal"}}>Total Cost {total}</Text>
        <Button title="Confirm" color="#FB081F" ></Button>
      </ScrollView> 
    }
  
        
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 350,
    height: 350,
    marginTop: -70,
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
  btn: {
    width: 250,
    borderRadius: 10,
    overflow: "hidden",
  },
});
