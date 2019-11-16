import React from "react";
import { StyleSheet, View } from "react-native";
import { Row, Grid } from "react-native-easy-grid";
import { Button, Tab, Tabs, Content, Text } from "native-base";

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
          <Tabs
            tabBarUnderlineStyle={{
              borderBottomWidth: 3,
              borderBottomColor: "#008053"
            }}
            tabContainerStyle={{
              elevation: 0,
              borderBottomWidth: 3
            }}
          >
            <Tab
              heading="Scan Ticket"
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTabTextStyle}
              tabStyle={styles.inactiveTabStyle}
              textStyle={styles.inactiveTabTextStyle}
            >
              <ScanTicket />
            </Tab>
            <Tab
              heading="Enter Your Numbers"
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTabTextStyle}
              tabStyle={styles.inactiveTabStyle}
              textStyle={styles.inactiveTabTextStyle}
            >
              <EnterNumbers />
            </Tab>
          </Tabs>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 14
  },
  activeTabStyle: {
    backgroundColor: "#fff",
    borderBottomWidth: 3
  },
  activeTabTextStyle: {
    color: "#008053"
  },
  inactiveTabStyle: {
    backgroundColor: "#fff"
  },
  inactiveTabTextStyle: {
    color: "#c5c5c5"
  }
});
