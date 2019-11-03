import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CurrentNumbers extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Current Numbers Screen</Text>
      </View>
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
