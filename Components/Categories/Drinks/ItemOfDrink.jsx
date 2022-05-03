import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { useState } from "react";
import {RadioButton} from "react-native-paper"
export default function Item({ image, label, price }) {

  const [icon , seticon] = useState("heart-outlined");
  const [small ,setsmall] = useState('checked');
  const [large ,setlarge] = useState('unchecked');
  const [pric , setprice] = useState(price);
  
  const clickHandler = () => {
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


  const clicklarge = () => {
    if (large === "unchecked"){
    setsmall('unchecked');
    setlarge('checked')
    setprice(price+7)  ;
    }
  } 



  return (
    <View style={styles.content}>
        
   <View style={{paddingHorizontal:7}} >
   <View style={styles.footer}>
   <Text style={styles.label}>{label}</Text>
   <Icon.Button 
        name="heart"
        size = {20}
        color = 'crimson'
        backgroundColor="white" 
        onPress = {() => alert('hi')}
        />

        {/* <Image source={Love} style = {styles.icon} /> */}
   </View>
 </View> 
 <Image source={{uri: image}} style = {styles.image} />


<View style={styles.footer}>
   <RadioButton 
       status = 'checked'
       color="red"
       value = 'Small'
       uncheckedColor="black"
   />
   <Text style = {styles.radio}>330 ml</Text>
   <RadioButton 
       color="red"
       value = 'Medium'
       uncheckedColor="black"
   />
   <Text style = {styles.radio}>1 Litre</Text>

    </View> 
 
 <View style = {styles.footer}>
 <Text style = {styles.label} > {pric}EGP </Text>
 <View style={styles.button}>
   <Button title="+ Add" color = "crimson" />
 </View>
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
    width: 50,
    height: 80,
  },
  label: {
    width : "97%",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom : 10
  },
  button: {
    width : '30%',
    borderRadius: 10,
    overflow: "hidden",
  },

  footer : {
    alignItems : 'center',
    marginTop:15,
    flexDirection: "row",
  },
  
  radio :{
    width : "50%"
  }
});