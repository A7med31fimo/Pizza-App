import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { useState,useEffect } from "react";
import { RadioButton } from "react-native-paper"
import { AddItemsCards, getCardItems} from "../../../db/Edit/CartItems"
export default function Item({ image, label, price}) {
 
    const getCardslist = async () => {
      const c = await getCardItems();
      setCards(c);
      //console.log(c);
    };
    const [Cards, setCards] = useState([]);
    useEffect(() => {
      getCardslist();
    }, []);
  const [icon , seticon] = useState("heart-outlined");
  const [small ,setsmall] = useState('checked');
  const [large ,setlarge] = useState('unchecked');
  const [pric , setprice] = useState(price);
  const [visible , setvisible] = useState(true);
  const [trash , settrash] = useState('trash');
  const [number , setnumber] = useState(0);
  const [count, setCount] = useState(1);
  const clickHeart = () => {
    if (icon === "heart-outlined")
    seticon('heart');
    else 
    seticon("heart-outlined");
  }

  const clicksmall = () => {
    if (small === "unchecked"){
    setsmall('checked');
    setlarge('unchecked');
    setprice(price)  ;
    }
  }

  const clickHandler = () => {
    if (icon === "heart-outlined")
      seticon('heart');
    else
      seticon("heart-outlined");
  }

  const clicklarge = () => {
    if (large === "unchecked"){
    setsmall('unchecked');
    setlarge('checked')
    setprice(price+7)  ;
    }
  } 

  const buttonHandler = () => {
    setvisible(false);
    setnumber(number+1);
    AddItemsCards({ Name: label, Number: 1, Price: pric })

  }

  const plusHandler = () => {
    setnumber(number+1);
    settrash('minus');
  }


  const minusHandler = () => {
    setnumber(number-1);
    if (number === 2){
    settrash('trash');
    }
    if (number === 1){
      setvisible(true);
      }
  }



  return (
    <View style={styles.content}>
        
   <View style={{paddingHorizontal:7}} >
   <View style={styles.footer}>
   <Text style={styles.label}>{label}</Text>
   <Icon
        name={icon}
        size = {20}
        color = 'crimson'
        onPress = {clickHeart}
        />

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
<Text style = {styles.price} > {pric} EGP </Text>
{visible ? 
   <View style={styles.button}> 
   <Button  title = '+ add' color = "crimson" onPress={buttonHandler}/>
   </View>
   : 
   <View style = {styles.footer}>
     
   <Icon
        name={trash}
        size = {25}
        color = 'grey'
        onPress = {minusHandler}
        
        />
      <Text style = {styles.number} >{number}</Text>
      <Icon 
        name='plus'
        size = {25}
        color = 'crimson'
        iconStyle={{borderRadius: 50}}
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