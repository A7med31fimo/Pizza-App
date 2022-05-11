
import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import Home from "./Components/Categories/HomePages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drinks from "./Components/Categories/Drinks/Drinks";
import FirstPage from "./Components/Categories/HomePages/FirstPage";
import Pizza from "./Components/Categories/pizza/importPizza";
import Cakes from "./Components/Categories/cake/Cakes"
import Deals from "./Components/Categories/Deals/Deals"
import Card from "./Components/Categories/CardItems/Card";
import INFO from "./Components/Users/UserInfo";
import { auth } from "./db/Config";
import chatAdmin from "./Components/AdminManagement/chatAdmin";
import confirmation from "./Components/Categories/CardItems/confirmation";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="Home" component={Home} options={{ title: "Explore Menu" }} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="FirstPage" component={FirstPage} options={{title:"Getting Start"}}/>     
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Confirmation" component={confirmation}/>
        <Stack.Screen name="INFO" component={INFO}/>
        <Stack.Screen name="ChatAdmin" component={chatAdmin}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}