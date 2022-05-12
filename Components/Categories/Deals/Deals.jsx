import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Deal from "../cake/ItemOfCake"
import {getItemDeals,subscribe} from "../../../db/Edit/DealEdit";
import { auth } from "../../../db/Config";
import AddItem from"../../AdminManagement/Add"
 export default function Deals({fuc1 , fuc2 , fuc3}) {
    const getItemlist = async () => {
      const c = await getItemDeals();
      setItem(c);
      if(auth.currentUser!==null)
      setuser(auth.currentUser.displayName)
    };
  
    useEffect(() => {
      getItemlist();
    }, []);
  
    const [Items, setItem] = useState([]);
    const [user, setuser] = useState("");
    useEffect(() => {
      const unsubscribe = subscribe(({ change, snapshot }) => {
        getItemlist(); 
      });
      return () => {
        unsubscribe();
      };
    }, []);

  return (
    <View style={styles.container}>
          {
      user==="admin"?
       <AddItem name={"deal"}/>
    :<View></View>  
    }
      <ScrollView>
        {Items.map((e , index) => (
          <Deal str={"deal"}
           ID={e.id} 
           key = {index} 
           label={e.label}
           desc={e.desc} 
           image={e.image} 
           price = {e.price} 
           fu1 = {fuc1} 
           fu2 = {fuc2}
           fu3 = {fuc3}/>
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

