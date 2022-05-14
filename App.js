
import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import Home from "./Components/Categories/HomePages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./Components/Categories/HomePages/FirstPage";
import Card from "./Components/Categories/CardItems/Card";
import INFO from "./Components/Users/UserInfo";
import { getUserUId } from "./db/auth/auth";
import ChatAdmin from "./Components/AdminManagement/chatAdmin";
import Confirmation from "./Components/Categories/CardItems/Confirmation";
export default function App() {


function User(){
const Stack = createNativeStackNavigator();
let inial=(getUserUId!==null?"Home":"FirstPage")
return    <Stack.Navigator initialRouteName={inial} >
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Log In" component={Login} />
          <Stack.Screen name="FirstPage" component={FirstPage} options={{title:"Getting Start"}}/>
          <Stack.Screen name="Home" component={Home} options={{ title: "Explore Menu" }} />     
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="Confirmation" component={Confirmation}/>
          <Stack.Screen name="INFO" component={INFO}/>
          <Stack.Screen name="ChatAdmin" component={ChatAdmin}/>     
      </Stack.Navigator>
}


  return (
    <NavigationContainer>
      {User()}
    </NavigationContainer>
  );
}