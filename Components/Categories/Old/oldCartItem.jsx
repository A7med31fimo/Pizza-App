import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
  } from "react-native";
  import { useState, useEffect } from "react";
  import Icon from "react-native-vector-icons/Entypo";
  import { deleteOldCards } from "../../../db/Edit/OldCard";

  export default function Item({id,numberOfItems,totalCost,Card,time }){
  
    const x = Card;
    return (

        <View style={styles.content}>
      <View style={{paddingHorizontal:7}} >
      <View style={styles.footer}>
      <Text style={styles.label}> Date : {time} </Text>
      <Icon
        name={"trash"}
        size = {20}
        color = 'grey'
        onPress = {() => {
        deleteOldCards(id);
        console.log("delete");
    }}
        />
      </View>
      <Text> --------------------------------------- </Text>
      {x.map((e, index) => (
        <View key={index} style={styles.footer}>
      <Text style={{ fontWeight: "bold", color: "red" }}> {e.number} </Text>
      <Text style={{ fontWeight: "bold", width: "80%" }}> {e.label} </Text>
      <Text style={{ fontWeight: "bold", color: "red" }}> {e.size} </Text>
    </View>
  ))}

  <View style={styles.footer}>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 16,
        width: "50%",
        color: "blue",
        marginBottom: 10,
      }}
    > Total number : {numberOfItems} items </Text>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 16,
        color: "green",
        marginBottom: 10,
      }}
    > Total price : {totalCost}.00 EGP </Text>
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
      marginVertical: 10,
      marginHorizontal : 15 ,
    },
    image: {
      width:"97%",
      height: 180,
      // marginTop : 5 ,
      marginVertical : 10 ,
    },
    label: {
      width : "90%",
      fontSize: 16,
      fontWeight: "bold",
      //paddingBottom : 10,
    },
    desc: {
      fontSize: 12,
      
    },
   
    footer : {
      alignItems : 'center',
      marginTop:15,
      flexDirection: "row",
    },
  });



    /*
    {x.map((e, index) => (
    <View key={index} style={styles.footer}>
      <Text style={{ fontWeight: "bold", color: "red" }}>
        {" "}
        {e.number}{" "}
      </Text>
      <Text style={{ fontWeight: "bold", width: "80%" }}>
        {" "}
        {e.label}{" "}
      </Text>
      <Text style={{ fontWeight: "bold", color: "red" }}> {e.size} </Text>
    </View>
  ))}

  <View style={styles.footer}>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 16,
        width: "50%",
        color: "blue",
        marginBottom: 10,
      }}
    >
      {" "}
      Total number : {numberOfItems} items{" "}
    </Text>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 16,
        color: "green",
        marginBottom: 10,
      }}
    >
      {" "}
      Total price : {totalCost}.00 EGP{" "}
    </Text>
  </View>
</View>
*/