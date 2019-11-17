import React from "react";
import { StyleSheet } from "react-native";
import { Content } from "native-base";

import Layout from "../components/Layout";
import CurrentNumberCard from "../components/CurrentNumberCard";
import games from "../utils/games";

export default class RecentNumbers extends React.Component {
  render() {
    return (
      <Layout>
        <Content style={{ padding: 10 }}>
          {games.map((game, gameIdx) => {
            return <CurrentNumberCard key={gameIdx} game={game} />;
          })}
        </Content>
      </Layout>
    );
  }
}
