import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import logo from "../../assets/FirstPage/logo.png";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.text1}>Your Cart looks empty!</Text>
      <Text style={styles.text2}>Please add some item from the menu.</Text>
      <View style={styles.btn}>
        <Button title="Explore Menu" color="#FB081F"></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 350,
    height: 350,
    marginTop: -250,
  },
  text1: {
    marginTop: -40,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginVertical: 10,
  },
  text2: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
    marginBottom: 20,
  },
  btn: {
    width: 250,
    borderRadius: 10,
    overflow: "hidden",
  },
});
