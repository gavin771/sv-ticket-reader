import React, { Component } from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right
} from "native-base";
import { fromUnixTime, format } from "date-fns";

type CurrentNumberCardProps = {
  game: {
    name: string;
    shortName: string;
    image: ImageSourcePropType;
    notes: string;
    api: string;
  };
};

export default class CurrentNumberCard extends Component<
  CurrentNumberCardProps
> {
  state = {
    winningNumbers: null,
    drawDate: null,
    drawName: null
  };

  componentDidMount() {
    return fetch(this.props.game.api)
      .then(response => response.json())
      .then(responseJson => {
        let parsedNumbers = null;
        if (responseJson) {
          const timestampDate = Number(Object.keys(responseJson)[0]) / 1000;
          const responseData = responseJson[Object.keys(responseJson)[0]];
          const formattedDate = format(
            fromUnixTime(timestampDate),
            "do MMMM, yyyy"
          );
          const gameName = Object.keys(responseData)[0];
          if (gameName !== "latest-draw") {
            this.setState({ drawName: gameName.toUpperCase() });
          }

          parsedNumbers = responseData[gameName];
          this.setState({
            winningNumbers: parsedNumbers,
            drawDate: formattedDate
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <Card style={{ marginBottom: 15 }}>
        <CardItem header bordered>
          <Left>
            <Thumbnail source={this.props.game.image} />
            <Body>
              <Text>{this.props.game.name}</Text>
              {this.state.drawName && (
                <Text note style={{ fontSize: 12 }}>
                  Draw Name: {this.state.drawName}
                </Text>
              )}
              <Text note style={{ fontSize: 12 }}>
                Last Draw Date:{" "}
                {this.state.drawDate ? this.state.drawDate : "No draw found"}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody style={{ padding: 20 }}>
          {this.state.winningNumbers ? (
            <Text style={styles.numbers}>
              {this.state.winningNumbers.map((num, idx) => {
                if (idx < this.state.winningNumbers.length - 1) {
                  return " " + num + " -";
                } else {
                  return num;
                }
              })}
            </Text>
          ) : (
            <Text>No numbers found</Text>
          )}
        </CardItem>
        <CardItem footer>
          <Left>
            <Button success>
              <Text>Check Ticket</Text>
            </Button>
          </Left>
          <Right style={{ width: "100%" }}>
            <Button success>
              <Text>More Results</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  numbers: {
    color: "#008053",
    width: "100%",
    fontSize: 21,
    textAlign: "center"
  }
});
