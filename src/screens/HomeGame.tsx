import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Row, Grid } from "react-native-easy-grid";
import { Tab, Tabs, Content, Text } from "native-base";

import ScanTicket from "../components/ScanTicket";
import EnterNumbers from "../components/EnterNumbers";
import { ScannedNumbersContext } from "../context";

export default function HomeGame() {
  const [activePage, setActivePage] = useState(1);
  const [isScanned, setScanned] = useState(false);
  const [scannedNumbers, setScannedNumbers] = useState(null);

  const updateNumberContext = numbers => {
    setScannedNumbers(numbers);
  };
  const updateScannedState = isScanned => {
    setScanned(isScanned);
  };

  return (
    <ScannedNumbersContext.Provider
      value={{
        numbers: scannedNumbers,
        isScanned: isScanned,
        updateNumbers: updateNumberContext,
        updateScannedState: updateScannedState
      }}
    >
      <Grid>
        <Row size={1} style={{ padding: 5 }}>
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
              <Content padder>
                {isScanned ? <EnterNumbers /> : <ScanTicket />}
              </Content>
            </Tab>
            <Tab
              heading="Enter Your Numbers"
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTabTextStyle}
              tabStyle={styles.inactiveTabStyle}
              textStyle={styles.inactiveTabTextStyle}
            >
              <Content padder>
                <EnterNumbers />
              </Content>
            </Tab>
          </Tabs>
        </Row>
      </Grid>
    </ScannedNumbersContext.Provider>
  );
}

HomeGame.navigationOptions = ({ navigation }) => {
  return { title: `Read ${navigation.getParam("game", "Game")} Ticket` };
};

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
