import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableWithoutFeedback, TextInput } from 'react-native';
import ProjectLogo from "./images/da-logo-lineart.png"
import GoogleLogin from "./images/google.png"
import FacebookLogin from "./images/facebook.png"
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


class LoginPage extends React.Component {
   onPress = () => {

  };
   onChangeText = () => {

  };
  render (){

    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={ProjectLogo}
        />
  
  
        <View>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            placeholder="Email"
            keyboardType='email-address'
          />
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeText}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.right}>
          <Text style={{ color: "#06f", fontSize: 15, fontWeight: "400", textAlign: "right" }}>Forgot password?</Text>
        </View>
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Language')}>
          <View style={styles.button}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Signup')}>
          <Text style={{ color: "#282c34", fontSize: 15, fontWeight: "400" }}>
            New member?
            <Text style={{ color: "#06f", fontSize: 15, fontWeight: "400" }}>{" Sign up"}</Text>
          </Text>
        </TouchableWithoutFeedback>
  
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 25 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 120, textAlign: 'center' }}>Or Continue with</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>
        <View style={{ marginVertical: 20, width: "60%", }}>
  
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={styles.socialView}>
              <Image
                style={styles.social}
                source={GoogleLogin}
              />
              <Text style={{ color: "black", fontSize: 20, fontWeight: "500", width: 100 }}>{"   Google"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ marginVertical: 20, width: "60%", }}>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={styles.socialView}>
              <Image
                style={styles.social}
                source={FacebookLogin}
              />
              <Text style={{ color: "black", fontSize: 20, fontWeight: "500", width: 125 }}>{"   Facebook"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
  
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default LoginPage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialView: {
    borderColor: "#28a745",
    borderWidth: 2,
    borderRadius: 5,
    // width: "100%",
    paddingVertical: 10,
    justifyContent: 'center',
    flexDirection: "row",
  },
  right: {
    width: "75%",
  },
  tinyLogo: {
    width: 200,
    height: 60,
    alignSelf: 'center',
  },
  social: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 40,
    margin: 10,
    borderRadius: 10,
    color: "#fff",
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
