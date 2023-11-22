import React from "react";
import { Actions, Scene, Router } from "react-native-router-flux";
import LoginScreen from "./src/LoginScreen";
import HomeView from "./src/HomeView";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginScreen} hideNavBar initial />
    <Scene key="main" component={HomeView} hideNavBar />
  </Scene>
);

const App = () => {
  return <Router scenes={scenes} />;
};

export default App;
