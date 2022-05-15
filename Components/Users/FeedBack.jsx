import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { editFeedBack, AddItemsFeedBack } from "../../db/Edit/FeedBackEdit";
import Icon from "react-native-vector-icons/Entypo";
import { useState, useEffect } from "react";

export default function FeedBack({ navigation }) {
  const [icon1, setIcon1] = useState("heart-outlined");
  const [icon2, setIcon2] = useState("heart-outlined");
  const [icon3, setIcon3] = useState("heart-outlined");
  const [icon4, setIcon4] = useState("heart-outlined");
  const [icon5, setIcon5] = useState("heart-outlined");
  const [number, setNumber] = useState(0);

  const click1 = () => {
    setNumber(1);
    setIcon1("heart");
    setIcon2("heart-outlined");
    setIcon3("heart-outlined");
    setIcon4("heart-outlined");
    setIcon5("heart-outlined");
  };
  const click2 = () => {
    setNumber(2);
    setIcon1("heart");
    setIcon2("heart");
    setIcon3("heart-outlined");
    setIcon4("heart-outlined");
    setIcon5("heart-outlined");
  };
  const click3 = () => {
    setNumber(3);
    setIcon1("heart");
    setIcon2("heart");
    setIcon3("heart");
    setIcon4("heart-outlined");
    setIcon5("heart-outlined");
  };
  const click4 = () => {
    setNumber(4);
    setIcon1("heart");
    setIcon2("heart");
    setIcon3("heart");
    setIcon4("heart");
    setIcon5("heart-outlined");
  };
  const click5 = () => {
    setNumber(5);
    setIcon1("heart");
    setIcon2("heart");
    setIcon3("heart");
    setIcon4("heart");
    setIcon5("heart");
  };
  const [FeedBack, setFeedBack] = useState("");

  return (
    <View>
      <View style={styles.logoview}>
        <Image
          style={styles.logo}
          source={{ uri: "https://i.ibb.co/DKzryP5/logo.png" }}
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 16,
          justifyContent: "center",
        }}
      >
        {" "}
        please rate your Experience{" "}
      </Text>
      <Text
        style={{ fontSize: 13, textAlign: "center", justifyContent: "center" }}
      >
        {" "}
        your feedback is valuable to us{" "}
      </Text>

      <View style={styles.footer}>
        <Icon name={icon1} size={35} color="crimson" onPress={click1} />

        <Icon name={icon2} size={35} color="crimson" onPress={click2} />

        <Icon name={icon3} size={35} color="crimson" onPress={click3} />

        <Icon name={icon4} size={35} color="crimson" onPress={click4} />

        <Icon name={icon5} size={35} color="crimson" onPress={click5} />
      </View>

      <Text style={{ fontSize: 14, paddingTop: 20, paddingHorizontal: 30 }}>
        {" "}
        Tell us what you love or where we can improve{" "}
      </Text>

      <TextInput
        multiline={true}
        style={{
          height: 100,
          padding: 10,
          margin: 30,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "crimson",
        }}
        placeholder="Leave comment"
        onChangeText={setFeedBack}
      />

      <View style={styles.btnview}>
        <Button
          style={styles.btn}
          title="Submit"
          color="#FB081F"
          // onPress= {fuc2}
          onPress={() => {
            AddItemsFeedBack({ conatnt: FeedBack });
            console.log("feedback");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoview: {
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 250,
  },
  btnview: {
    margin: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {
    width: "50%",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: "row",
    // marginHorizontal : 135 ,
    width: "90%",
  },
});
