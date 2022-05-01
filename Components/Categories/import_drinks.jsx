import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Item from "./Drinks";
import pepsi from "../../assets/Drinks/pepsi.png";
import up7 from "../../assets/Drinks/7up.png";
import cola from "../../assets/Drinks/cola.png";
import fayrouz from "../../assets/Drinks/fayrouz.png";
import moussy from "../../assets/Drinks/moussy.png";
import schweppes from "../../assets/Drinks/schweppes.png";
export default function Drinks({ navigation }) {
  const arrOfObjects = [
    { text1: "Pepsi", text2: "EGP 10.00", icon: pepsi },
    { text1: "Coca Cola", text2: "EGP 10.00", icon: cola },
    { text1: "7up", text2: "EGP 10.00", icon: up7 },
    { text1: "Fayrouz", text2: "EGP 10.00", icon: fayrouz },
    { text1: "Schweppes", text2: "EGP 10.00", icon: schweppes },
    { text1: "Moussy", text2: "EGP 20.00", icon: moussy },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {arrOfObjects.map((e) => (
          <Item text1={e.text1} text2={e.text2} iconSrc={e.icon} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 15,
  },
  title: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});
