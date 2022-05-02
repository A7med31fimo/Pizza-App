import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

export default function Item({ image, label, price }) {
  return (
    <View style={styles.content}>
        
   <View style={{paddingHorizontal:7}} >
   <View style={styles.footer}>
   <Text style={styles.label}>{label}</Text>
   <Icon.Button 
        name="heart"
        size = {20}
        color = 'crimson'
        backgroundColor="white" 
        onPress = {() => alert('hi')}
        />

        {/* <Image source={Love} style = {styles.icon} /> */}
   </View>
 </View> 
 <Image source={{uri: image}} style = {styles.image} />


<View style={styles.footer}>
   <RadioButton 
       status = 'checked'
       color="red"
       value = 'Small'
       uncheckedColor="black"
   />
   <Text style = {styles.radio}>330 ml</Text>
   <RadioButton 
       color="red"
       value = 'Medium'
       uncheckedColor="black"
   />
   <Text style = {styles.radio}>1 Litre</Text>

    </View> 
 
 <View style = {styles.footer}>
 <Text style = {styles.label} > {price}.00 EGP </Text>
 <View style={styles.button}>
   <Button title="    + Add    " color = "crimson" />
 </View>
 </View>

 
</View>
);
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f7eceb",
    shadowColor: "#000", 
    shadowOffset:{ width: 2,height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 7,
    marginBottom: 20,
  },
  image: {
    width: "99%",
    height: 180,
  },
  label: {
    width : "97%",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom : 10
  },
  button: {
    borderRadius: 10,
    overflow: "hidden",
  },

  footer : {
    alignItems : 'center',
    marginTop:15,
    flexDirection: "row",
  },
  
  radio :{
    width : "50%"
  }
});