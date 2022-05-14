import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/EvilIcons";
import { deleteItem, editConversation } from "../../db/Edit/chat";
export default function Item({
  id,
  image,
  label,
  status,
  size,
  price,
  number,
}) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertext}>PreAdmin</Text>
        <View style={styles.headericon}>
          <Icon
            name="user"
            size={50}
            color="blue"
            onPress={() => {
              navigation.navigate("INFO");
            }}
          ></Icon>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.content2}>
          <View style={{ paddingHorizontal: 7 }}>
            <View style={styles.footer}>
              <Image source={{ uri: image }} style={styles.image} />
              <View style={styles.header2}>
                <View style={styles.labelandicon}>
                  <Text style={styles.status2}>
                    user: {label}
                    {"\n"}status: {status}
                  </Text>
                </View>
                <Text style={styles.label2}>{size}</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.number}>{number} Items</Text>
            <Text style={styles.price}> {price}.00 EGP </Text>
          </View>
          <View style={styles.btns}>
            <View style={styles.btn}>
              <Button
                title="ARRIVED"
                onPress={() => {
                  editConversation(id, "Arrived");
                }}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="NO"
                color={"red"}
                onPress={() => {
                  editConversation(id, "No");
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "18%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headertext: {
    margin: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  headericon: {
    margin: 15,
  },
  content2: {
    // margin: 10,
    backgroundColor: "#FFF",
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginVertical: 10,
  },
  image: {
    width: "25%",
    height: 80,
    // alignItems: "center",
  },
  header2: {
    flexDirection: "column",
  },
  labelandicon: {
    flexDirection: "column",
  },
  status1: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    marginLeft: 15,
    color: "blue",
  },
  status2: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    marginLeft: 15,
    color: "red",
  },
  icon: {
    // width: "25%",
    margin: 20,
  },
  label2: {
    marginLeft: 10,
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
  price: {
    // color: "crimson",
    width: "25%",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  number: {
    width: "75%",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 7,
    //paddingBottom : 10
  },
  footer: {
    //alignItems : 'center',
    marginTop: 15,
    flexDirection: "row",
  },
  btns: {
    margin: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  btn: {
    width: "45%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
