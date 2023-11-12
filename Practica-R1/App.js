import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginScreen from './src/components/LoginScreen'; // Asegúrate de importar LoginScreen adecuadamente
import MainScreen from './src/components/MainScreen'; // Asegúrate de importar MainScreen adecuadamente

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="login" component={LoginScreen} title="Login" initial={true} hideNavBar/>
        <Scene key="main" component={MainScreen} title="Main" />
    </Scene>
);

export default class App extends Component {
    render() {
        return (
            <Router scenes={scenes}>
                <StatusBar style="auto" />
            </Router>
        );
    }
}
