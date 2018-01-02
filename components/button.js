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

class Button extends Component {
  render = () => {
    const {
      text,
      image,
      buttonStyles,
      buttonWrapStyles,
      buttonTextStyles,
      action
    } = this.props;
    return (
      <TouchableHighlight style={buttonWrapStyles} onPress={action}>
        <View style={buttonStyles}>
          <Text style={buttonTextStyles}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  };
}
export default Button;
