import React from "react";
import { Content } from "native-base";

import Layout from "../components/Layout";

type ConfirmScanProps = {
  numbers: object;
};

export default class Home extends React.Component<ConfirmScanProps> {
  render() {
    return (
      <Layout>
        <Content>{this.props.numbers}</Content>
      </Layout>
    );
  }
}
