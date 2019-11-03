import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CurrentNumbers from "../screens/CurrentNumbers";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `Home`
      })
    },
    CurrentNumbers: {
      screen: CurrentNumbers,
      navigationOptions: ({ navigation }) => ({
        title: `Current Numbers`
      })
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        title: `Settings`
      })
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
    }
  }
);

export default createAppContainer(MainNavigator);
