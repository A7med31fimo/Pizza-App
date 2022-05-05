import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Deal from "../cake/ItemOfCake"
import {getItemDeals} from "../../../db/Edit/DealEdit";
import {AddItemsCards} from "../../../db/Edit/CartItems";
 export default function Deals() {
    const getItemlist = async () => {
      const c = await getItemDeals();
      setItem(c);
    };
  
    useEffect(() => {
      getItemlist();
    }, []);
  
    const [Items, setItem] = useState([]);
  //   const deal_arr = [
  //   { label: "Family Meal", desc: "2 Medium BBQ Checken pizza + 1 Liter Pepsi "  
  //   , image: Deal1 , price : '250' },
  //   { label: "Hut Saver Pan Offer", desc: "1 Medium Chicken Superme pizza + 1 Medium Classic peppperoni"  
  //   , image: Deal3 , price : '285' }, 
  //   { label: "Hut Saver Stuffed Crust Offer", desc: "1 Medium Chesse Stuffed Crust pizza + 1 Medium Beef & Cheddar Stuffed Crust + 1 liter Pepsi"  
  //   , image: Deal4 , price : '256' }, 
  //   { label: "Solo Meal", desc: "1 Medium pizza + potato wedges + Duetto Salad"  
  //   , image: Deal5 , price : '115' }, 
  // ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {Items.map((e , index) => (
          <Deal key = {index} label={e.label} desc={e.desc} image={e.image} price = {e.price} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

});

