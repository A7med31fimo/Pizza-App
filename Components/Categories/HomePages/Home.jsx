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
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Octicons"
import { SignOut } from "../../../db/auth/auth";



export default function Home({ navigation }) {
  const [Page, setPage] = useState(0);
  const [ColorDeal , setColorDeal] = useState('crimson');
  const [ColorPizza , setColorPizza] = useState('black');
  const [ColorCake , setColorCake] = useState('black');
  const [ColorDrinks , setColorDrinks] = useState('black');
  const [ColorCard , setColorCard ]= useState('black');
  const clickDeals = () => {
    setPage(0);
    setColorDeal('crimson');
    setColorPizza('black');
    setColorCake('black');
    setColorDrinks('black');
    setColorCard('black');
  };
  const clickPizza = () => {
    setPage(1);
    setColorDeal('black');
    setColorPizza('crimson');
    setColorCake('black');
    setColorDrinks('black');
    setColorCard('black');
  };
  const clickCakes = () => {
    setPage(2);
    setColorDeal('black');
    setColorPizza('black');
    setColorCake('crimson');
    setColorDrinks('black');
    setColorCard('black');
  };
  const clickDrinks = () => {
    setPage(3);
    setColorDeal('black');
    setColorPizza('black');
    setColorCake('black');
    setColorDrinks('crimson');
    setColorCard('black');
  };
  const clickCart = () => {
    setPage(4);
    setColorDeal('black');
    setColorPizza('black');
    setColorCake('black');
    setColorDrinks('black');
    setColorCard('crimson');
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.categories}>
        <TouchableOpacity onPress={clickDeals}>
          <View style={styles.imageview}>
            <Image
              style={styles.image}
              source={{ uri: "https://i.ibb.co/kSf9cpQ/deal4.jpg" }}
            />
          </View>
          <Text style={{color : ColorDeal , marginLeft : 10}}>Deals</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickPizza}>
          <View style={styles.imageview}>
            <Image
              style={styles.image}
              source={{ uri: "https://i.ibb.co/yWZHMDv/pizza.png" }}
            />
          </View>
          <Text style={{color : ColorPizza , marginLeft : 10}}>pizza</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickCakes}>
          <View style={styles.imageview}>
            <Image
              style={styles.image}
              source={{ uri: "https://i.ibb.co/FVM5YnL/cake.jpg" }}
            />
          </View>
          <Text style={{color : ColorCake , marginLeft : 10}}>Cakes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clickDrinks}>
          <View style={styles.imageview}>
            <Image
              style={styles.image}
              source={{ uri: "https://i.ibb.co/nn7v6MP/images-1.jpg" }}
            />
          </View>
          <Text style={{color : ColorDrinks , marginLeft : 10}}>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickCart}>
          <View style={styles.imageview}>
            <Icon name="shoppingcart" size={50} color="crimson" />
          </View>
          <Text style={{color : ColorCard , marginLeft : 10}}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SignOut}>
          <View style={styles.imageview}>
            <Icon2 name="sign-out" size={50} color="crimson" />
          </View>
          <Text style={{color : ColorCard , marginLeft : 10}}>sign-out</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>(navigation.navigate("INFO"))}>
          <View style={styles.imageview}>
            <Icon name="user" size={50} color="crimson" />
          </View>
          <Text style={{color : ColorCard , marginLeft : 10}}>Info</Text>
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
  imageview: {
    borderRadius: "50%",
    borderColor: "red",
    shadowColor: "red",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width: 50,
    height: 50,
  },
  // text: {
  //   width: "100%",
  //   fontSize: 16,
  //   // fontWeight: "bold",
  //   textAlign: "center",
    
  // },
  container: {
    flex: 12,
    flexDirection: "column",
    backgroundColor: "#FFF",
  },
});
