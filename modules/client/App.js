import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableWithoutFeedback, TextInput, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from "./landing"
import LoginPage from "./login"
import SignupPage from "./register"
import HomePage from "./homePage"
import LanguageSelectionPage from "./languageSelection"


const Stack = createNativeStackNavigator();

export default function App() {
  const onPress = () => {
    
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={LandingPage} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginPage} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupPage} />
        <Stack.Screen options={{headerShown: false}} name="Index" component={HomePage} />
        <Stack.Screen name="Language" component={LanguageSelectionPage} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveCourse: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: 10,

  },
  country: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderColor: "#f2f2f2",
    borderWidth: 10,

  },
  country3: {
    width: 80,
    height: 80,
    borderRadius: 20,
    borderColor: "#f2f2f2",
    borderWidth: 10,

  },
  right: {
    width: "75%",
  },
  XtinyLogo: {
    width: 25,
    height: 25,
  },
  tinyLogo: {
    width: 120,
    height: 36,
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
