import { View,ScrollView,StyleSheet} from "react-native";
import { useEffect, useState } from "react";
import {
  getphotos
} from "../../db/pizzaEdit/editPizza";
import Item from "./ItemOfDrink";

 const Drinks = () => {
  const getphotoslist = async () => {
    const c = await getphotos();
   
    setphotos(c);
    console.log("photos",c);
  };

  useEffect(() => {
    getphotoslist();
  }, []);

  const [photos, setphotos] = useState([]);
  const [photoName, setphotoName] = useState("");
  return (
    <View style={styles.container}>
      
        <ScrollView >

          {photos.map((a) => (
          
            <View key={a.id}>     
              <Item iconSrc={a.ref} text1={a.name} text2={a.cost} />
            </View>
          ))}
        </ScrollView>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 15,
  },
})
export default Drinks;