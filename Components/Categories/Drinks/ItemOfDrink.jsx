
 //AddItemsCards({ Name: label, Number: smallNumber+1, Price: pric  , Image : image , Size : size});
import { StyleSheet, Text, View, Image ,Button } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { useState,useEffect } from "react";
import { RadioButton } from "react-native-paper"
import { AddItemsCards, getCardItems} from "../../../db/Edit/CartItems"
import {deleteItemsDrinks } from  "../../../db/Edit/DrinksEdit"
import { deleteFavItems , getFavItems ,AddFavItems} from "../../../db/Edit/FavEdit"
import { auth } from "../../../db/Config";
import { async } from "@firebase/util";
export default function Item({ ID,image, label, price  , fu1 , fu2 , fu3 , fu4}) {
  // let x = 0 , y = 0 ;
    const getFavlist = async () => {
      
      const c = await getFavItems();

      for (let i = 0 ; i< c.length ; i++){
        if(c[i].label === label ){
            seticon("heart");
            break; 
        }
      }

    };
   
    useEffect(() => {
      getFavlist();
    }, []);

    const count = fu3(label);
  const [icon , seticon] = useState("heart-outlined");
  const [small ,setsmall] = useState('checked');
  const [large ,setlarge] = useState('unchecked');
  const [pric , setprice] = useState(price);
  const [number , setnumber] = useState(count);
  const [size ,setsize] = useState('330 ml');
  // const [smallNumber , setsmallNumber] = useState(0);
  // const [largeNumber , setlargeNumber] = useState(0);
  // const [Data, setData] = useState([]);
  const [user, setuser] = useState("");
    


  const dislike = async() => {
    const c = await getFavItems();

    for (let i = 0 ; i< c.length ; i++){
      if(c[i].label === label ){
      deleteFavItems(c[i].id);
       break; 
      }
    }


  }
 const handleRemove=()=>{
  deleteItemsDrinks(ID);
}



  const clickHeart = () => {
    if (icon === "heart-outlined"){
      seticon('heart');
      AddFavItems({label , image , desc : ""});
    }
  
    else {
      dislike();
      seticon("heart-outlined");
  }
    }
    

  const clicksmall = () => {
    if (small === "unchecked"){
    setsmall('checked');
    setlarge('unchecked');
    setprice(price)  ;
    setsize('330 ml');
    }
  }

  const clicklarge = () => {
    if (large === "unchecked"){
    setsmall('unchecked');
    setlarge('checked')
    setprice(price+7)  ;
    setsize('1 Litre');
    }
  } 


  
  // const buttonHandler = () => {
  //   if (size === '330 ml'){
  //     setsmallNumber(smallNumber+1);

  //   }
  //   else {
  //   setlargeNumber(largeNumber+1);
  //   }
  //   setnumber(number+1);
  //   fuc1(label , image , pric , size);
  // }


  const plusHandler = () => {
    // if (size === '330 ml'){
    //   setsmallNumber(smallNumber+1);
    // }
    // else {
    //   setlargeNumber(largeNumber+1);
    // }
    if(!fu4())
    setnumber(number+1);
    fu1(label , image , pric , size);
    }


  const minusHandler = () => {
    // if (size === '330 ml'){
    //   setsmallNumber(smallNumber-1);
    // }
    // else {
    //   setlargeNumber(largeNumber-1);
    // }
    setnumber(number-1);
    fu2(label , size);
   
  }

  

  return (
    <View style={styles.content}>
        
   <View style={{paddingHorizontal:7}} >
   <View style={styles.footer}>
   <Text style={styles.label}>{label}</Text>
  
  {
 
  user==="admin"?
  <Icon
        name='circle-with-minus'
        size = {20}
        color = 'crimson'
        onPress = {handleRemove}
        /> :
        
        <Icon
        name={icon}
        size = {20}
        color = 'crimson'
        onPress = {clickHeart}
        />

}
   </View>
 </View> 
 <Image source={{uri: image}} style = {styles.image} />


<View style={styles.footer}>
   <RadioButton 
       status = {small}
       color="red"
       value = 'Small'
       uncheckedColor="black"
       onPress={clicksmall}
   />
   <Text style = {styles.radio}>330 ml</Text>
   <RadioButton 
    status = {large} 
       color="red"
       value = 'Large'
       uncheckedColor="black"
       onPress={clicklarge}
   />
   <Text style = {styles.radio}>1 Litre</Text>

    </View> 
 
    <View style = {styles.footer}>
<Text style = {styles.price} > {pric}.00 EGP </Text>
{number === 0 ? 
   <View style={styles.button}> 
   <Button  title = '+ add' color = "crimson" onPress={plusHandler}/>
   </View>
   : number === 1 ?
   <View style = {styles.footer}>
     
   <Icon
        name='trash'
        size = {25}
        color = 'grey'
        onPress = {minusHandler}
        
        />
      <Text style = {styles.number} >{number}</Text>
      <Icon 
        name='plus'
        size = {25}
        color = 'crimson'
        onPress = {plusHandler}
        />
      </View>
      :
      <View style = {styles.footer}>
      <Icon
      name='minus'
      size = {25}
      color = 'grey'
      onPress = {minusHandler}
      
      />
    <Text style = {styles.number} >{number}</Text>
    <Icon 
      name='plus'
      size = {25}
      color = 'crimson'
      onPress = {plusHandler}
      />
    </View>
    
 }
 </View></View>
 )
}
 
const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f7eceb",
    shadowColor: "#000", 
    shadowOffset:{ width: 2,height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  label: {
    width : "90%",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom : 10
  },
  price: {
    width : '75%',
    fontSize: 16,
    fontWeight: "bold",
    
  },
  button: {
    width : '25%',
    borderRadius: 10,
    overflow: "hidden",
  },

  footer : {
    alignItems : 'center',
    marginTop:15,
    flexDirection: "row",
  },
  number : {
    borderWidth: 1,
    borderRadius: 10,
    borderColor : "#f7eceb",
    fontSize : 16,
    paddingHorizontal : 12
  },
  
  radio :{
    width : "45%"
  }
}
)