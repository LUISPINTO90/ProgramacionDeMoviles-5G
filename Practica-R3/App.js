import React from "react";
import { Actions, Scene, Router } from "react-native-router-flux";
import LoginScreen from "./src/LoginScreen";
import HomeView from "./src/HomeView";
import ArtistDetailView from "./src/ArtistDetailView";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginScreen} hideNavBar />
    <Scene key="main" component={HomeView} back />
    <Scene key="artistDetail" component={ArtistDetailView} back />
  </Scene>
);

const App = () => {
  return <Router scenes={scenes} />;
};

export default App;
