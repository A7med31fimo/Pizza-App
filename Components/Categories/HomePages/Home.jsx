import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  getCardItems,
  deleteItemsCards,
  AddItemsCards,
} from "../../../db/Edit/CartItems";
import Confirmation from "../CardItems/confirmation";
import { useState, useEffect } from "react";
import DealsPage from "../Deals/Deals";
import PizzaPage from "../pizza/importPizza";
import CakesPage from "../cake/Cakes";
import DrinksPage from "../Drinks/Drinks";
import CartPage from "../CardItems/Card";
import FavPage from "../Favourite/Fav";
import Icon from "react-native-vector-icons/EvilIcons";
// import Icon2 from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Entypo";
import { SignOut } from "../../../db/auth/auth";
import { auth } from "../../../db/Config";
import ChatAdmin from "../../AdminManagement/chatAdmin";
export default function Home({ navigation }) {
  useEffect(() => {
    getCardslist();
  }, []);

  const [Data, setData] = useState([]);
  const [Page, setPage] = useState(0);
  const [ColorDeal, setColorDeal] = useState("crimson");
  const [ColorPizza, setColorPizza] = useState("black");
  const [ColorCake, setColorCake] = useState("black");
  const [ColorDrinks, setColorDrinks] = useState("black");
  const [ColorCard, setColorCard] = useState("black");
  const [viewCart, setViewCart] = useState(true);

  const [countItems, setCountItems] = useState(0);

  const clickDeals = () => {
    setPage(0);
    setColorDeal("crimson");
    setColorPizza("black");
    setColorCake("black");
    setColorDrinks("black");
    setColorCard("black");
    setViewCart(true);
  };
  const clickPizza = () => {
    setPage(1);
    setColorDeal("black");
    setColorPizza("crimson");
    setColorCake("black");
    setColorDrinks("black");
    setColorCard("black");
    setViewCart(true);
  };
  const clickCakes = () => {
    setPage(2);
    setColorDeal("black");
    setColorPizza("black");
    setColorCake("crimson");
    setColorDrinks("black");
    setColorCard("black");
    setViewCart(true);
  };
  const clickDrinks = () => {
    setPage(3);
    setColorDeal("black");
    setColorPizza("black");
    setColorCake("black");
    setColorDrinks("crimson");
    setColorCard("black");
    setViewCart(true);
  };
  const clickCart = () => {
    AddToCart();
    setPage(4);
    setViewCart(false);
    if (auth.currentUser.displayName === "admin")
      navigation.navigate("ChatAdmin");
  };

  const clickFav = () => {
    setPage(5);
    setColorDeal("black");
    setColorPizza("black");
    setColorCake("black");
    setColorDrinks("black");
    setColorCard("crimson");
  };

  const getCardslist = async () => {
    const c = await getCardItems();
    let x = [];
    c.map((a) => {
      for (let i = 0; i < a.number; i++)
        x.push({
          label: a.label,
          image: a.image,
          price: a.price / a.number,
          size: a.size,
          number: 1,
        });
    });
    setData(x);

    console.log(c);
  };

  const AddToCart = async () => {
    const c = await getCardItems();
    c.map((a) => deleteItemsCards(a.id));
    //console.log(c);
    Data.map((a) =>
      AddItemsCards({
        label: a.label,
        number: 1,
        price: a.price,
        size: a.size,
        image: a.image,
      })
    );
    console.log(Data);
  };

  const addPlus = (label, image, price, size) => {
    setData((prevdata) => {
      return [{ label, image, price, size, number: 1 }, ...prevdata];
    });
    setCountItems(countItems + 1);
  };

  const mins = (label, size) => {
    setCountItems(countItems - 1);
    setData((prevTodos) => {
      let flag = true;
      for (let i = 0; i < prevTodos.length; i++)
        if (prevTodos[i].label === label && prevTodos[i].size === size) {
          flag = false;
          prevTodos.splice(i, 1);
          break;
        }

      if (flag) {
        for (let i = 0; i < prevTodos.length; i++)
          if (prevTodos[i].label === label) {
            flag = false;
            prevTodos.splice(i, 1);
            break;
          }
      }
      return prevTodos;
    });
  };

  const count = (label) => {
    let count = 0;
    Data.map((a) => (a.label === label ? count++ : count));
    return count;
  };

  const trash = (label, size) => {
    setData((prevTodos) => {
      for (let i = 0; i < prevTodos.length; )
        if (prevTodos[i].label === label && prevTodos[i].size === size)
          prevTodos.splice(i, 1);
        else i++;

      return prevTodos;
    });
  };

  const total = () => {
    let price = 0;
    Data.map((a) => (price += a.price));
    return price;
  };

  const menu = () => {
    setPage(0);
    setViewCart(true);
  };

  const confirm = async () => {
    const c = await getCardItems();
    c.map((a) => deleteItemsCards(a.id));
    Data.splice(0, Data.length);
    setPage(6);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Explore Menu 🍕</Text>
        <View style={styles.headericon}>
          {auth.currentUser !== null ? (
            auth.currentUser.displayName != "admin" ? (
              <Icon
                name="user"
                size={50}
                color="blue"
                onPress={() => {
                  navigation.navigate("INFO");
                }}
              />
            ) : (
              <Icon3
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
            )
          ) : null}
        </View>
      </View>
      <View style={styles.categories}>
        <ScrollView horizontal={true} contentContainerStyle = {styles.x}>
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
                source={{ uri: "https://i.ibb.co/G79CmW4/pepsi3.jpg" }}
              />
            </View>
            <Text style={{ color: ColorDrinks, textAlign: "center" }}>
              Drinks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickFav}>
            <View style={styles.imageview}>
              <Icon2 name="favorite" size={50} color="red" />
            </View>
            <Text style={{ color: ColorCard, textAlign: "center" }}>
              {auth.currentUser !== null
                ? auth.currentUser.displayName === "admin"
                  ? "adminlist"
                  : "Favourite"
                : null}
            </Text>
          </TouchableOpacity>
          {auth.currentUser.displayName === "admin" ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("getFeedBack");
              }}
            >
              <View style={styles.imageview}>
                <Icon2 name="feedback" size={50} color="#000000" />
              </View>
              <Text style={{ color: ColorDrinks, textAlign: "center" }}>
                FeedBacks
              </Text>
            </TouchableOpacity>
          ) : null}
        </ScrollView>
      </View>
      <View style={styles.container}>
        <ScrollView style={{ backgroundColor: "#FFF" }}>
          {Page === 0 ? (
            <View>
              <DealsPage fuc1={addPlus} fuc2={mins} fuc3={count} />
            </View>
          ) : Page === 1 ? (
            <View>
              <PizzaPage fuc1={addPlus} fuc2={mins} fuc3={count} />
            </View>
          ) : Page === 2 ? (
            <View>
              <CakesPage fuc1={addPlus} fuc2={mins} fuc3={count} />
            </View>
          ) : Page === 3 ? (
            <View>
              <DrinksPage fuc1={addPlus} fuc2={mins} fuc3={count} />
            </View>
          ) : Page === 4 ? (
            <View>
              <CartPage fuc1={trash} fuc2={menu} fuc3={confirm} />
            </View>
          ) : Page === 5 ? (
            <View>
              {auth.currentUser.displayName === "admin" ? (
                <ChatAdmin fuc1={menu} />
              ) : (
                <FavPage fuc1={menu} />
              )}
            </View>
          ) : (
            <View>
              <Confirmation />
            </View>
          )}
        </ScrollView>
      </View>

      {Data.length != 0 && viewCart ? (
        <View style={styles.footer}>
          <View style={styles.footer2}>
            <Image
              style={{
                width: "15%",
                height: 45,
                borderWidth: 2,
                borderRadius: 10,
                backgroundColor: "#f7eceb",
                borderColor: "white",
                marginHorizontal: 10,
                marginVertical: 7,
              }}
              source={{ uri: "https://i.ibb.co/kSf9cpQ/deal4.jpg" }}
            />
            <Text
              style={{
                fontSize: 12,
                color: "white",
                marginVertical: 4,
                width: "48%",
                fontWeight : "bold"
              }}
            > {Data.length} item {"\n\n"} {total()}.00 EGP  </Text>
            <Pressable style={styles.button} onPress = {clickCart} >
                <Text style={styles.textButton}> View Cart </Text>
           </Pressable>
          </View>
        </View>
      ) : (
        <></>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  categories: {
    // margin: 10,
    width: "100%",
    height: 100,
    // flexDirection: "row",
    
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
    // marginHorizontal: 4,
    // marginTop: 2,
  },
  header: {
    marginTop: 12,
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
    color: "red",
  },
  headericon: {
    margin: 15,
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
    marginHorizontal: 15,
    marginVertical: 5,
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

  footer: {
    width: "98%",
    height: 75,
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
    marginHorizontal: 4,
    marginTop: 2,
  },
  footer2: {
    backgroundColor: "crimson",
    marginHorizontal: 1,
    borderColor: "#f7eceb",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
  },

  footer3: {
    backgroundColor: "green",
    marginHorizontal: 1,
    borderColor: "#f7eceb",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
  },
  button: {
    width: "30%",
    borderWidth : 1 ,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 5,
    marginVertical: 12,
    padding : 5 ,
    backgroundColor : "white",
    borderColor : "white" ,
  },
  textButton : {
    fontWeight : "bold" ,
    fontSize : 16,
    color : "crimson" , 
    textAlign : "center",
    textAlignVertical : "center" ,

  }, 
  x : {
    flexDirection : "row" ,
    justifyContent : "space-between",
    alignContent : "space-between"
  }
});
