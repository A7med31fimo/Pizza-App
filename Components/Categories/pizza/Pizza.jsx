import { useState ,useEffect} from "react";
import { StyleSheet, Text, View, Image, Button , TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { auth } from "../../../db/Config";
import Icon from 'react-native-vector-icons/Entypo';
import {deleteItemsPizza}from "../../../db/Edit/PizzaEdit"
import {AddItemsCards,getCardItems} from "../../../db/Edit/CartItems";
import { deleteFavItems , getFavItems ,AddFavItems} from "../../../db/Edit/FavEdit"
export default function Item({ID,label , desc , image , price , fu1 ,fu2 , fu3 }) {

  const count = fu3(label);
  const [icon , seticon] = useState("heart-outlined");
  const [small ,setsmall] = useState('checked');
  const [medium ,setmedium] = useState('unchecked');
  const [large ,setlarge] = useState('unchecked');
  const [pric , setprice] = useState(price);
  const [size ,setsize] = useState('small');
  const [smallNumber , setsmallNumber] = useState(0);
  const [mediumNumber  , setmediumNumber ] = useState(0);
  const [largeNumber , setlargeNumber] = useState(0);
  const [number , setnumber] = useState(count);
  const [user, setuser] = useState("");
  
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

  const clicksmall = () => {
    if (small === "unchecked"){
    setsmall('checked');
    setmedium('unchecked');
    setlarge('unchecked');
    setprice(price);
    setsize('small');
    }
  }

  const clickmedium = () => {
    if (medium === "unchecked"){
    setsmall('unchecked');
    setmedium('checked');
    setlarge('unchecked');
    setprice(price+50)  ;
    setsize('medium');
    
    }
  }

  const clicklarge = () => {
    if (large === "unchecked"){
    setsmall('unchecked');
    setmedium('unchecked')
    setlarge('checked')
    setprice(price+70)  ;
    setsize('large')
    }
  }
  const handleRemove=()=>{
    deleteItemsPizza(ID);
  }

 
  const plusHandler = () => {
    
    
     setnumber(number+1);
    
    fu1(label , image , pric , size);
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
        <Text style={styles.desc}>{desc}</Text>
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
        <Text style = {styles.radio}>Small</Text>
        <RadioButton 
            status = {medium}
            color="red"
            value = 'Medium'
            uncheckedColor="black"
            onPress={clickmedium}
        />
         <Text style = {styles.radio}>Medium</Text>

        <RadioButton 
          status = {large}
          color="red"
          value = 'Large'
          uncheckedColor="black"
          onPress={clicklarge}
        />
        <Text style = {styles.radio}>Large</Text>
        
        </View> 


{auth.currentUser.displayName!=="admin"?<View style = {styles.footer}>
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
      iconStyle={{borderRadius: 50}}
      onPress = {plusHandler}
      />
    </View>
 }

</View> :<></>}  

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
    width: '99%',
    height: 180,
  },
  label: {
    width : '90%',
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    width : '75%',
    fontSize: 16,
    fontWeight: "bold",
    
  },
  desc: {
    fontSize: 12,
    paddingBottom : 10,
    paddingTop : 5
  },
  button: {
    width : '25%',
    borderRadius: 10,
    overflow: "hidden",
  },

  footer : {
    alignItems : 'center',
    marginTop:10,
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
    width : '27%'
  }
});

