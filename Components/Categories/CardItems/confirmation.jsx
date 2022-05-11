import { View, Text,Button } from 'react-native'
import React from 'react'
import {useState,useEffect} from 'react'
import { getAllChats,subscribe ,editConversation} from '../../../db/Edit/chat'
import { auth } from '../../../db/Config'
import { getCardItems } from '../../../db/Edit/CartItems'
import { deleteItemsCards } from '../../../db/Edit/CartItems'
export default function confirmation ({ navigation }){
    const[chat,setchats]=useState([]);
    const[card,setCard]=useState([]);
    const[id,setId]=useState();
    const getChats =async() => {
  const c=await getAllChats()
  const cards=await getCardItems();
  setCard(cards);
  setchats(c)
  const s= await auth.currentUser!=null?auth.currentUser.email.split("@")[0]:"guest";
  c.map((a)=>{
    if(a.title===s)
       {setId(a.id);
    console.log(a.id)
    }
  })


}
    useEffect(() => {
        getChats();
      }, []);
    
  return (
    <View>
      <Text>
          The Dlivery will call you soon on your phone number 
          and when he arrived please press arrived and if not press no
      </Text>
<Text>{id}</Text>
      <Button title='arrived' onPress={()=>{
          let status="Arrived"
          editConversation(id,status)
          card.map((a)=>{deleteItemsCards(a.id)})
          navigation.navigate("Card")
              
      }} ></Button>
      <Button title='No'  onPress={()=>{
          editConversation(id,"No")
          alert("Sorry for Delay order will arrived soon . . .")
      }}></Button>
    </View>
  )
}
