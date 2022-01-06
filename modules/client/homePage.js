import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableWithoutFeedback, TextInput, SafeAreaView } from 'react-native';
import ProjectLogo from "./images/da-logo-lineart.png"
import PlantIcon from "./images/plant.png"
import ModuleIcon from "./images/greetings.jpeg"
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry, Platform } from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: "100%", flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 15, marginTop: 10 }}>
            <Image
              style={styles.tinyLogo}
              source={ProjectLogo}
            />

            <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 10 }}>
              <Image
                style={styles.XtinyLogo}
                source={PlantIcon}
              />
              <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>{" x20"}</Text>

            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ padding: 20, borderColor: "#28a745", borderWidth: 2, borderRadius: 10, margin: 10 }}>
              <Image
                style={styles.country}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>Greetings</Text>
            </View>

          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ padding: 20, margin: 10 }}>
              <Image
                style={styles.country}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 17, fontWeight: "500", textAlign: "center" }}>Market Place</Text>
            </View>
            <View style={{ padding: 20, margin: 10 }}>
              <Image
                style={styles.country}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 17, fontWeight: "500", textAlign: "center" }}>Professions</Text>
            </View>

          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ padding: 10, margin: 5 }}>
              <Image
                style={styles.country3}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 15, fontWeight: "500", textAlign: "center" }}>Market Place</Text>
              <View style={styles.inactiveCourse}></View>

            </View>
            <View style={{ padding: 10, margin: 5 }}>
              <Image
                style={styles.country3}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 15, fontWeight: "500", textAlign: "center" }}>Professions</Text>
              <View style={styles.inactiveCourse}></View>

            </View>
            <View style={{ padding: 10, margin: 5 }}>
              <Image
                style={styles.country3}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 15, fontWeight: "500", textAlign: "center" }}>Professions</Text>
              <View style={styles.inactiveCourse}></View>
            </View>

          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ padding: 20, margin: 10 }}>
              <Image
                style={styles.country}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 17, fontWeight: "500", textAlign: "center" }}>Market Place</Text>
              <View style={styles.inactiveCourse}></View>
            
            </View>
            <View style={{ padding: 20, margin: 10 }}>
              <Image
                style={styles.country}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 17, fontWeight: "500", textAlign: "center" }}>Professions</Text>
              <View style={styles.inactiveCourse}></View>
            
            </View>

          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ padding: 20, margin: 10 }}>
              <Image
                style={styles.country}
                source={ModuleIcon}
              />
              <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>Greetings</Text>
            </View>
            <View style={styles.inactiveCourse}></View>

          </View>


          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
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
