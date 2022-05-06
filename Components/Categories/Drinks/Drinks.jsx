import { Text,View,ScrollView,StyleSheet,TextInput,Button} from "react-native";
import { useEffect, useState } from "react";
import {
  getItemsDrinks
} from "../../../db/Edit/DrinksEdit";
import Item from "./ItemOfDrink";
import {subscribe,AddItemsDrinks} from  "../../../db/Edit/DrinksEdit"
import { auth } from "../../../db/Config";
import AddItem from "../../AdminManagement/Add"
 const Drinks = () => {
  const getDrinkslist = async () => {
    const c = await getItemsDrinks();
    setDrinks(c);
    if(auth.currentUser!==null)
    setuser(auth.currentUser.displayName)
  };

  useEffect(async() => {
    getDrinkslist();
   
  }, []);
  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      getDrinkslist(); 
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const [Drinks, setDrinks] = useState([]);
  const [user, setuser] = useState("");
 
  return (
    <View style={styles.container}>
      {
      user==="admin"?
       <AddItem name={"drink"}/>
    :<View></View>  
    }
      
        <ScrollView >
          {Drinks.map((a,index) => ( 
            <View key={index}>     
              <Item ID={a.id} image={a.ref} label={a.name} price={a.cost} />
            </View>
          ))}
        </ScrollView>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#F7F7F7",
    padding: 15,
  }
})
export default Drinks;