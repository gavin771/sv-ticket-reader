import React from "react";
import { Content } from "native-base";

import GameList from "../components/GameList";
import Layout from "../components/Layout";

type HomeProps = {
  navigation: {
    navigate: (string, object) => void;
  };
};

export default class Home extends React.Component<HomeProps> {
  render() {
    return (
      <Layout>
        <Content>
          <GameList navigate={this.props.navigation.navigate} />
        </Content>
      </Layout>
    );
  }
}
