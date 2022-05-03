import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Pizzaa from "./Pizza"
import Pizza1 from "../../../assets/pizza/pizza.png" ;
import Pizza2 from "../../../assets/pizza/pizza2.png" ;
import Pizza3 from "../../../assets/pizza/pizza3.png" ;
import Pizza4 from "../../../assets/pizza/pizza4.png" ;
export default function Pizza() {

    const pizza_arr = [
    { label: "BBQ Chicken Ranch", desc: "RANCH base sause with girled checken pieces , topped with mushroom slices, onions ,and topped with tasty BBQ "  
    , image: Pizza1 , price : 100 },
    { label: "BBQ Chicken ", desc: "RANCH base sause with girled checken pieces ,and topped with tasty BBQ "  
    , image: Pizza2 , price : 90 },
    { label: "BBQ Chicken Ranch", desc: "RANCH base sause with girled checken pieces , topped with mushroom slices, onions ,and topped with tasty BBQ "  
    , image: Pizza3 , price : 170 },
    { label: "BBQ Chicken Ranch", desc: "RANCH base sause with girled checken pieces , topped with mushroom slices, onions ,and topped with tasty BBQ "  
    , image: Pizza4 , price : 120 },
    
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {pizza_arr.map((e , index) => (
          <Pizzaa key = {index} label={e.label} desc={e.desc} image={e.image} price = {e.price} />
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
