import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";

import ArtistList from "./ArtistList";
import ArtistDetailView from "./ArtistDetailView";
import { getMusicData } from "./api-client";

export default class HomeView extends Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    getMusicData().then((data) => this.setState({ artists: data }));
  }

  render() {
    const artists = this.state.artists;

    return (
      <Router>
        <Stack key="root">
          <Scene
            key="artistList"
            component={() => <ArtistList artists={artists} />}
            title="Top Artists"
          />
          <Scene
            key="artistDetail"
            component={ArtistDetailView}
            title="Artist Detail"
          />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
