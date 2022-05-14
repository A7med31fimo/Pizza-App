import { useState,useEffect } from "react";
import { StyleSheet, Text, View, Image, Button ,CheckBox , TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import Blank from "../../../assets/draft/blank_heart.png";
import Love from "../../../assets/draft/love.png"
import Icon from 'react-native-vector-icons/Entypo';
import {AddItemsCards,getCardItems,subscribe} from "../../../db/Edit/CartItems";
import { auth } from "../../../db/Config";
import {deleteItemscake} from  "../../../db/Edit/CakesEdit"
import {deleteItemsDeals} from  "../../../db/Edit/DealEdit"
import { deleteFavItems , getFavItems ,AddFavItems} from "../../../db/Edit/FavEdit"
export default function Item({str,ID,label , desc , image , price , fu1 , fu2 , fu3 }) {
 

  const count = fu3(label);
  const [icon , seticon] = useState("heart-outlined");
  const [number , setnumber] = useState(count);

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
    str === 'deal' ? 
    deleteItemsDeals(ID)
    : deleteItemscake(ID);
  }

  const clickHeart = () => {
    if (icon === "heart-outlined"){
      AddFavItems({label , image , desc });
      seticon('heart');
    }
    
    else {
      dislike();
      seticon("heart-outlined");
    }
    
  }

 
  const [user, setuser] = useState("");
 

  const size = "" ;
  const plusHandler = () => {
    
      setnumber(number+1);
      
    fu1(label , image , price , size);
    }

  const minusHandler = () => {
    setnumber(number-1);
    fu2(label , size); 
  }
  return (
        <View style={styles.content}>
        <View style={{paddingHorizontal:7}} >
        <View style={styles.footer}>
        <Text style={styles.label}>{label}</Text>
        { auth.currentUser.displayName==="admin"?
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
      
     {auth.currentUser.displayName!=="admin"? <View style = {styles.footer}>
<Text style = {styles.price} > {price}.00 EGP </Text>
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


</View>  :<></> 
}
   
      
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