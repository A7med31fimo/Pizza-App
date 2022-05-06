import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
 } from 'react-native'
import { React, useState ,useEffect} from "react";
import { auth } from '../../db/Config';
 const UserInfo=()=> {
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
function getInfo(){
    if(auth.currentUser!=null)
    {setName(auth.currentUser.displayName)
    setEmail(auth.currentUser.email)
    }
}
    useEffect(() => {
        getInfo();
      }, []);
  return (
    <View style={styles.body}>
          <View style={styles.inps}>
            <Text style={styles.inp}>{Name}</Text>
            <Text style={styles.inp}>{email}</Text>
          </View>
        </View>
  )
}
export default UserInfo;

const styles = StyleSheet.create({
    inps: {
      alignItems: "center",
      marginTop: 30,
    },
    inp: {
      width: "90%",
      height: 40,
      borderWidth: 2,
      borderColor: "#FB081F",
      borderRadius: 10,
      marginBottom: 30,
      fontSize: 20,
      fontStyle: "italic",
      padding: 6,
      color: "#000000",
    },
    btn: {
      marginVertical: 5,
      width: "90%",
      borderRadius: 15,
      overflow: "hidden",
    },})