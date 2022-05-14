import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from "react-native";

import {getCardItems , deleteItemsCards ,AddItemsCards } from "../../../db/Edit/CartItems"
import Confirmation from "../CardItems/confirmation";
import { useState , useEffect} from "react";
import DealsPage from "../Deals/Deals";
import PizzaPage from "../pizza/importPizza";
import CakesPage from "../cake/Cakes";
import DrinksPage from "../Drinks/Drinks";
import CartPage from "../CardItems/Card";
import FavPage from "../Favourite/Fav";

import UserInfo from "../../Users/UserInfo";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Octicons";
import { SignOut } from "../../../db/auth/auth";
import { auth } from "../../../db/Config";
export default function Home() {

    useEffect(() => {
    getCardslist();
  }, []);

  
  const [Data , setData] = useState([]);
  const [Page, setPage] = useState(0);
  const [ColorDeal, setColorDeal] = useState("crimson");
  const [ColorPizza, setColorPizza] = useState("black");
  const [ColorCake, setColorCake] = useState("black");
  const [ColorDrinks, setColorDrinks] = useState("black");
  const [ColorCard, setColorCard] = useState("black");
  const [viewCart,setViewCart] = useState(true);
  const [deliver ,setDeliver] = useState(false);
  const [deliverView , setDeliverView] = useState(false);
  const [ countItems , setCountItems]  = useState(0);
  
  const clickDeals = () => {
    setPage(0);
    setColorDeal("crimson");
    setColorPizza("black");
    setColorCake("black");
    setColorDrinks("black");
    setColorCard("black");
    setViewCart(true);
    deliver ? setDeliverView(true) : setDeliverView(false) ;
  };
  const clickPizza = () => {
    setPage(1);
    setColorDeal("black");
    setColorPizza("crimson");
    setColorCake("black");
    setColorDrinks("black");
    setColorCard("black");
    setViewCart(true);
    deliver ? setDeliverView(true) : setDeliverView(false) ;
  };
  const clickCakes = () => {
    setPage(2);
    setColorDeal("black");
    setColorPizza("black");
    setColorCake("crimson");
    setColorDrinks("black");
    setColorCard("black");
    setViewCart(true);
    deliver ? setDeliverView(true) : setDeliverView(false) ;
  };
  const clickDrinks = () => {
    setPage(3);
    setColorDeal("black");
    setColorPizza("black");
    setColorCake("black");
    setColorDrinks("crimson");
    setColorCard("black");
    setViewCart(true);
    deliver ? setDeliverView(true) : setDeliverView(false) ;
  };
  const clickCart = () => {
     AddToCart();
     setPage(4);
     setViewCart(false);
    // setColorDeal("black");
    // setColorPizza("black");
    // setColorCake("black");
    // setColorDrinks("black");
    // setColorCard("crimson");
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
  //  if (auth.currentUser.displayName === "admin")
  //    navigation.navigate("ChatAdmin");
   

   
 };





  const getCardslist = async() => {
    const c = await getCardItems();
    let x  = [];
    c.map( a => {
          for(let i = 0 ; i < a.number ; i++)
            x.push({label : a.label , image : a.image , price : a.price/a.number , size : a.size  , number : 1 });
    });
     setData(x);
    
     console.log(c);
  }


const AddToCart =  async () => {
  const c = await getCardItems();
  c.map(a => deleteItemsCards(a.id));
  //console.log(c);
  Data.map ( a => AddItemsCards({label : a.label , number : 1 , price : a.price , size : a.size , image : a.image }) )
  console.log(Data);
}
    
   
  const addPlus  = (label , image , price , size) => {
    if (!deliver ){ 
    
      setData((prevdata) => {
      return [
        {label , image , price , size  , number : 1 },
        ...prevdata
      ]
     
    });
    setCountItems(countItems+1)
  }
    else 
     alert("wait order y ngm");
}

const mins = (label , size) => {
  setCountItems(countItems-1)
  setData(prevTodos => {
    let flag = true ;
   for (let i = 0  ; i < prevTodos.length ; i++ )
    if (prevTodos[i].label === label && prevTodos[i].size === size){
      flag = false ;
      prevTodos.splice(i , 1);
      break ;
    }
  
if (flag){
  for (let i = 0  ; i < prevTodos.length ; i++ )
    if (prevTodos[i].label === label ){
      flag = false ;
      prevTodos.splice(i , 1);
      break ;
    }
  
}
  return prevTodos ; 
});

}


const count = (label) => {
  let count = 0 ;
  Data.map ( a => a.label === label ? count++ : count )
  return count  ;
}




const trash = (label ,size) => {
  setData(prevTodos => {
    
  for (let i = 0  ; i < prevTodos.length ; )
    if (prevTodos[i].label === label && prevTodos[i].size === size)
      prevTodos.splice(i , 1);
    else 
      i++;
    
    return prevTodos ;
});


}


const total = () =>{
  let price = 0 ;  
  Data.map(a => price += a.price);
  return price ;
}


const menu = () => {
    setPage(0);
    setViewCart(true);
}

const confirm = async () => {
  const c = await getCardItems();
  c.map(a => deleteItemsCards(a.id));
  Data.splice(0, Data.length);
  setPage(6);
  setDeliver(true);
}

const arrived =  () => {
  setDeliver(false);
  setDeliverView(false);
  alert("Have fun with your meal");
}

const deliv = () => {
    return deliver;
}

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
          <TouchableOpacity onPress={clickFav}>
            <View style={styles.imageview}>
              <Image
                style={styles.image}
                source={{ uri: "https://i.ibb.co/pKfswCx/cart.png" }}
              ></Image>
            </View>
            <Text style={{ color: ColorCard, textAlign: "center" }}>Favourite</Text>
          </TouchableOpacity>

          {/* {auth.currentUser !== null ? (
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
          ) : null} */}
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
              <DealsPage fuc1 = {addPlus} fuc2 = {mins} fuc3 = {count} fuc4 = {deliv}  />
            </View>
          ) : Page === 1 ? (
            <View>
              <PizzaPage fuc1 = {addPlus} fuc2 = {mins} fuc3 = {count} fuc4 = {deliv}/>
            </View>
          ) : Page === 2 ? (
            <View>
              <CakesPage fuc1 = {addPlus} fuc2 = {mins} fuc3  = {count} fuc4 = {deliv} />
            </View>
          ) : Page === 3 ? (
            <View>
              <DrinksPage fuc1 = {addPlus} fuc2 = {mins}  fuc3 = {count} fuc4 = {deliv} />
            </View>
          ) : Page === 4 ? (
            <View>
              <CartPage fuc1 = {trash} fuc2 = {menu} fuc3 = {confirm} />
            </View>
          ): Page === 5 ? (
            <View>
              <FavPage  fuc1 = {menu}/>
            </View>
          ):
          <View>
          <Confirmation fuc1 = {menu} fuc2 = {arrived}  />
          </View>
          }
        </ScrollView>
      </View>
      
      {
        deliverView ? 
        <View style={styles.footer}>

        <View style={styles.footer3}>
        <Image
              style={{width: "15%", height: 45, borderWidth: 2,borderRadius: 10 ,backgroundColor : '#f7eceb', borderColor: "white", marginHorizontal: 10, marginVertical : 7}}
              source={{ uri: "https://i.ibb.co/kSf9cpQ/deal4.jpg" }}
            />
            <Text style = {{fontSize : 12 , color : 'white' ,marginVertical : 4 , width : "48%" }}>  If you have problem {<h3> call 19999 </h3>}   </Text>
            <View style = {styles.button}>
            <Button  title = {<b style = {{color : 'crimson'}}> Arrived ?</b>} color= "white" onPress={arrived}  />
            </View>
        </View> 
    </View>
    :
    <></>
      }

      {Data.length != 0 && viewCart ? 
      <View style={styles.footer}>

          <View style={styles.footer2}>
          <Image
                style={{width: "15%", height: 45, borderWidth: 2,borderRadius: 10 ,backgroundColor : '#f7eceb', borderColor: "white", marginHorizontal: 10, marginVertical : 7}}
                source={{ uri: "https://i.ibb.co/kSf9cpQ/deal4.jpg" }}
              />
              <Text style = {{fontSize : 12 , color : 'white' ,marginVertical : 4 , width : "48%" }}>  {Data.length} item {<h3> {total()}.00 EGP </h3>}   </Text>
              <View style = {styles.button}>
              <Button  title = {<b style = {{color : 'crimson'}}> Add to cart </b>} color= "white" onPress={clickCart} />
              </View>
          </View> 
      </View>
      :
      <></>
    }
    </View>
  );
}
const styles = StyleSheet.create({
  categories: {
    width: "98%",
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
    marginHorizontal : 4 ,
    marginTop: 2
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
    marginVertical : 5
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

  footer : {
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
    marginHorizontal : 4 ,
    marginTop: 2
  },
  footer2 : {
    backgroundColor : 'crimson' , 
    marginHorizontal : 1 ,  
    borderColor: "#f7eceb", 
    borderWidth: 1, 
    borderRadius: 5,
    flexDirection  : "row",
    width : "100%"
  },

  footer3 : {
    backgroundColor : 'green' , 
    marginHorizontal : 1 ,  
    borderColor: "#f7eceb", 
    borderWidth: 1, 
    borderRadius: 5,
    flexDirection  : "row",
    width : "100%"
  },
  button: {
    width : '30%',
   // borderWidth : 1 ,
    borderRadius: 10,
    overflow: "hidden",
    //marginHorizontal: 5,
     marginVertical : 12
  },


});
