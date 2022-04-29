import { View, Text,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Home = () => {
    const Stack = createNativeStackNavigator();
  return (
    <View>
     <View style={styles.categories}>
         <TouchableOpacity style={styles.item}>
        <Text>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
        <Text>Pizza</Text>
        </TouchableOpacity>
     </View>
     <View>
<ScrollView>

</ScrollView>
     </View>
    </View>
  )
}
const styles=StyleSheet.create({
categories:{
alignContent:"center",
alignItems:"center",
flexDirection:"row",
justifyContent:'space-between',
padding:20,
backgroundColor:"#F71302",
},
item:{
    borderWidth:0.5,
    borderColor:"#380401",
    borderStyle:'solid',
    paddingHorizontal:45,
    backgroundColor:"#BDE0DB",
    borderBottomEndRadius:4,
    borderTopStartRadius:6,
    justifyContent:'space-between',
}

})
export default Home