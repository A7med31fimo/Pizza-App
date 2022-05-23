import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {/* <View style={styles.header}> */}
 

        <Image
          source={{ uri: "https://i.ibb.co/0KmHhp2/chef.png" }}
          style={styles.Background}
        >
          {/* <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.Skiptxt}>Skip {">>"}</Text>
          </TouchableOpacity> */}
        </Image>
        {/* </View> */}

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
            {/* <Text style={styles.ORtxt}>OR</Text> */}
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
        
      </ScrollView>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Background: {
    flex: 0.5,
    resizeMode: "contain",
  },
  header: {
    flex: 0.5,
  },
  Skiptxt: {
    color: "#FB081F",
    fontSize: 15,
    margin: 5,
    fontWeight: "bold",
    textAlign: "right",
  },
  foot: {
    backgroundColor: "#FFECD4",
    flex: 2,
  },
  Welcometxt: {
    color: "#FB081F",
    fontSize: 20,
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoview: {
    backgroundColor: "#FFECD4",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: -50,
  },
  ORtxt: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  btns: {
    marginTop: -40,
 
    backgroundColor: "#FFECD4",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 30,
  },
  btn: {
    width: 250,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom : 10 ,
  },
});
