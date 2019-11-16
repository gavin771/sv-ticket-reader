import React, { Component } from "react";
import { Container } from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Header from "./Header";

export default class Layout extends Component {
  render() {
    const statusBarHeight = parseInt(getStatusBarHeight().toFixed(0), 10);

    return (
      <Container style={{ paddingTop: statusBarHeight }}>
        <Header />
        {this.props.children}
      </Container>
    );
  }
}
