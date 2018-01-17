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
  icon: {
    width: 25,
    height: 25,
    marginBottom: 5
  },
  homeIcon: {
    width: 45,
    height: 42.7
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
    activePage: false
  }
  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay() {
    this.setState({ pressStatus: true });
  }
  render() {
    return (
      <View style={{ height: 100 }}>
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
                this.state.pressStatus
                  ? styles.tabContainerActive
                  : styles.tabContainer
              }
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
              underlayColor={"#175492"}
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
              underlayColor={"#175492"}
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
            <TouchableHighlight
              onPress={Actions.faq}
              underlayColor={"#175492"}
              style={
                this.props.activePage
                  ? styles.tabContainerActive
                  : styles.tabContainer
              }
            >
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
              underlayColor={"#175492"}
              onPress={Actions.contact}
              style={
                this.props.activePage
                  ? styles.tabContainerActive
                  : styles.tabContainer
              }
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
      </View>
    );
  }
}

TabView.propTypes = propTypes;
export default TabView;
