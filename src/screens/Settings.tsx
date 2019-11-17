import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Content } from "native-base";

import Layout from "../components/Layout";

export default class Settings extends React.Component {
  render() {
    return (
      <Layout>
        <Content style={{ padding: 10 }}>
          <View style={styles.container}>
            <Text>Settings Screen</Text>
          </View>
        </Content>
      </Layout>
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
