import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Settings extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam("game", "Game")}`
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Game Screen</Text>
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
