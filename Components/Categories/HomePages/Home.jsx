import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import DealsPage from "../Deals/Deals";
import PizzaPage from "../pizza/importPizza";
import CakesPage from "../cake/Cakes";
import DrinksPage from "../Drinks/Drinks";
import CartPage from "../CardItems/Card";
import UserInfo from "../../Users/UserInfo";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Octicons";
import { SignOut } from "../../../db/auth/auth";
import { auth } from "../../../db/Config";
export default function Home({ navigation }) {
  const [Page, setPage] = useState(0);
  const [ColorDeal, setColorDeal] = useState("crimson");
  const [ColorPizza, setColorPizza] = useState("black");
  const [ColorCake, setColorCake] = useState("black");
  const [ColorDrinks, setColorDrinks] = useState("black");
  const [ColorCard, setColorCard] = useState("black");
  const clickDeals = () => {
    setPage(0);
    setColorDeal("crimson");
    setColorPizza("black");
    setColorCake("black");
    setColorDrinks("black");
    setColorCard("black");
  };
  const clickPizza = () => {
    setPage(1);
    setColorDeal("black");
    setColorPizza("crimson");
    setColorCake("black");
    setColorDrinks("black");
    setColorCard("black");
  };
  const clickCakes = () => {
    setPage(2);
    setColorDeal("black");
    setColorPizza("black");
    setColorCake("crimson");
    setColorDrinks("black");
    setColorCard("black");
  };
  const clickDrinks = () => {
    setPage(3);
    setColorDeal("black");
    setColorPizza("black");
    setColorCake("black");
    setColorDrinks("crimson");
    setColorCard("black");
  };
  const clickCart = () => {
    // setPage(4);
    // setColorDeal("black");
    // setColorPizza("black");
    // setColorCake("black");
    // setColorDrinks("black");
    // setColorCard("crimson");
    if (auth.currentUser.displayName === "admin")
      navigation.navigate("ChatAdmin");
    else navigation.navigate("Card");
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.categories}>
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={clickDeals}>
            <View style={styles.imageview}>
              <Image
                style={styles.image}
                source={{ uri: "https://i.ibb.co/kSf9cpQ/deal4.jpg" }}
              />
            </View>
            <Text style={{ color: ColorDeal, textAlign: "center" }}>Deals</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={clickPizza}>
            <View style={styles.imageview}>
              <Image
                style={styles.image}
                source={{ uri: "https://i.ibb.co/yWZHMDv/pizza.png" }}
              />
            </View>
            <Text style={{ color: ColorPizza, textAlign: "center" }}>
              pizza
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={clickCakes}>
            <View style={styles.imageview}>
              <Image
                style={styles.image}
                source={{ uri: "https://i.ibb.co/FVM5YnL/cake.jpg" }}
              />
            </View>
            <Text style={{ color: ColorCake, textAlign: "center" }}>Cakes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={clickDrinks}>
            <View style={styles.imageview}>
              <Image
                style={styles.image}
                source={{ uri: "https://i.ibb.co/nn7v6MP/images-1.jpg" }}
              />
            </View>
            <Text style={{ color: ColorDrinks, textAlign: "center" }}>
              Drinks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickCart}>
            <View style={styles.imageview}>
              <Image
                style={styles.image}
                source={{ uri: "https://i.ibb.co/pKfswCx/cart.png" }}
              ></Image>
            </View>
            <Text style={{ color: ColorCard, textAlign: "center" }}>Cart</Text>
          </TouchableOpacity>

          {auth.currentUser !== null ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("INFO");
              }}
            >
              <View style={styles.imageview}>
                <Image
                  style={styles.image}
                  source={{ uri: "https://i.ibb.co/1q25n5P/profile1.png" }}
                ></Image>
              </View>
              <Text style={{ textAlign: "center" }}>Profile</Text>
            </TouchableOpacity>
          ) : null}
          {/* 
          {auth.currentUser !== null ? (
            <TouchableOpacity
              onPress={() => {
                {
                  SignOut()
                    .then(() => {
                      console.log("sign out");
                      navigation.navigate("FirstPage");
                    })
                    .catch((err) => {
                      setError(err.message);
                    });
                }
              }}
            >
              <View style={styles.imageview}>
                <Icon2 name="sign-out" size={50} color="crimson" />
              </View>
              <Text style={{ color: ColorCard, marginLeft: 10 }}>sign-out</Text>
            </TouchableOpacity>
          ) : null} */}
        </ScrollView>
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
          ) : Page === 3 ? (
            <View>
              <DrinksPage />
            </View>
          ) : (
            <View>
              <CartPage />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  categories: {
    width: "100%",
    height: 100,
    flexDirection: "row",
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
  imageview: {
    borderRadius: 50,
    borderColor: "red",
    shadowColor: "red",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 12,
    flexDirection: "column",
    backgroundColor: "#FFF",
  },
});
