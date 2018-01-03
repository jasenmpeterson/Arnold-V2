import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight
} from "react-native";
import { Actions } from "react-native-router-flux";
import HTML from "react-native-render-html";
import TabsView from "../../tabsBar";
import Button from "../../button";

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  scrollWrap: {
    paddingTop: 70,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1
  },
  contentWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1
  }
});

const contentStyles = {
  classesStyles: {
    h2: {
      color: "#FFFFFF",
      textAlign: "center",
      backgroundColor: "transparent",
      fontSize: 20
    },
    h1: {
      color: "#FFFFFF",
      position: "relative",
      top: -35,
      textAlign: "center",
      backgroundColor: "transparent"
    }
  }
};

const htmlHeader = `
<h2 class="h2">HELPING VICTIMS OF</h2>
<h1 class="h1" style="font-size: 2rem">HURRICANE HARVEY</h1>
`;

const htmlHomeOwnersBox = `
<h1 class="homeOwnerBoxHeader">HURRICANE HARVEY</h1>
`;

const htmlBusinessOwnersBox = `
<h1 class="homeOwnerBoxHeader">HURRICANE HARVEY</h1>
`;

export default class Landing extends Component {
  _renderLanding() {
    return (
      <TouchableHighlight onPress={Actions.home} style={[styles.wrap]}>
        <ScrollView contentContainerStyle={[styles.scrollWrap]}>
          <View style={[styles.image]}>
            <Image
              source={require("../../../assets/images/landing_image.png")}
            />
          </View>
          <View style={[styles.contentWrap]}>
            <View>
              <HTML
                html={htmlHeader}
                classesStyles={contentStyles.classesStyles}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableHighlight>
    );
  }

  render() {
    return this._renderLanding();
  }
}
