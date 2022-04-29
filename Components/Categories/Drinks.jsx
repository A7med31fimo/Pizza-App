import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Item({ iconSrc, text1, text2 }) {
  return (
    <View style={styles.content}>
      <Image source={iconSrc} style={styles.image} />
      <View style={styles.itemText}>
        <Text style={styles.itemText1}>{text1} </Text>
        <Text style={styles.itemText2}>{text2} </Text>
      </View>
      <View style={styles.btn}>
        <Button title="Add to Cart" color="#C10E03"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#474745",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  image: {
    width: 70,
    height: 130,
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
    marginTop: 65,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "#ABC0C9",
    overflow: "hidden",
  },
});
