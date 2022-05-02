import { useState } from "react";
import { StyleSheet, Text, View, Image, Button ,CheckBox , TouchableOpacity } from "react-native";
import Pizza1 from "../../../assets/pizza/pizza.png" ;
import { RadioButton } from 'react-native-paper';

import Blank from "../../../assets/draft/blank_heart.png";
import Love from "../../../assets/draft/love.png";
import Icon from 'react-native-vector-icons/Entypo';

export default function Item({label , desc , image , price}) {
  
  return (
        <View style={styles.content}>
        <View style={{paddingHorizontal:7}} >
        <View style={styles.footer}>
        <Text style={styles.label}>{label}</Text>
        <Icon.Button 
        name="heart-outlined"
        size = {20}
        color = 'crimson'
        backgroundColor="white" 
        onPress = {() => alert('hi')}
        />

        {/* <Image source={Love} style = {styles.icon} /> */}
     
        </View>
        <Text style={styles.desc}>{desc}</Text>
      </View> 
    
    <Image source={image} style = {styles.image} />


    <View style={styles.footer}>
       
        <RadioButton 
            status = 'checked'
            color="red"
            value = 'Small'
            uncheckedColor="black"
        />
        <Text style = {styles.radio}>Small</Text>
        <RadioButton 
            color="red"
            value = 'Medium'
            uncheckedColor="black"
        />
         <Text style = {styles.radio}>Medium</Text>

        <RadioButton 
          color="red"
          value = 'Large'
          uncheckedColor="black"
        />
        <Text style = {styles.radio}>Large</Text>
        
         </View> 
      
      <View style = {styles.footer}>
      <Text style = {styles.label} > {price}.00 EGP </Text>
      <View style={styles.button}>
        <Button title="    + Add    " color = "crimson" />
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
    borderRadius: 10,
    overflow: "hidden",
  },

  footer : {
    alignItems : 'center',
    marginTop:15,
    flexDirection: "row",
  },
  
  radio :{
    width : '25%'
  }
});

