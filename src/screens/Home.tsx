import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import GameList from "../components/GameList";
import Header from "../components/Header";
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <Text>Home Screen</Text>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
