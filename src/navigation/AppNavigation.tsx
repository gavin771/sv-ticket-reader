import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import RecentNumbers from "../screens/RecentNumbers";
import HomeNavigation from "./HomeNavigation";
import Settings from "../screens/Settings";
import {
  Footer as NativeFooter,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
import { StyleSheet } from "react-native";

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigation
    },
    RecentNumbers: {
      screen: RecentNumbers
    },
    Settings: {
      screen: Settings
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#f9f9f9",
      activeTintColor: "#000",
      style: {
        height: 60
      },
      labelStyle: {
        fontSize: 15,
        bottom: 15
      },
      tabStyle: {
        borderRightWidth: 1,
        borderRightColor: "#eee"
      }
    },
    tabBarComponent: props => {
      const currentTab = props.navigation.state.index;
      return (
        <NativeFooter style={{ marginBottom: -3 }}>
          <FooterTab style={styles.footer}>
            <Button
              vertical
              active={currentTab === 0}
              onPress={() => props.navigation.navigate("Home")}
              style={
                currentTab === 0 ? styles.activeButton : styles.inactiveButton
              }
            >
              <Icon
                name="ios-home"
                style={currentTab === 0 ? null : styles.inactiveText}
              />
              <Text style={currentTab === 0 ? null : styles.inactiveText}>
                Home
              </Text>
            </Button>
            <Button
              vertical
              active={currentTab === 1}
              onPress={() => props.navigation.navigate("RecentNumbers")}
              style={
                currentTab === 1 ? styles.activeButton : styles.inactiveButton
              }
            >
              <Icon
                name="ios-information-circle"
                style={currentTab === 1 ? null : styles.inactiveText}
              />
              <Text style={currentTab === 1 ? null : styles.inactiveText}>
                Recent Numbers
              </Text>
            </Button>
            <Button
              vertical
              active={currentTab === 2}
              onPress={() => props.navigation.navigate("Settings")}
              style={
                currentTab === 2 ? styles.activeButton : styles.inactiveButton
              }
            >
              <Icon
                name="ios-cog"
                style={currentTab === 2 ? null : styles.inactiveText}
              />
              <Text style={currentTab === 2 ? null : styles.inactiveText}>
                Settings
              </Text>
            </Button>
          </FooterTab>
        </NativeFooter>
      );
    }
  }
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff"
  },
  activeButton: {
    backgroundColor: "#008053",
    borderRadius: 0
  },
  inactiveButton: {
    backgroundColor: "#fff",
    borderRadius: 0
  },
  inactiveText: {
    color: "#c4e0d6"
  }
});

export default createAppContainer(MainNavigator);
