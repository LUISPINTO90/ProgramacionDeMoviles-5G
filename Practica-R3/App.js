import React, { Component } from "react";
import LoginScreen from "./src/LoginScreen";
import HomeView from "./src/HomeView";
import { Actions, Scene, Router } from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginScreen} hideNavBar />
    <Scene key="main" component={HomeView} hideNavBar />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}
