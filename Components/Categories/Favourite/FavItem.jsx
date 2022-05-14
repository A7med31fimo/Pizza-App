import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
  } from "react-native";

  import { useState, useEffect } from "react";
  import { deleteFavItems , getFavItems} from "../../../db/Edit/FavEdit"
  import Icon from "react-native-vector-icons/Entypo";

  export default function Item({ id , label , desc, image }) {
    

  
  
    //const [icon , setIcon] = useState('heart')
    const dislike =  async () => {
      const c = await getFavItems();
      for (let i = 0 ; i < c.length ; i++){
        if (c[i].label === label){
          deleteFavItems(c[i].id);
          break;
        }
    
    } 

  } 

    
    
    return (
      
      <View style={styles.content}>
      <View style={{paddingHorizontal:7}} >
      <View style={styles.footer}>
      <Text style={styles.label}>{label}</Text>
      <Icon
        name={"heart"}
        size = {20}
        color = 'crimson'
        onPress = {dislike}
        />
      </View>
        <Text style={styles.desc}>{desc} </Text>
      </View> 
      <Image source={{uri : image}} style = {styles.image} />
                  
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