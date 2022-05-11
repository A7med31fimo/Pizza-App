import { View, Text, ScrollView } from 'react-native'
import {useState,useEffect} from 'react'
import { getAllChats,subscribe } from '../../db/Edit/chat'
import Item from './itemOfCard';

export default function chatAdmin() {
  const[chat,setchats]=useState([]);
    const getChats = () => {
  getAllChats().then((data)=>{setchats(data)})}
    useEffect(() => {
        getChats();
      }, []);
    
      useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            getChats(); 
        });
        return () => {
          unsubscribe();
        };
      }, []);
    return (
        <View>

            <ScrollView>
            {chat.map((a, index) => (
            <View key={index} style={{flex:1}}>
              <Item id={a.id} number={a.numberOfItems} label={a.title +"  status:  "+ a.status} price={a.totalCost} size={''} image={"https://miro.medium.com/max/1080/1*4c6WJXtj5OYfq6d7ON4j0A.png"}/>
            </View>
          ))}


            </ScrollView>
        </View>

    )
}