import React, { Component } from "react";
import {
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
      <NativeHeader
        style={{
          backgroundColor: "#fff",
          elevation: 3
        }}
      >
        <Left>
          <Thumbnail small source={require("../../assets/svicon.png")} />
        </Left>
        <Body>
          <Title style={{ color: "#111" }}>SV Ticket Reader</Title>
        </Body>
        <Right />
      </NativeHeader>
    );
  }
}
