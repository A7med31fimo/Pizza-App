import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Pizzaa from "./Pizza"
import {getItemPizza,subscribe} from "../../../db/Edit/PizzaEdit";
import { auth } from "../../../db/Config";
import AddItem from"../../AdminManagement/Add"
// import Pizza1 from "../../../assets/pizza/pizza.png" ;
// import Pizza2 from "../../../assets/pizza/pizza2.png" ;
// import Pizza3 from "../../../assets/pizza/pizza3.png" ;
// import Pizza4 from "../../../assets/pizza/pizza4.png" ;
export default function Pizza({fuc1 , fuc2 , fuc3}) {
  const getItemlist = async () => {
    const c = await getItemPizza();
    setItem(c);
    if(auth.currentUser!==null)
    setuser(auth.currentUser.displayName)
  };

  useEffect(() => {
    getItemlist();
  }, []);
  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      getItemlist(); 
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const [Items, setItem] = useState([]);
  const [user, setuser] = useState("");
  // const pizza_arr = [
  //   //{ label: "BBQ Chicken Ranch", desc: "RANCH base sause with girled checken pieces , topped with mushroom slices, onions ,and topped with tasty BBQ "  
  //   //, image: Pizza1 , price : 100 },
  //   //{ label: "BBQ Chicken ", desc: "RANCH base sause with girled checken pieces ,and topped with tasty BBQ "  
  //   //, image: Pizza2 , price : 90 },
  //   //{ label: "BBQ Chicken Ranch", desc: "RANCH base sause with girled checken pieces , topped with mushroom slices, onions ,and topped with tasty BBQ "  
  //   //, image: Pizza3 , price : 170 },
  //   //{ label: "BBQ Chicken Ranch", desc: "RANCH base sause with girled checken pieces , topped with mushroom slices, onions ,and topped with tasty BBQ "  
  //   //, image: Pizza4 , price : 120 },
    
  // ];

  return (
    <View style={styles.container}>
      {
      user==="admin"?
       <AddItem name={"pizza"}/>
    :<View></View>  
    }
      <ScrollView>
        {Items.map((e , index) => (
          <Pizzaa ID={e.id} 
          key = {index} 
          label={e.label} 
          desc={e.desc} 
          image={e.image} 
          price = {e.price} 
          fu1 = {fuc1} 
          fu2 = {fuc2}
          fu3 = {fuc3} />
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