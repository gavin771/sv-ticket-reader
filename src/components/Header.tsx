import React, { Component } from "react";
import {
  Container,
  Header as NativeHeader,
  Left,
  Body,
  Right,
  Title,
  Thumbnail
} from "native-base";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <NativeHeader>
          <Left>
            <Thumbnail small source={require("../../assets/svicon.png")} />
          </Left>
          <Body>
            <Title>SV Ticket Reader</Title>
          </Body>
          <Right />
        </NativeHeader>
      </Container>
    );
  }
}
