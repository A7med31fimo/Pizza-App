// import {Image, View, Text, Button, TextInput, KeyboardAvoidingView, li ,ScrollView} from "react-native";
// import { useEffect, useState } from "react";
// import {
//   getphotos, deletePhoto, addphoto
// } from "../../db/pizzaEdit/editPizza";
// import Item from "../Categories/Drinks";
// import { async } from "@firebase/util";
//  const photosList = () => {
//   const getphotoslist = async () => {
//     const c = await getphotos();
   
//     setphotos(c);
//     console.log("photos",c);
//   };

//   useEffect(() => {
//     getphotoslist();
//   }, []);

//   const [photos, setphotos] = useState([]);
//   const [photoName, setphotoName] = useState("");
//   return (
//     <View>
//       <View>
//         <ScrollView >

//           {photos.map((a) => (
          
//             <View key={a.id}>
              
//               <Item iconSrc={a.ref} text1={a.name} text2={a.cost} />
//               {/* <Button title="Delete" onPress={() => deleteCity(c.id)} /> */}
//             </View>

//           ))}
//         </ScrollView>
//       </View>
//       <View>

//         <View
//           style={{
//             position: 'absolute',

//             width: '100%',
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             alignItems: 'center'
//           }}
//         >
//           <TextInput
//             onChangeText={setphotoName}
//             style={{ flex: 1, borderColor: "black", borderWidth: 2 }}
//           />
//           <Button
//             title="Send"
//             onPress={() =>
//               addCity({ name: photoName || "new city" + photos.length })
//             }
//           />

//         </View>
//       </View>
//     </View>
//   );
// };

// export default photosList;
