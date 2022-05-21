import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import {
  editFeedBack,
  AddItemsFeedBack,
  getItemFeedBack,
  subscribe,
  deleteItemsFeedBack,
} from "../../db/Edit/FeedBackEdit";
import FeedBack from "./feedbackItem";
import Icon from "react-native-vector-icons/Entypo";
import { useState, useEffect } from "react";
import { auth } from "../../db/Config";
// import Icon from "react-native-vector-icons/Entypo";

export default function FeedFeedBackList() {
  const getFeedBacksList = async () => {
    const c = await getItemFeedBack();
    function compare(a, b) {
     
      if (a.user < b.user ) 
        return -1;
      
      else if (a.user > b.user ) 
        return 1 ;

      else { 
         
       
          if (a.month < b.month)
          return -1 ; 
          else if (a.month > b.month) 
          return 1  ;
       
          else {
            if (a.date < b.date)
          return -1 ; 
          else if (a.date > b.date) 
          return 1  ;
       else {
        if (a.hour < b.hour)
        return -1 ; 
        else if (a.hour > b.hour) 
        return 1  ;
        else {
          if (a.minute < b.minute)
          return -1 ; 
          else if (a.minute > b.minute) 
          return 1  ;
        
          else 
          return 0 ; 
        }
       }
       
       
      
    }
  }
}

    c.sort(compare);
    setFeedBacks(c);
    setEmpty(c.length);
    console.log("FeedBacks", c);
    //setname(auth.currentUser.displayName);
  };

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      getFeedBacksList();
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const [FeedBacks, setFeedBacks] = useState([]);
  const [empty, setEmpty] = useState(0);


  return (








    <View style={{ flex: 1 }}>
      {empty === 0 ? 
      
      (
        <View>
        <View style={{ alignItems: "center"}}>
          <Image
            style={{ width: 350, height: 350}}
            source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
          />
        </View>
        <Text style={styles.text}> No FeedBack yet </Text>
        <Text style ={{color : "red" , fontSize : 12 , fontWeight : 'bold' , textAlign : "center" , fontStyle : "italic"}}> Wait, the comments will be sent to you soon </Text> 
   
      </View>
    )
: <View style={{ flex: 1 }}>
{FeedBacks.map((c) => (
  <View key={c.id} >
   <FeedBack id = {c.id} user = {c.user} feedback = {c.feedBack} number = {c.number} 
   date = {c.date} month = {c.month} hour =  {c.hour} minute = {c.minute}
   />
  </View>
))}
</View>

}
    </View>
  );
}

const styles = StyleSheet.create({
  FeedBacksview: {
    width: "100%",
    // flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f7eceb",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginVertical: 10,
    marginHorizontal : 10 ,
  },
  FeedBacksuser: {
    fontSize: 15,
    color: "blue",
    fontWeight: "bold",
  },
  FeedBacks: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btnview: {
    margin: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {
    width: "50%",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: "row",
    // marginHorizontal : 135 ,
    width: "90%",
  },
  text:{
    textAlign : "center" ,
    fontSize : 16 , 
    fontStyle : "italic" ,
    fontWeight : 'bold' , 
  }
});
