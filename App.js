import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Scene, Router, Reducer } from "react-native-router-flux";
import OneSignal from "react-native-onesignal";
import configureStore from "./store/configureStore";
import landing from "./components/sections/landing/index";
import home from "./components/sections/home/index";
import residentialClaims from "./components/sections/residential/index";
import residentialInsuranceClaims from "./components/sections/residentialClaims/index";
import deniedClaims from "./components/sections/deniedClaims/index";
import damRelease from "./components/sections/damRelease/index";
import faq from "./components/sections/faq/index";
import contact from "./components/sections/contact/index";
import TabsView from "./components/tabsBar";

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};

const store = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    OneSignal.configure({});
  }
  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Provider store={store}>
          <View>
            <Scene
              key="landing"
              component={landing}
              hideNavBar={true}
              initial
            />
            <Scene key="home" component={home} hideNavBar={true} />
            <Scene
              key="residential"
              component={residentialClaims}
              hideNavBar={true}
            />
            <Scene
              key="residentialClaims"
              component={residentialInsuranceClaims}
              hideNavBar={true}
            />
            <Scene
              key="deniedClaims"
              component={deniedClaims}
              hideNavBar={true}
            />
            <Scene key="damRelease" component={damRelease} hideNavBar={true} />
            <Scene key="faq" component={faq} hideNavBar={true} />
            <Scene key="contact" component={contact} hideNavBar={true} />
          </View>
        </Provider>
      </Router>
    );
  }
}
