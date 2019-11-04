import React, { Component } from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import HomeGameScreen from "../screens/HomeGame";

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    HomeGameScreen: {
      screen: HomeGameScreen
    }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: "Arial" },
          android: { fontFamily: "Roboto" }
        })
      }
    }
  }
);
