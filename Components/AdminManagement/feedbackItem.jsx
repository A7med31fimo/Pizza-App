import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
  } from "react-native";

  import {
    deleteItemsFeedBack,
  } from "../../db/Edit/FeedBackEdit";

  import { useState, useEffect } from "react";
  import Icon from "react-native-vector-icons/Entypo";

  export default function Item({ id , user , feedback, number  ,date , month , hour , minute}) {
    
 let H1 = "heart-outlined" , 
 H2 = "heart-outlined" , 
 H3 = "heart-outlined" , 
 H4 = "heart-outlined"  ,
 H5 = "heart-outlined" ;


 if (number === 1){
    H1 = "heart" ;
}
else if (number === 2){
    H1 = "heart" ;
    H2 = "heart" ;
}
else if (number === 3){
    H1 = "heart" ;
    H2 = "heart" ;
    H3 = "heart" ;
}
else if (number === 4){
    H1 = "heart" ;
    H2 = "heart" ;
    H3 = "heart" ;
    H4 = "heart" ;
}
else if (number === 5){
    H1 = "heart" ;
    H2 = "heart" ;
    H3 = "heart" ;
    H4 = "heart" ;
    H5 = "heart" ;
}
  
  
    const [icon1 , setIcon1] = useState(H1);
    const [icon2 , setIcon2] = useState(H2);
    const [icon3 , setIcon3] = useState(H3);
    const [icon4 , setIcon4] = useState(H4);
    const [icon5 , setIcon5] = useState(H5);
   
  

   
    
    return (
      
      <View style={styles.content}>
      <View style={{paddingHorizontal:7}} >
      <View style={styles.footer}>
      <Text style={styles.label}> User : {user}</Text>
      <Icon
        name={"trash"}
        size = {20}
        color = 'grey'
        onPress = {() => deleteItemsFeedBack(id)}
        />
      </View>

      <Text style={styles.label}> Date:  {date}/{month} - {hour}:{minute}  </Text>
      

        {/* <Text style={styles.label}> FeedBack : </Text> */}
        <Text style = {{borderWidth : 1 , borderRadius: 10, borderColor : "#f7eceb" , padding : 7 ,  marginVertical : 7}}> {feedback} </Text>
        
      
        <View style={styles.footer}>
        <Icon name={icon1} size={30} color="crimson"  />

        <Icon name={icon2} size={30} color="crimson"  />

        <Icon name={icon3} size={30} color="crimson" />

        <Icon name={icon4} size={30} color="crimson"  />

        <Icon name={icon5} size={30} color="crimson"  />
      </View>

      {/* date = {date} hour = {hour} minute = {minute} second = {second} */}
      {/* <Text style = {{color : "red" , textAlign : "right"}}> {hour}:{minute} {"\n"} {date}/{month}/2022   </Text> */}
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
     // alignItems : 'center',
      marginVertical:10,
      flexDirection: "row",
    },
  });