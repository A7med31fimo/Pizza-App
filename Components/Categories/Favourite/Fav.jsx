import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import {
  deleteFavItems , getFavItems , subscribe
} from "../../../db/Edit/FavEdit";
import Icon from "react-native-vector-icons/Entypo";
import Favitem from "./FavItem";
import { useEffect, useState } from "react";
export default function Favorites({fuc1}) {
  
    const [Favs, setFavs] = useState([]);
    const [Empty, setEmpty] = useState(0);

  const getFavslist = async () => {
    const c = await getFavItems();
    setFavs(c);
    setEmpty(c.length);
  };


   

  useEffect(() => {
    getFavslist();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
        getFavslist(); 
    });
    return () => {
      unsubscribe();
    };
  }, []);


  
  

  return (
    <View style={styles.container}>
      {Empty === 0 ? (
          <View>
          <View style={styles.logoview}>
            <Image
              style={styles.logo}
              source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
            />
          </View>
          <Text style={styles.text1}>
            We know you love pizza, Why not{"\n"}mark it{" "}
            {<Icon name="heart" size={20} color="crimson" />} favourite!
          </Text>
          <View style={styles.btnview}>
            <Button
              style={styles.btn}
              title="Explore Menu"
              color="#FB081F"
              onPress= {fuc1}
            />
          </View>
        </View>
      )
         : (
        <ScrollView style={{ flex: 1 }}>
          {Favs.map((a, index) => (
            <View key={index} style={styles.container}>
              <Favitem
                id={a.id}
                label={a.label}
                image={a.image}
                desc = {a.desc}
               
              />
            </View>
          ))}
        </ScrollView>
      )}
       {/* <View style={styles.btnview}>
            <Button
              style={styles.btn}
              title="Explore Menu"
              color="#FB081F"
              onPress= {fuc1}
            />
          </View> */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  logoview: {
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
  },
  text1: {
    marginTop: -40,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginVertical: 10,
  },
  text2: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
    marginBottom: 20,
  },
  texticon: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnview: {
    marginTop: 10,
    margin: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {
    width: "50%",
  },
});
