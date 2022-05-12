import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Cake from "./ItemOfCake";
import { getItemCakes,subscribe } from "../../../db/Edit/CakesEdit";
import { auth } from "../../../db/Config";
import AddItem from "../../AdminManagement/Add"
export default function Cakes({fuc1 , fuc2 , fuc3}) {
  const getItemlist = async () => {
    const c = await getItemCakes();
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
       <AddItem name={"cake"}/>
    
    
    :<View></View>  
    }
      <ScrollView>
        {Items.map((e, index) => (
          <Cake
            key={index}
            label={e.label}
            desc={e.desc}
            image={e.image}
            price={e.price}
            ID={e.id}
            str={"cake"}
            fu1 = {fuc1}
            fu2 = {fuc2}
            fu3 = {fuc3}
          />
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
