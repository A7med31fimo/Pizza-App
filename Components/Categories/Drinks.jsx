import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

export default function Item({ iconSrc, text1, text2 }) {
  return (
    <View style={[styles.content, styles.shadowProp]}>
      <Image source={iconSrc} style={styles.image} />

      <View style={styles.itemText}>
        <Text style={styles.itemText1}>{text1} </Text>
        <Text style={styles.itemText2}>{text2} </Text>
      </View>
      <View style={styles.btn}>
        <Button title="+ Add" color="#FB081F"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 70,
    height: 120,
  },
  itemText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  itemText1: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 45,
  },
  itemText2: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    marginTop: 80,
    width: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
});
