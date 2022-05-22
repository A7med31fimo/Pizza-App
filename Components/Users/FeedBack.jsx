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
import { editFeedBack, AddItemsFeedBack , getItemFeedBack} from "../../db/Edit/FeedBackEdit";
import Icon from "react-native-vector-icons/Entypo";
import { useState, useEffect } from "react";
import { auth } from "../../db/Config";
export default function FeedBack({ navigation }) {

let y = 0 ; 
  const getFeedBack = async () => {
    const c = await getItemFeedBack();
    
   
    function compare(a, b) {
      if (a.user < b.user ) {
        return -1;
      }
      else if (a.user > b.user ) {
        return 1;
      }
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

          else {
            if (a.second < b.second)
          return -1 ;
        
          else if (a.second > b.second) 
          return 1  ;

          else 
          return 0 ;

          }
   
        }
        
        }
      }
    }

    c.sort(compare);


    for (let i = c.length-1 ; i >= 0 ; i--){
      if (c[i].user === auth.currentUser.displayName){
          y = c[i].number ;
          console.log("y : " + y);
          break ;
    }
      }
      setNumber(y);
      if (y === 1){
          setIcon1("heart");
      }
      if (y === 2){
        setIcon1("heart");
        setIcon2("heart");
    }
      if (y === 3){
        setIcon1("heart");
        setIcon2("heart");
        setIcon3("heart");
    }
      if (y === 4){
        setIcon1("heart");
        setIcon2("heart");
        setIcon3("heart");
        setIcon4("heart");
    }
      if (y === 5){
        setIcon1("heart");
        setIcon2("heart");
        setIcon3("heart");
        setIcon4("heart");
        setIcon5("heart");
    }
    setData(c);

  
    
  };

  useEffect(() => {
    getFeedBack();
  }, []);

  const [Data, setData] = useState("");
    let x = "" 
  for (let i = Data.length-1 ; i >= 0 ; i--){
    console.log("x  : " + x) ;
    console.log(Data);
    console.log(auth.currentUser.displayName); 
    if (Data[i].user === auth.currentUser.displayName){

      x = Data[i].feedBack ; 
    
      console.log("x  : " + x) ;
    
      break ;
    }
  }
  
 
   
   
     const [icon1 , setIcon1] = useState("heart-outlined");
     const [icon2 , setIcon2] = useState("heart-outlined");
     const [icon3 , setIcon3] = useState("heart-outlined");
     const [icon4 , setIcon4] = useState("heart-outlined");
     const [icon5 , setIcon5] = useState("heart-outlined");
    
     const [number, setNumber] = useState(0);
    const [feedBack, setFeedBack] = useState("");
  
  // const [User, setuser] = useState("");
  

  const click1 = () => {
    setNumber(1);
    setIcon1("heart");
    setIcon2("heart-outlined");
    setIcon3("heart-outlined");
    setIcon4("heart-outlined");
    setIcon5("heart-outlined");
  };
  const click2 = () => {
    setNumber(2);
    setIcon1("heart");
    setIcon2("heart");
    setIcon3("heart-outlined");
    setIcon4("heart-outlined");
    setIcon5("heart-outlined");
  };
  const click3 = () => {
    setNumber(3);
    setIcon1("heart");
    setIcon2("heart");
    setIcon3("heart");
    setIcon4("heart-outlined");
    setIcon5("heart-outlined");
  };
  const click4 = () => {
    setNumber(4);
    setIcon1("heart");
    setIcon2("heart");
    setIcon3("heart");
    setIcon4("heart");
    setIcon5("heart-outlined");
  };
  const click5 = () => {
    setNumber(5);
    setIcon1("heart");
    setIcon2("heart");
    setIcon3("heart");
    setIcon4("heart");
    setIcon5("heart");
  };
 

  return (
    <View style = {{flex : 1}}>
      <View style={styles.logoview}>
        <Image
          style={styles.logo}
          source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 16,
          justifyContent: "center",
        }}
      >
        {" "}
        please rate your Experience{" "}
      </Text>
      <Text
        style={{ fontSize: 13, textAlign: "center", justifyContent: "center" }}
      >
        {" "}
        your feedback is valuable to us{" "}
      </Text>

      <View style={styles.footer}>
        <Icon name={icon1} size={35} color="crimson" onPress={click1} />

        <Icon name={icon2} size={35} color="crimson" onPress={click2} />

        <Icon name={icon3} size={35} color="crimson" onPress={click3} />

        <Icon name={icon4} size={35} color="crimson" onPress={click4} />

        <Icon name={icon5} size={35} color="crimson" onPress={click5} />
      </View>

      <Text style={{ fontSize: 14, paddingTop: 20, paddingHorizontal: 30 }}>
        {" "}
        Tell us what you love or where we can improve{" "}
      </Text>

      <TextInput
        multiline={true}
        style={{
          height: 100,
          padding: 10,
          marginHorizontal: 30,
          marginVertical : 7 ,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "crimson",
        }}
        placeholder="Leave comment"
        defaultValue = {x}
        onChangeText={setFeedBack}
      />

      <View style={styles.btnview}>
        <Button
          style={styles.btn}
          title="Submit"
          color="#FB081F"
          // onPress= {fuc2}
          onPress={() => {
            let today = new Date();
            let date = (today.getDate() < 10 ? '0' : '') + today.getDate();
            let hour = (today.getHours() < 10 ? '0' : '') + today.getHours();
            let minute = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
            let second = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
            let month =  today.getMonth()+1;
            //console.log(today + " \n " + date + " \n " + hour + " \n " + minute + " \n " + second + " \n" + month);
            if (feedBack === "" && x === "")
                alert("sorry, no feedBack");
              else if (feedBack === "" && x != "")
                alert("sorry, add new feedBack");
              else {
            AddItemsFeedBack({user: auth.currentUser.displayName ,feedBack , number  , date , hour , minute , second , month});
            navigation.navigate("Home");
            alert("thanks for your FeedBack");
            console.log("feedback");
              }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoview: {
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 250,
  },
  btnview: {
    marginHorizontal: 50,
    marginVertical : 7 ,
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
    width: "90%",
  },
});
