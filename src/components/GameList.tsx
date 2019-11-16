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
  Body
} from "native-base";

import games from "../utils/games";

type GameListProps = {
  navigate: (string, object) => void;
};

export default class GameList extends Component<GameListProps> {
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
