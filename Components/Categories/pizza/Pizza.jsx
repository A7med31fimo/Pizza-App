import { useState } from "react";
import { StyleSheet, Text, View, Image, Button ,CheckBox , TouchableOpacity } from "react-native";
import Pizza1 from "../../../assets/pizza/pizza.png" ;
import { RadioButton } from 'react-native-paper';
import Blank from "../../../assets/draft/blank_heart.png";
import Love from "../../../assets/draft/love.png";


export default function Item({label , desc , image , price}) {
  
  return (
        <View style={styles.content}>
        <View style={{paddingHorizontal:7}} >
        <View style={styles.footer}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity >
        <Image source={Love} style = {styles.icon} />
        </TouchableOpacity>
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
        <Text>Small               </Text>
        <RadioButton 
            color="red"
            value = 'Medium'
            uncheckedColor="black"
        />
        <Text>Medium              </Text>

        <RadioButton 
          color="red"
          value = 'Large'
          uncheckedColor="black"
        />
        <Text> Large </Text>

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
    width: 375,
    height: 180,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 12,
    paddingBottom : 10,
    paddingTop : 5
  },
  button: {
    marginLeft:180,
    borderRadius: 10,
    overflow: "hidden",
  },

  price :{
    fontSize: 18,
    fontWeight: "bold",
  },

  footer : {
    alignItems : 'center',
    marginTop:15,
    flexDirection: "row",
  },
  icon : {
      marginLeft : 180,
      width : 30 ,
      height : 30
  },
});

