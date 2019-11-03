import React  from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";

import GameList from "../components/GameList";
import Header from "../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content style={styles.container}>
          <GameList />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
