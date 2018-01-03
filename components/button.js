import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    position: "absolute",
    left: 0,
    top: 0,
    flex: 1,
    height: "100%",
    width: "100%"
  },
  container: {
    paddingTop: 15,
    paddingBottom: 15
  }
});

class Button extends Component {
  static defaultProps = {
    image: require("../assets/images/landing_image.png"),
    showImage: false
  };

  _renderButton() {
    const {
      text,
      buttonStyles,
      buttonWrapStyles,
      buttonTextStyles,
      action
    } = this.props;

    if (this.props.showImage === true) {
      return (
        <TouchableHighlight style={buttonWrapStyles} onPress={action}>
          <View style={[buttonStyles]}>
            <Image style={styles.image} source={this.props.image} />
            <View style={styles.container}>
              <Text style={[buttonTextStyles]}>{text}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight style={buttonWrapStyles} onPress={action}>
          <View style={[buttonStyles]}>
            <View style={styles.container}>
              <Text style={[buttonTextStyles]}>{text}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    }
  }
  render() {
    return this._renderButton();
  }
}
export default Button;
