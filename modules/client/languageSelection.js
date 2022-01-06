import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableWithoutFeedback, TextInput } from 'react-native';
import ProjectLogo from "./images/da-logo-lineart.png"
import GhanaIcon from "./images/ghana.png"
import FacebookLogin from "./images/facebook.png"
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

class LanguageSelectionPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={ProjectLogo}
        />
        <Text style={{ color: "#ff8c1a", fontSize: 25, fontWeight: "600" }}>Select a language</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 20, borderColor: "#f25511", borderWidth: 2, borderRadius: 10, margin: 10 }}>
            <Image
              style={styles.country}
              source={GhanaIcon}
            />
            <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>Twi</Text>
          </View>
          <View style={{ padding: 20, borderColor: "#f25511", borderWidth: 2, borderRadius: 10, margin: 10 }}>
            <Image
              style={styles.country}
              source={GhanaIcon}
            />
            <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>Yuroba</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 20, borderColor: "#f25511", borderWidth: 2, borderRadius: 10, margin: 10 }}>
            <Image
              style={styles.country}
              source={GhanaIcon}
            />
            <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>Swahili</Text>
          </View>
          <View style={{ padding: 20, borderColor: "#f25511", borderWidth: 2, borderRadius: 10, margin: 10 }}>
            <Image
              style={styles.country}
              source={GhanaIcon}
            />
            <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>Ga</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 20, borderColor: "#f25511", borderWidth: 2, borderRadius: 10, margin: 10, backgroundColor: "#ffc107" }}>
            <Image
              style={styles.country}
              source={GhanaIcon}
            />
            <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>Igbo</Text>
          </View>

        </View>

        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Index')}>
          <View style={styles.button}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>Continue</Text>
          </View>
        </TouchableWithoutFeedback>



        <StatusBar style="auto" />
      </View>
    );
  }
}

export default LanguageSelectionPage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  country: {
    width: 75,
    height: 74,
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
