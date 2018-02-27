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
  tab: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  tabText: {
    color: "#BFBFBF",
    fontSize: responsiveFontSize(1),
    textAlign: "center"
  },
  tabTextActive: {
    color: "#FFFFFF",
    fontSize: responsiveFontSize(1),
    textAlign: "center"
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 5
  },
  homeIcon: {
    width: 35,
    height: 34
  },
  tabContainer: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
    backgroundColor: "#FFFFFF"
  },
  tabContainerActive: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#175492",
    backgroundColor: "#175492"
  }
});

class TabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }
  static defaultProps = {
    activeContactPage: false,
    activeFAQPage: false,
    activeHomeState: false,
    activeCommercialState: false,
    activeResidentialState: false
  }
  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay() {
    this.setState({ pressStatus: true });
  }
  render() {
    return (
      <View style={{ height: 90 }}>
        <Grid>
          <Col>
            <TouchableHighlight
              onPress={Actions.residential}
              onHideUnderlay={() => {
                this.setState({ pressStatus: false });
              }}
              onShowUnderlay={() => {
                this.setState({ pressStatus: true });
              }}
              style={
                this.props.activeResidentialState
                  ? styles.tabContainerActive
                  : styles.tabContainer
              }
            >
              <View style={[styles.tab]}>
                <Image
                  style={[styles.icon]}
                  source={this.props.activeResidentialState ? require("../assets/images/umbrella_active.jpg") : require("../assets/images/umbrella.jpg")}
                  resizeMethod='resize'
                />
                <Text style={
                  this.props.activeResidentialState
                    ? styles.tabTextActive
                    : styles.tabText
                }>HOUSEHOLD</Text>
              </View>
            </TouchableHighlight>
          </Col>
          <Col>
            <TouchableHighlight
              underlayColor={"#175492"}
              onPress={Actions.commercial}
              style={
                this.props.activeCommercialState
                  ? styles.tabContainerActive
                  : styles.tabContainer
              }
            >
              <View style={[styles.tab]}>
                <Image
                  style={[styles.icon]}
                  source={this.props.activeCommercialState ? require("../assets/images/building_active.jpg") : require("../assets/images/building.jpg")}
                  resizeMethod='resize'
                />
                <Text style={
                  this.props.activeCommercialState
                    ? styles.tabTextActive
                    : styles.tabText
                }>COMMERCIAL</Text>
              </View>
            </TouchableHighlight>
          </Col>
          <Col>
            <TouchableHighlight
              underlayColor={"#175492"}
              onPress={Actions.home}
              style={
                this.props.activeHomeState
                  ? styles.tabContainerActive
                  : styles.tabContainer
              }
            >
              <View style={[styles.tab]}>
                <Image
                  style={[styles.icon, styles.homeIcon]}
                  source={this.props.activeHomeState ? require("../assets/images/logo_icon_active.jpg") : require("../assets/images/logo_icon.jpg")}
                  resizeMethod='resize'
                />
              </View>
            </TouchableHighlight>
          </Col>
          <Col>
            <TouchableHighlight
              onPress={Actions.faq}
              underlayColor={"#175492"}
              style={
                this.props.activeFAQPage
                  ? styles.tabContainerActive
                  : styles.tabContainer
              }
            >
              <View style={[styles.tab]}>
                <Image
                  style={[styles.icon, styles.faq]}
                  source={this.props.activeFAQPage ? require("../assets/images/faq_active.jpg") : require("../assets/images/faq.jpg")}
                  resizeMethod='resize'
                />
                <Text style={
                  this.props.activeFAQPage
                    ? styles.tabTextActive
                    : styles.tabText
                }>FAQS</Text>
              </View>
            </TouchableHighlight>
          </Col>
          <Col>
            <TouchableHighlight
              underlayColor={"#175492"}
              onPress={Actions.contact}
              style={
                this.props.activeContactPage
                  ? styles.tabContainerActive
                  : styles.tabContainer
              }
            >
              <View style={[styles.tab]}>

                <Image
                  style={styles.icon}
                  source={this.props.activeContactPage ? require("../assets/images/phone_active.jpg") : require("../assets/images/phone.jpg")}
                  resizeMethod='resize'
                />
                <Text style={
                  this.props.activeContactPage
                    ? styles.tabTextActive
                    : styles.tabText
                }>CONTACT</Text>
              </View>
            </TouchableHighlight>
          </Col>
        </Grid>
      </View>
    );
  }
}

TabView.propTypes = propTypes;
export default TabView;
