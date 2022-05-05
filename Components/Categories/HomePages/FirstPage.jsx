import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import back from "../../../assets/FirstPage/chef.png";
export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <ImageBackground
          source={back}
          resizeMode="center"
          style={styles.Background}
        >
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.Skiptxt}>Skip {">>"}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.foot}>
        <Text style={styles.Welcometxt}>WELCOME TO</Text>

        <View style={styles.logoview}>
          <Image
            style={styles.logo}
            source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
          />
        </View>
        <View style={styles.btns}>
          <View style={styles.btn}>
            <Button
              title="Log in"
              color="#FB081F"
              onPress={() => {
                navigation.navigate("Log In");
              }}
            ></Button>
          </View>
          <Text style={styles.ORtxt}>OR</Text>
          <View style={styles.btn}>
            <Button
              title="Sign up"
              color="#FB081F"
              onPress={() => {
                navigation.navigate("Register");
              }}
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Background: {
    flex: 1,
  },
  header: {
    flex: 2,
  },
  Skiptxt: {
    color: "#FB081F",
    fontSize: 15,
    margin: 5,
    fontWeight: "bold",
    textAlign: "right",
  },
  foot: {
    flex: 3,
    backgroundColor: "#FFECD4",
  },
  Welcometxt: {
    color: "#FB081F",
    fontSize: 20,
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoview: {
    alignItems: "center",
    marginTop: -50,
  },
  logo: {
    width: 350,
    height: 300,
  },
  ORtxt: {
    marginHorizontal: 15,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    width: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
});
