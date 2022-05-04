import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Cake from "./ItemOfCake";
import { getItemCakes } from "../../../db/Edit/CakesEdit";
// import Cake1 from "../../../assets/desserts/cake5.png" ;
// import Cake2 from "../../../assets/desserts/cake2.png" ;
// import Cake3 from "../../../assets/desserts/cake4.png" ;

export default function Cakes() {
  const getItemlist = async () => {
    const c = await getItemCakes();
    setItem(c);
  };

  useEffect(() => {
    getItemlist();
  }, []);

  const [Items, setItem] = useState([]);
  //   const cake_arr = [
  //   { label: "Chessecake", desc: "Creamy chessecake topped with strawbery sauce"
  //   , image: Cake1 , price : '60' },
  //   { label: "potluck desserts ", desc: "Fudge ,Potluck Cheesecake Dessert ,Oreo Cookie Balls, Ambrosia Salad ,Magic Monster Layer Bars "
  //   , image: Cake2 , price : '50' },
  //   { label: "Cocolate Cake", desc: "A rish, soft, dark chocolate cake. A must for chocolaters lovers "
  //   , image: Cake3 , price : '55' },
  // ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {Items.map((e, index) => (
          <Cake
            key={index}
            label={e.label}
            desc={e.desc}
            image={e.image}
            price={e.price}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
