import React, { Component } from "react";
import { ImageSourcePropType } from "react-native";
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
import { fromUnixTime, format, parse, parseISO } from "date-fns";

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
    drawDate: null
  };

  componentDidMount() {
    return fetch(this.props.game.api)
      .then(response => response.json())
      .then(responseJson => {
        let parsedNumbers = null;
        if (responseJson) {
          const timestampDate = Number(Object.keys(responseJson)[0]) / 1000;
          const formattedDate = format(
            fromUnixTime(timestampDate),
            "do MMMM, yyyy"
          );
          console.log(responseJson);

          this.setState(
            {
              winningNumbers: parsedNumbers,
              drawDate: formattedDate
            },
            function() {}
          );
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
              <Text note style={{ fontSize: 12 }}>
                Last Draw Date:{" "}
                {this.state.drawDate ? this.state.drawDate : "No draw found"}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody style={{ padding: 20 }}>
          <Text style={{ fontSize: 13 }}>
            Winning Number/s: {this.state.winningNumbers || "No numbers found"}
          </Text>
        </CardItem>
        <CardItem footer>
          <Left>
            <Button transparent>
              <Text>Check Ticket</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text>More Results</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
