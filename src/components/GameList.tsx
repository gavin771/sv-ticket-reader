import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  List,
  ListItem,
  Text,
  Icon,
  Right,
  Left,
  Thumbnail,
  Body,
  Button
} from "native-base";

const games = [
  {
    name: "Cash Pot",
    image: require("../../assets/cashpot.png"),
    notes: "Draws everyday at 8:30AM, 10:30AM, 1PM, 3PM, 5PM & 8:25PM"
  },
  {
    name: "Pick 2",
    image: require("../../assets/pick2.png"),
    notes: "Coming Soon"
  },
  {
    name: "Pick 3",
    image: require("../../assets/pick3.png"),
    notes: "Coming Soon"
  },
  {
    name: "Pick 4",
    image: require("../../assets/pick4.png"),
    notes: "Coming Soon"
  },
  {
    name: "Lucky 5",
    image: require("../../assets/lucky5.png"),
    notes: "Coming Soon"
  },
  {
    name: "Dollaz",
    image: require("../../assets/dollaz.png"),
    notes: "Coming Soon"
  },
  {
    name: "Top Draw",
    image: require("../../assets/topdraw.png"),
    notes: "Coming Soon"
  },
  {
    name: "Lotto",
    image: require("../../assets/lotto.png"),
    notes: "Draws on Wednesday & Saturday at 8:25pm"
  },
  {
    name: "Super Lotto",
    image: require("../../assets/slotto.png"),
    notes: "Coming Soon"
  }
];

export default class GameList extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <List style={styles.list}>
        {games.map((game, idx) => {
          return (
            <ListItem
              thumbnail
              key={idx}
              button
              onPress={() => navigate("HomeGameScreen", { game: game.name })}
            >
              <Left>
                <Thumbnail source={game.image} />
              </Left>
              <Body>
                <Text style={styles.text}>{game.name}</Text>
                <Text style={styles.note} note numberOfLines={2}>
                  {game.notes}
                </Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const styles = StyleSheet.create({
  list: {},
  text: {
    marginLeft: 10
  },
  note: {
    marginLeft: 10,
    fontSize: 10
  }
});