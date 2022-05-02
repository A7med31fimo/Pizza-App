import { useState } from "react";
import { StyleSheet, Text, View, Image, Button ,CheckBox , TouchableOpacity } from "react-native";
import Pizza1 from "../../../assets/pizza/pizza.png" ;
import { RadioButton } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Entypo';

export default function Item({label , desc , image , price}) {

  //const titleofbutton = "+ Add";
  const [icon , seticon] = useState("heart-outlined");
  const [small ,setsmall] = useState('checked');
  const [medium ,setmedium] = useState('unchecked');
  const [large ,setlarge] = useState('unchecked');
  const [pric , setprice] = useState(price);
  //const [button , setbutton] = useState(titleofbutton);
  
  const clickHandler = () => {
    if (icon === "heart-outlined")
    seticon('heart');
    else 
    seticon("heart-outlined");
  }

  const clicksmall = () => {
    if (small === "unchecked"){
    setsmall('checked');
    setmedium('unchecked');
    setlarge('unchecked');
    setprice(price)  ;
    }
  }

  const clickmedium = () => {
    if (medium === "unchecked"){
    setsmall('unchecked');
    setmedium('checked');
    setlarge('unchecked');
    setprice(price+50)  ;
    
    }
  }

  const clicklarge = () => {
    if (large === "unchecked"){
    setsmall('unchecked');
    setmedium('unchecked')
    setlarge('checked')
    setprice(price+70)  ;
    }
  }


  const buttonHandler = () => {

      console.log('add');

  }


  return (
        <View style={styles.content}>
        <View style={{paddingHorizontal:7}} >
        <View style={styles.footer}>
        <Text style={styles.label}>{label}</Text>
        <Icon.Button 
        name={icon}
        size = {20}
        color = 'crimson'
        backgroundColor="white" 
        onPress = {clickHandler}
        />

        {/* <Image source={Love} style = {styles.icon} /> */}

        </View>
        <Text style={styles.desc}>{desc}</Text>
      </View> 
    
    <Image source={image} style = {styles.image} />


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
      
      <View style = {styles.footer}>
      <Text style = {styles.label} > {pric}.00 EGP </Text>
      <View style={styles.button}>
        <Button title = "+ Add" color = "crimson" onPress={buttonHandler}/>
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
    width: '99%',
    height: 180,
  },
  label: {
    width : '97%',
    fontSize: 16,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 12,
    paddingBottom : 10,
    paddingTop : 5
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
    width : '33%'
  }
});

