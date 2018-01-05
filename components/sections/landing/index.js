import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight
} from "react-native";
import axios from "axios";
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
  },
  textColor: {
    color: "#FFFFFF"
  },
  h1: {
    fontSize: responsiveFontSize(3)
  },
  h2: {
    fontSize: responsiveFontSize(2)
  }
});

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      response: []
    };
  }
  componentDidMount() {
    return axios
      .get("http://192.168.0.235:9999/landing")
      .then(response => {
        let ds = response;
        console.log(ds);
        this.setState({
          isLoading: false,
          response: response.data
        });
      })
      .catch(error => {
        console.warn(error);
      });
  }
  _renderLanding() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <TouchableHighlight onPress={Actions.home} style={[styles.wrap]}>
        <ScrollView contentContainerStyle={[styles.scrollWrap]}>
          <View style={[styles.image]}>
            <Image
              source={require("../../../assets/images/landing_image.png")}
            />
          </View>
          {
            <View style={[styles.contentWrap]}>
              <Text style={[styles.h2, styles.textColor]}>
                {this.state.response[0].subHeader}
              </Text>
              <Text style={[styles.h1, styles.textColor]}>
                {this.state.response[0].header}
              </Text>
            </View>
          }
        </ScrollView>
      </TouchableHighlight>
    );
  }

  render() {
    return this._renderLanding();
  }
}
