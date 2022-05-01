import { View,Button } from 'react-native'
import React from 'react'

function Log_Sign_Home({ navigation }) {
    return (
      <View>
        <View style={{ padding: 20 }}>
          <Button
            title="Log In "
            onPress={() => {
              navigation.navigate("Log In");
            }}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Button
            title="Register"
            onPress={() => {
              navigation.navigate("Register");
            }}
          />
        </View>
      </View>
    );
  }

export default Log_Sign_Home