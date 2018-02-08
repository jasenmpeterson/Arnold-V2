import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Scene, Router, Reducer, Actions } from "react-native-router-flux";
import OneSignal from "react-native-onesignal";
import configureStore from "./store/configureStore";
import landing from "./components/sections/landing/index";
import home from "./components/sections/home/index";
import residentialClaims from "./components/sections/residential/index";
import commercialClaims from "./components/sections/commercial/index";
import commercialInsuranceClaims from "./components/sections/commercialClaims/index";
import residentialInsuranceClaims from "./components/sections/residentialClaims/index";
import deniedClaims from "./components/sections/deniedClaims/index";
import damRelease from "./components/sections/damRelease/index";
import faq from "./components/sections/faq/faq";
import faqOne from "./components/sections/faq/faqOne";
import faqTwo from "./components/sections/faq/faqTwo";
import faqThree from "./components/sections/faq/faqThree";
import faqFour from "./components/sections/faq/faqFour";
import faqFive from "./components/sections/faq/faqFive";
import faqSix from "./components/sections/faq/faqSix";
import faqSeven from "./components/sections/faq/faqSeven";
import faqEight from "./components/sections/faq/faqEight";
import faqNine from "./components/sections/faq/faqNine";
import faqTen from "./components/sections/faq/faqTen";
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
StatusBar.setBarStyle('default', true);

export default class App extends React.Component {
  componentDidMount() {
    OneSignal.configure({});
  }
  render() {
    return (
      <Router
        createReducer={reducerCreate}
        sceneStyle={{ top: -20 }}
        navigationBarStyle={{ top: -20, padding: 0, margin: 0, height: 45, borderBottomWidth: 0 }}
        titleStyle={{ fontSize: 14 }}
        backButtonTextStyle={{ fontSize: 14 }}
        leftButtonIconStyle={{ width: 10, height: 10 }}
      >
        <Provider store={store}>
          <Scene
            key="container" duration={0}
          >
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
              hideNavBar={true}
            />
              <Scene
                  key="commercial"
                  component={commercialClaims}
                  title="Commercial Claims"
                  backTitle="Back"
                  hideNavBar={true}
              />
            <Scene
              key="residentialClaims"
              component={residentialInsuranceClaims}
              title="Residential Claims Process"
              backTitle="Back"
            />
              <Scene
              key="commercialClaims"
              component={commercialInsuranceClaims}
              title="Commercial Claims Process"
              backTitle="Back"
            />
            <Scene
              key="deniedClaims"
              component={deniedClaims}
              title="Denied Claims"
              backTitle="Back"
            />
            <Scene key="damRelease" component={damRelease} title="Dam Release Claims" backTitle="Back" />
            <Scene key="faq" component={faq} title="FAQS" backTitle="Back" hideNavBar={true} />
            <Scene key="faqOne" component={faqOne} title="What are my rights as an insured party?" backTitle="Back"  />
            <Scene key="faqTwo" component={faqTwo} title="How much are my losses worth?" backTitle="Back"  />
            <Scene key="faqThree" component={faqThree} title="Why is my claim taking so long?" backTitle="Back"  />
            <Scene key="faqFour" component={faqFour} title="What if I had coverage but was still denied?" backTitle="Back"  />
            <Scene key="faqFive" component={faqFive} title="What If I Don't Have Flood Insurance?" backTitle="Back"  />
            <Scene key="faqSix" component={faqSix} title="What Do I Do If My Insurance Company Won’t Help Me Rebuild?" backTitle="Back"  />
            <Scene key="faqSeven" component={faqSeven} title="Do I Have Options If My Insurance Isn’t Covering All of the Damage?" backTitle="Back"  />
            <Scene key="faqEight" component={faqEight} title="What If My Insurance Won’t Cover Additional Living Expenses?" backTitle="Back"  />
            <Scene key="faqNine" component={faqNine} title="Can I Retrieve my Items from my Home After a Prolonged Flood?" backTitle="Back"  />
            <Scene key="faqTen" component={faqTen} title="Why Should I Hire an Attorney Before I File My Insurance Claim?" backTitle="Back"  />
            <Scene key="contact" component={contact} title="Contact" backTitle="Back" />
          </Scene>
        </Provider>
      </Router>
    );
  }
}
