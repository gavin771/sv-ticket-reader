import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";

import GameList from "../components/GameList";
import Layout from "../components/Layout";

type HomeProps = {
  navigation: {
    navigate: (string, object) => void;
  };
};

export default class Home extends React.Component<HomeProps> {
  render() {
    return (
      <Layout>
        <Content style={styles.container}>
          <GameList navigate={this.props.navigation.navigate} />
        </Content>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
