import { useState,useEffect } from "react";
import { StyleSheet, Text, View, Image, Button ,CheckBox , TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import Blank from "../../../assets/draft/blank_heart.png";
import Love from "../../../assets/draft/love.png"
import Icon from 'react-native-vector-icons/Entypo';
import {AddItemsCards,getCardItems} from "../../../db/Edit/CartItems";
import { auth } from "../../../db/Config";
import {deleteItemscake} from  "../../../db/Edit/CakesEdit"
import {deleteItemsDeals} from  "../../../db/Edit/DealEdit"
export default function Item({str,ID,label , desc , image , price}) {
  const [icon , seticon] = useState("heart-outlined");
  const [visible , setvisible] = useState(true);
  // const [trash , settrash] = useState('trash');
  const [number , setnumber] = useState(0);

  const getCardslist = async () => {
    const c = await getCardItems();
    c.map((a)=>{
      //console.log(a)
      if(a.Name===label)
      setnumber(a.Number)
    })
    if(auth.currentUser!==null)
    setuser(auth.currentUser.displayName);
  };
 
  useEffect(() => {
    getCardslist();
  }, []);
  const clickHeart = () => {
    if (icon === "heart-outlined")
    seticon('heart');
    else 
    seticon("heart-outlined");
  }

  const handleRemove=()=>{
   str==="cake"? deleteItemscake(ID):deleteItemsDeals(ID);
  }
  const [user, setuser] = useState("");
  // const buttonHandler = () => {
  //   setvisible(false);
  //   setnumber(number+1);
  //   AddItemsCards({ Name: label, Number: 1, Price: price })
  // }

  // const plusHandler = () => {
  //   setnumber(number+1);
  //   settrash('minus');
  //   AddItemsCards({ Name: label, Number: 1, Price: price })
  // }
  const plusHandler = () => {
    number ==0?AddItemsCards({ Name: label, Number: number+1, Price: price })
    :AddItemsCards({ Name: label, Number: number, Price: price })
      setnumber(number+1)
    }

  // const minusHandler = () => {
  //   setnumber(number-1);
  //   if (number === 2){
  //   settrash('trash');
  //   }
  //   if (number === 1){
  //     setvisible(true);
  //     }
  // }
  return (
        <View style={styles.content}>
        <View style={{paddingHorizontal:7}} >
        <View style={styles.footer}>
        <Text style={styles.label}>{label}</Text>
        { user==="admin"?
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
        <Text style={styles.desc}>{desc} </Text>
      </View> 
      <Image source={{uri : image}} style = {styles.image} />
      
      <View style = {styles.footer}>
<Text style = {styles.price} > {price}.00 EGP </Text>
{/* {visible ? 
   <View style={styles.button}> 
   <Button  title = '+ add' color = "crimson" onPress={buttonHandler}/>
   </View>
   :  */}
   <View style = {styles.footer}>
     
   {/* <Icon
        name={trash}
        size = {25}
        color = 'grey'
        onPress = {minusHandler}
        
        /> */}
      <Text style = {styles.number} >{number}</Text>
      <Icon 
        name='plus'
        size = {25}
        color = 'crimson'
        iconStyle={{borderRadius: 50}}
        onPress = {plusHandler}
        />
      </View>
      
 {/* } */}

</View>   

   
      
    </View>
  );
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
    width:"99%",
    height: 180,
  },
  label: {
    width : "90%",
    fontSize: 16,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 12,
    paddingBottom : 10,
    paddingTop : 5
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
});