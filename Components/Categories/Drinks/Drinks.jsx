import { Text,View,ScrollView,StyleSheet,TextInput,Button} from "react-native";
import { useEffect, useState } from "react";
import { getItemsDrinks} from "../../../db/Edit/DrinksEdit";
import Item from "./ItemOfDrink";
import {subscribe,AddItemsDrinks} from  "../../../db/Edit/DrinksEdit"
import { auth } from "../../../db/Config";
import AddItem from "../../AdminManagement/Add"




const Drinks = ({fuc1 , fuc2 , fuc3}) => {

  // const getCardslist = async () => {
  //   const c = await getCardItems();
  //   setData(c);
  // };

  const getDrinkslist = async () => {
    const c = await getItemsDrinks();
    setDrinks(c);
    if(auth.currentUser!==null)
    setuser(auth.currentUser.displayName)
  };

  useEffect(async() => {
    getDrinkslist();
    //getCardslist();
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
//   const [Data , setData] = useState([]);

//   const abc  = (label , image , price , size) => {
//     setData((prevdata) => {
//       return [
//         {label , image , price , size  , number : 1 },
//         ...prevdata
//       ]
     
//     });
    
// }

// const ab = (label , size) => {

//   setData(prevTodos => {
//     let flag = true ;
//    for (let i = 0  ; i < prevTodos.length ; i++ )
   
//     if (prevTodos[i].label === label && prevTodos[i].size === size){
//       flag = false ;
//       prevTodos.splice(i , 1);
//       break  ;
//     }
  
// if (flag){
//   for (let i = 0  ; i < prevTodos.length ; i++ )
//     if (prevTodos[i].label === label ){
//       flag = false ;
//       prevTodos.splice(i , 1);
//       break ;
//     }
  
// }
//   return prevTodos ; 
// });


// }



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
              <Item ID={a.id} 
              image={a.ref} 
              label={a.name} 
              price={a.cost} 
              fu1 = {fuc1} 
              fu2 = {fuc2} 
              fu3 = {fuc3} 
             
              />

            </View>
          ))}
        </ScrollView>
      
    </View>
  )
}


// const addToCart = () => {
//   Data.map( a => 
//     AddItemsCards({Name : a.label , Number : a.number , Price : a.price , Image : a.image , Size : a.size}) 
//     )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#F7F7F7",
    padding: 15,
  }
})
export default Drinks ;