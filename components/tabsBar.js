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
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
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
    flex: 1
  },
  tabText: {
    color: "#BFBFBF",
    fontSize: responsiveFontSize(1),
    textAlign: "center"
  },
  icon: {
    width: responsiveWidth(5),
    height: responsiveHeight(2),
    marginBottom: 5
  },
  homeIcon: {
    width: responsiveWidth(10),
    height: responsiveHeight(5)
  },
  tabContainer: {
    alignItems: "stretch",
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF"
  }
});

class TabView extends React.Component {
  render() {
    return (
      <Grid style={[styles.tabsWrap]}>
        <Col>
          <TouchableHighlight
            onPress={Actions.residential}
            style={styles.tabContainer}
          >
            <View style={[styles.tab]}>
              <Image
                style={[styles.icon]}
                source={require("../assets/images/umbrella.png")}
              />
              <Text style={[styles.tabText]}>HOUSEHOLD</Text>
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
          <TouchableHighlight
            onPress={Actions.commercial}
            style={styles.tabContainer}
          >
            <View style={[styles.tab]}>
              <Image
                style={styles.icon}
                source={require("../assets/images/building.png")}
              />
              <Text style={[styles.tabText]}>COMMERCIAL</Text>
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
          <TouchableHighlight
            onPress={Actions.home}
            style={styles.tabContainer}
          >
            <View style={[styles.tab]}>
              <Image
                style={[styles.icon, styles.homeIcon]}
                source={require("../assets/images/logo_icon.png")}
              />
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
          <TouchableHighlight onPress={Actions.faq} style={styles.tabContainer}>
            <View style={[styles.tab]}>
              <Image
                style={styles.icon}
                source={require("../assets/images/faq.png")}
              />
              <Text style={[styles.tabText]}>FAQS</Text>
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
          <TouchableHighlight
            onPress={Actions.contact}
            style={styles.tabContainer}
          >
            <View style={[styles.tab]}>
              <Image
                style={styles.icon}
                source={require("../assets/images/phone.png")}
              />
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
