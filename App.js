import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Scene, Router, Reducer, Actions } from "react-native-router-flux";
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

const refreshOnBack = () => { Actions.pop(); }

export default class App extends React.Component {
  componentDidMount() {
    OneSignal.configure({});
  }
  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Provider store={store}>
          <Scene key="container" duration={0}>
            <Scene
              key="landing"
              component={landing}
              hideNavBar={true}
              hideTabBar={true}
              initial
            />
            <Scene key="home" component={home} hideNavBar={true} />
            <Scene
              key="residential"
              component={residentialClaims}
              title="Residential Claims"
              backTitle="Back"
            />
            <Scene
              key="residentialClaims"
              component={residentialInsuranceClaims}
              title="Residential Claims Process"
              backTitle="Back"
            />
            <Scene
              key="deniedClaims"
              component={deniedClaims}
              title="Denied Claims"
              backTitle="Back"
            />
            <Scene key="damRelease" component={damRelease} title="Dam Release Claims" backTitle="Back" />
            <Scene key="faq" component={faq} title="FAQS" backTitle="Back" />
            <Scene key="contact" component={contact} title="Contact" backTitle="Back" />
          </Scene>
        </Provider>
      </Router>
    );
  }
}
