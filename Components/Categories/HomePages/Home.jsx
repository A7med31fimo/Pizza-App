import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
// import Drinks from "../../Categories/Drinks/Drinks";
import { useState } from "react";
import Pizza from "../../../assets/Pizza/pizza7.png";
import Cakes from "../../../assets/desserts/cake.png";
import Drinks from "../../../assets/Drinks/pepsi3.png";
import Deals from "../../../assets/Deals/deal8.png";
import DealsPage from "../Deals/Deals";
import PizzaPage from "../pizza/importPizza";
import CakesPage from "../cake/Cakes";
import DrinksPage from "../Drinks/Drinks";
export default function Home() {
  const [Page, setPage] = useState(0);
  const clickDeals = () => {
    setPage(0);
  };
  const clickPizza = () => {
    setPage(1);
  };
  const clickCakes = () => {
    setPage(2);
  };
  const clickDrinks = () => {
    setPage(3);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.categories}>
        <TouchableOpacity onPress={clickDeals}>
          <Image style={styles.image} source={Deals} />
          <Text style={styles.text}>Deals</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickPizza}>
          <Image style={styles.image} source={Pizza} />
          <Text style={styles.text}>pizza</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickCakes}>
          <Image style={styles.image} source={Cakes} />
          <Text style={styles.text}>Cakes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickDrinks}>
          <Image style={styles.image} source={Drinks} />
          <Text style={styles.text}>Drinks</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <ScrollView style={{ backgroundColor: "#FFF" }}>
          {Page === 0 ? (
            <View>
              <DealsPage />
            </View>
          ) : Page === 1 ? (
            <View>
              <PizzaPage />
            </View>
          ) : Page === 2 ? (
            <View>
              <CakesPage />
            </View>
          ) : (
            <View>
              <DrinksPage />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  categories: {
    flex: 2,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
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
    marginBottom: 10,
  },
  image: {
    marginHorizontal: 5,
    width: 60,
    height: 60,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "red",
    shadowColor: "red",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 15,
    flexDirection: "column",
    backgroundColor: "#FFF",
  },
});
