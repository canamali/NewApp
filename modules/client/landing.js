import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableWithoutFeedback } from 'react-native';
import ProjectLogo from "./images/da-logo-lineart.png"
import LandingLogo from "./images/land.png"
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


class LandingPage extends React.Component {
   onPress = () => {
    
  };
  render (){

    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={ProjectLogo}
          />
  
        <Image
          style={styles.largeLogo}
          source={LandingLogo}
          />
        <Text style={{color:"#ff8c1a", fontSize: 25, fontWeight: "600"}}>Learn. Connect. Access!</Text>
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Login')}>
          <View style={styles.button}>
            <Text style={{color:"#fff", fontSize: 20, fontWeight: "500"}}>Continue</Text>
          </View>
        </TouchableWithoutFeedback>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default LandingPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo:{
    width: 200,
    height: 60,
    alignSelf: 'center',
  },
  largeLogo:{
    width: 500,
    height: 500,
    alignSelf: 'center',
  },
  button:{
    backgroundColor: "#28a745",
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
    borderRadius: 50,
    color: "#fff",
  }
});
