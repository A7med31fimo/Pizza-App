import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import Home from "./Components/Categories/HomePages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./Components/Categories/HomePages/FirstPage";
import Card from "./Components/Categories/CardItems/Card";
import INFO from "./Components/Users/UserInfo";
import ChatAdmin from "./Components/AdminManagement/chatAdmin";
import FeedBack from "./Components/Users/FeedBack";
import getFeedBack from "./Components/AdminManagement/getFeedBacks";
import PreAdmin from "./Components/AdminManagement/PreAdmin";
import { LogBox } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release',
'Setting a timer for a long period of time'

]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Log In" component={Login} />

        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ title: "Getting Start" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Explore Menu", headerShown: false }}
        />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="INFO" component={INFO} />
        <Stack.Screen name="ChatAdmin" component={ChatAdmin} />
        <Stack.Screen
          name="PreAdmin"
          component={PreAdmin}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="getFeedBack" component={getFeedBack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
