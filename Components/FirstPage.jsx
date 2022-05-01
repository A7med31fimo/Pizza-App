import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import pizza from "../assets/FirstPage/pizza.png";
import back from "../assets/FirstPage/back.png";

export default function FirstPage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: back }}
        resizeMode="cover"
        style={styles.Background}
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.Skiptxt}>Skip {">>"}</Text>
          </TouchableOpacity>
          <Text style={styles.Welcometxt}>
            Welcome to {"\n"} Yummy Pizza {"\n"} Restaurante
          </Text>
        </View>

        <Image style={styles.pizza} source={{ uri: pizza }} />
        <View style={styles.btn}>
          <Button title="Log in" color="#FB081F"></Button>
        </View>
        <Text style={styles.ORtxt}>OR</Text>
        <View style={styles.btn}>
          <Button title="Sign up" color="#FB081F"></Button>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Background: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  header: {
    flexDirection: "column",
  },
  Skiptxt: {
    color: "black",
    fontSize: 15,
    marginLeft: 280,
  },
  Welcometxt: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    margin: 4,
    textAlign: "left",
    marginLeft: 135,
  },
  pizza: {
    width: 160,
    height: 160,
    marginTop: 260,
  },
  ORtxt: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    width: 250,
    borderRadius: 10,
    overflow: "hidden",
  },
});
