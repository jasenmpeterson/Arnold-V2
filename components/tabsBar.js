import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
  Image,
  TouchableHighlight
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Actions } from "react-native-router-flux";

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  tabsWrap: {
    height: 100
  },
  tab: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF"
  },
  tabText: {
    color: "#BFBFBF",
    fontSize: responsiveFontSize(1),
    textAlign: "center"
  }
});

class TabView extends React.Component {
  state = {
    activeButton: "first"
  };

  render() {
    return (
      <Grid style={[styles.tabsWrap]}>
        <Col>
          <TouchableHighlight onPress={Actions.residential}>
            <View style={[styles.tab]}>
              <Text style={[styles.tabText]}>HOUSEHOLD</Text>
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
          <TouchableHighlight onPress={Actions.commercial}>
            <View style={[styles.tab]}>
              <Text style={[styles.tabText]}>COMMERCIAL</Text>
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
          <TouchableHighlight onPress={Actions.home}>
            <View style={[styles.tab]}>
              <Text style={[styles.tabText]}>HOME</Text>
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
          <TouchableHighlight onPress={Actions.faq}>
            <View style={[styles.tab]}>
              <Text style={[styles.tabText]}>FAQS</Text>
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
          <TouchableHighlight onPress={Actions.contact}>
            <View style={[styles.tab]}>
              <Text style={[styles.tabText]}>CONTACT</Text>
            </View>
          </TouchableHighlight>
        </Col>
      </Grid>
    );
  }
}

TabView.propTypes = propTypes;
export default TabView;
