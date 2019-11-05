import React from "react";
import { StyleSheet, View } from "react-native";
import { Row, Grid } from "react-native-easy-grid";
import { Button, Segment, Content, Text } from "native-base";
import ScanTicket from "../components/ScanTicket";
import EnterNumbers from "../components/EnterNumbers";

export default class HomeGame extends React.Component {
  state = {
    activePage: 1
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam("game", "Game")}`
    };
  };

  setMode = activePage => () => this.setState({ activePage });

  renderMode = () => {
    if (this.state.activePage === 1) {
      return <ScanTicket />;
    } else {
      return <EnterNumbers />;
    }
  };

  render() {
    return (
      <Grid>
        <Row size={1}>
          <Content padder>
            <Text style={styles.bodyText}>
              You can choose to enter your ticket numbers manually or scan your
              ticket.
            </Text>
          </Content>
        </Row>
        <Row size={8}>
          <Segment style={styles.segment}>
            <Button
              first
              active={this.state.activePage === 1}
              onPress={this.setMode(1)}
              style={
                this.state.activePage === 1
                  ? styles.activeSegment
                  : styles.inactiveSegment
              }
            >
              <Text>Scan Ticket</Text>
            </Button>
            <Button
              last
              active={this.state.activePage === 2}
              onPress={this.setMode(2)}
              style={
                this.state.activePage === 2
                  ? styles.activeSegment
                  : styles.inactiveSegment
              }
            >
              <Text>Enter Numbers</Text>
            </Button>
          </Segment>
          <View>
          <Content padder>{this.renderMode()}</Content>
          </View>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 14
  },
  segment: {
    backgroundColor: "#fff"
  },
  activeSegment: {
    fontSize: 14,
    color: "#111",
    borderBottomColor: "blue",
    borderBottomWidth: 2
  },
  inactiveSegment: {
    fontSize: 14,
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    color: "#eee"
  }
});
