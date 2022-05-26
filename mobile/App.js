// import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert, Text} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen, Logout, Singup, Login ,Landing} from "./src";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "rgb(227, 138, 5)" },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text
                  style={styles.SingUp}
                  onPress={() => navigation.navigate("Singup")}
                >
                  SingUp
                </Text>
                <Text
                  style={styles.Login}
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
                </Text>
              </View>
            ),
            title: "FoodDelivery",
          })}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Singup" component={Singup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  View:{
 flex:1,
flexDirection:"row",
  },
  SingUp: {
    color: "#ffff",
    marginRight: 4,
    fontWeight: "bold",
    padding: 9,
  },
  Login: {
    color: "rgb(227, 138, 5)",
    fontWeight: "bold",
    backgroundColor: "#ffff",
    padding: 9,
    borderRadius: 6,
    marginRight: 4,
  },
});
