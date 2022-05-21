import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";

import { deleteItem, editConversation } from "../../db/Edit/chat";
export default function Item({
  id,
  status,
  numberOfItems,
  user,
  totalCost,
  phone,
  address,
  comment,
  Cart,
  Date
}) {
  let A, B;
  // const [received, setReceived] = useState(A);
  // const [arrived, setArrived] = useState(B);
  if (status === "In kitchen") {
    A = false;
    B = true;
  } else if (status === "Received") {
    A = true;
    B = false;
  } else {
    A = true;
    B = true;
  }
  // setReceived(true);
  // setArrived(false);
  // status === "Received" ? (A = true) : false;

  const x = Cart;
  return (
    <View style={styles.content}>
      <View style={{ paddingHorizontal: 7 }}>
        <View style={styles.footer}>
          <View style={{ width: "90%" }}>
            <Image
              style={styles.image}
              source={{
                uri: "https://miro.medium.com/max/1080/1*4c6WJXtj5OYfq6d7ON4j0A.png",
              }}
            />
          </View>
          {/* <Icon
        name='trash'
        size = {25}
        color = 'grey'
        onPress = {() => {
          deleteItem(id);
        }}
        />  */}
        </View>

        <Text
          style={{
            color: "crimson",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            padding: 7,
          }}
        >
          {" "}
          Information{" "}
        </Text>

        <Text style={{ fontWeight: "bold" }}> User : {user}</Text>
        <Text style={{ fontWeight: "bold" }}> Phone : {phone} </Text>
        <Text style={{ fontWeight: "bold" }}> Address : {address} </Text>
        <Text style={{ fontWeight: "bold" }}> Comment : {comment} </Text>
        <Text style={{ fontWeight: "bold" }}> Status : {status} </Text>
        <Text style={{ fontWeight: "bold" }}> Date : {Date} </Text>
        <Text>
          {" "}
          ----------------------------------------------------------{" "}
        </Text>

        {x.map((e, index) => (
          <View key={index} style={styles.footer}>
            <Text style={{ fontWeight: "bold", color: "red" }}>
              {" "}
              {e.number}{" "}
            </Text>
            <Text style={{ fontWeight: "bold", width: "80%" }}>
              {" "}
              {e.label}{" "}
            </Text>
            <Text style={{ fontWeight: "bold", color: "red" }}> {e.size} </Text>
          </View>
        ))}

        <View style={styles.footer}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              width: "50%",
              color: "blue",
              marginBottom: 10,
            }}
          >
            {" "}
            Total number : {numberOfItems} items{" "}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "green",
              marginBottom: 10,
            }}
          >
            {" "}
            Total price : {totalCost}.00 EGP{" "}
          </Text>
        </View>
      </View>
      <View style={styles.foot}>
        <View style={styles.btn}>
          <Button
            title="Received"
            disabled={A}
            onPress={() => {
              editConversation(id, "Received");
            }}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Arrived"
            color="green"
            disabled={B}
            onPress={() => {
              editConversation(id, "Arrived");
            }}
          />
        </View>
      </View>
      {/* {status === "In kitchen" ? (
        <View style={styles.foot}>
          <View style={styles.btn}>
            <Button
              title="Received"
              disabled={false}
              onPress={() => {
                editConversation(id, "Received");
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="Arrived"
              color="green"
              disabled={true}
              onPress={() => {
                editConversation(id, "Arrived");
              }}
            />
          </View>
        </View>
      ) : status === "Received" ? (
        <View style={styles.foot}>
          <View style={styles.btn}>
            <Button
              title="Received"
              disabled={true}
              onPress={() => {
                editConversation(id, "Received");
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="Arrived"
              color="green"
              disabled={false}
              onPress={() => {
                editConversation(id, "Arrived");
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.foot}>
          <View style={styles.btn}>
            <Button
              title="Received"
              disabled={true}
              onPress={() => {
                editConversation(id, "Received");
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="Arrived"
              color="green"
              disabled={true}
              onPress={() => {
                editConversation(id, "Arrived");
              }}
            />
          </View>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 7,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginBottom: 20,
  },
  image: {
    width: "30%",
    height: 20,
  },
  footer: {
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  foot: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 6,
  },
  btn: {
    alignSelf: "center",
    width: "48%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
