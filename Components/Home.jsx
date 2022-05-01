import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drinks from "./Categories/Drinks";
import pepsi from "../assets/Drinks/pepsi.png";
import cola from "../assets/Drinks/cola.png";
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#DDE0D3" }}>
      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            navigation.navigate("Drinks");
          }}
        >
          <Text>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text>Pizza</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.txtAdditions}>
        <Text>Last Additions</Text>
      </View>
      <View style={styles.container}>
        <ScrollView style={{ backgroundColor: "#7A7671" }}>
          <Drinks text1={"Pepsi"} text2={"EGP 10.00"} iconSrc={pepsi} />
          <Drinks text1={"cola"} text2={"EGP 10.00"} iconSrc={cola} />
          <Drinks text1={"cola"} text2={"EGP 10.00"} iconSrc={cola} />
          <Drinks text1={"cola"} text2={"EGP 10.00"} iconSrc={cola} />
          <Drinks text1={"cola"} text2={"EGP 10.00"} iconSrc={cola} />
        </ScrollView>
      </View>
      <View style={styles.txtfooter}>
        <Text>Produced By Hanksha Group</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  categories: {
    flex: 2,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#F71302",
  },
  item: {
    borderWidth: 0.5,
    borderColor: "#380401",
    borderStyle: "solid",
    paddingHorizontal: 45,
    backgroundColor: "#BDE0DB",
    borderBottomEndRadius: 4,
    borderTopStartRadius: 6,
    justifyContent: "space-between",
  },
  txtAdditions: {
    flex: 1,
    padding: 10,
    backgroundColor: "#BA0C00",
    marginBottom: 5,
    marginTop: 5,
    flexDirection: "row",
  },
  container: {
    flex: 12,
    flexDirection: "column",
    backgroundColor: "#E8EAED",
  },
  txtfooter: {
    flex: 1,
    padding: 10,
    backgroundColor: "#BA0C00",
    marginBottom: 5,
    marginTop: 5,
    flexDirection: "row",
  },
});
export default Home;