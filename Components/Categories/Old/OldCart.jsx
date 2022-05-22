import {
    View,
    ScrollView,
    Button,
    StyleSheet,
    Text,
    Image,
  } from "react-native";
  import { useState, useEffect } from "react";
  import { StatusBar } from "expo-status-bar";
  import {getOldCardItems ,subscribe} from "../../../db/Edit/OldCard"
  import Item from "./oldCartItem" ;
  export default function OldCart({ navigation }) {

    
    const [Cart, setCart] = useState([]);
    const [empty, setEmpty] = useState(0);
    
    
    const getCart = () => {
        getOldCardItems().then((data) => {
            setCart(data);
            setEmpty(data.length);
      });
    };
  

    useEffect(() => {
        getCart();
    }, []);
    // useEffect(() => {
    //   const unsubscribe = subscribe(({ change, snapshot }) => {
    //     getCart();
    //   });
    //   return () => {
    //     unsubscribe();
    //   };
    // }, []);

    return (
      <View style={{ flex: 1 }}>
        {/* <View style={styles.header}>
          <Text style={styles.headertext}>PreAdmin</Text>
          <View style={styles.headericon}>
            <Icon
              name="log-out"
              size={30}
              color="crimson"
              onPress={() => {
                SignOut()
                  .then(() => {
                    console.log("sign out");
                    navigation.navigate("FirstPage");
                  })
                  .catch((err) => {
                    setError(err.message);
                  });
              }}
            />
          </View>
        </View> */}
  
        {empty === 0 ? (
          <View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 350, height: 350 }}
                source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "400",
                marginVertical: 10,
                color: "red",
              }}
            >
               No Order Histroy ...
            </Text>
            <Text style ={{color : "red" , fontSize : 12 , fontWeight : 'bold' , textAlign : "center" , fontStyle : "italic"}}> 
            Go to the menu to add your first Order </Text> 
            <View style={styles.btnview}>
            <Button
              style={styles.btn}
              title="Explore Menu"
              color= "red"
              onPress= {() => navigation.navigate("Home")}
            />
          </View>
          </View>
        ) : 
        
        
        (
          <ScrollView>
            {Cart.map((a, index) => (
              <Item
                key={index}
                id={a.id}
                numberOfItems={a.numberOfItems}
                totalCost={a.totalCost}
                Card={a.Cards}
                time = {a.time}
             
              />
            ))}
          </ScrollView>
        )}
        <StatusBar style="auto" />
      </View>
    );
  }
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: "10%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headertext: {
      margin: 10,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
    },
    headericon: {
      margin: 15,
    },
    btnview: {
      marginTop: 15,
      marginBottom: 15,
      borderRadius: 10,
      marginHorizontal: 20,
      overflow: "hidden",
    },
    btn: {
      width: "50%",
    },
  });
  