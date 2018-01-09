import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import HTML from "react-native-render-html";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import TabsView from "../../tabsBar";
import Button from "../../button";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  inner: {
    flex: 1,
    justifyContent: "center"
  },
  tabsWrap: {
    height: 100,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  scrollWrap: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
    paddingLeft: 5,
    paddingRight: 5
  },
  buttons: {
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 5,
    position: "relative",
    top: -15
  },
  buttonStyles: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignContent: "center"
  },
  buttonTextStyles: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16
  },
  buttonWrapStyles: {
    alignSelf: "center",
    borderColor: "#175492",
    borderWidth: 1,
    marginBottom: 15
  }
});

const contentStyles = {
  classesStyles: {
    h2: {
      color: "#175492",
      textAlign: "center"
    },
    h1: {
      color: "#AFC4D9",
      position: "relative",
      top: -35,
      textAlign: "center"
    },
    p: {
      textAlign: "center",
      color: "#95989A"
    },
    homeOwnerBoxHeader: {
      color: "#AFC4D9",
      textAlign: "center"
    }
  }
};

const htmlHeader = `
<h2 class="h2" style="font-size: 0.9rem">HELPING VICTIMS OF</h2>
<h1 class="h1" style="font-size: 2rem">HURRICANE HARVEY</h1>
<p class="p" style="font-size: 1.2rem">Who has been affected?</p>
`;

export default class Home extends Component {
  _renderHome() {
    return (
      <View style={[styles.wrap]}>
        <View style={[styles.inner]}>
          <ScrollView contentContainerStyle={[styles.scrollWrap]}>
            <View style={[styles.contentWrap]}>
              <HTML
                html={htmlHeader}
                classesStyles={contentStyles.classesStyles}
              />
            </View>
            <View style={[styles.boxes]}>
              <Button
                text={"HOME OWNER"}
                action={Actions.residential}
                buttonStyles={styles.buttonStyles}
                buttonWrapStyles={styles.buttonWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
                showImage={true}
              />
              <Button
                text={"BUSINESS OWNER"}
                action={Actions.commercial}
                buttonStyles={styles.buttonStyles}
                buttonWrapStyles={styles.buttonWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
                showImage={true}
              />
            </View>
          </ScrollView>
        </View>
        <View style={[styles.tabsWrap]}>
          <TabsView />
        </View>
      </View>
    );
  }

  render() {
    return this._renderHome();
  }
}
