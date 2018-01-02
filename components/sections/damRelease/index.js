import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
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
  wrap: {
    flex: 1,
    backgroundColor: "white"
  },
  inner: {
    flex: 1
  },
  tabsWrap: {
    height: 100,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  scrollWrap: {
    alignItems: "center",
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
  gmapButton: {
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 5,
    position: "relative",
    top: -65
  },
  buttonStyles: {
    width: responsiveWidth(95),
    height: responsiveHeight(2),
    justifyContent: "center",
    alignContent: "center"
  },
  buttonStylesSmall: {
    width: responsiveWidth(30),
    height: responsiveHeight(1),
    justifyContent: "center",
    alignContent: "center"
  },
  buttonTextStyles: {
    color: "#175492",
    textAlign: "center",
    fontSize: responsiveFontSize(1.5)
  },
  buttonWrapStyles: {
    alignSelf: "center",
    borderColor: "#175492",
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15
  },
  buttonSmallWrapStyles: {
    alignSelf: "center",
    borderColor: "#175492",
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
    marginRight: 5,
    position: "relative",
    top: -30
  },
  boxContainer: {
    flexDirection: "row"
  },
  pageContent: {
    flexDirection: "column",
    alignSelf: "flex-start",
    paddingLeft: 15,
    paddingRight: 15
  },
  pageContent__B: {
    position: "relative",
    top: -25
  },
  ctaWrap: {
    justifyContent: "center",
    width: responsiveWidth(95),
    height: responsiveHeight(25),
    position: "relative",
    backgroundColor: "#343434",
    zIndex: 5,
    top: 45
  },
  cta: {
    padding: 20
  }
});

const contentStyles = {
  classesStyles: {
    h2: {
      color: "#175492",
      fontSize: responsiveFontSize(1.5),
      textAlign: "center"
    },
    h1: {
      color: "#AFC4D9",
      position: "relative",
      top: -35,
      fontSize: responsiveFontSize(3.5),
      textAlign: "center"
    },
    p: {
      textAlign: "center",
      color: "#95989A"
    },
    homeOwnerBoxHeader: {
      color: "#175492",
      textAlign: "center",
      fontSize: responsiveFontSize(1)
    },
    contentWrap: {
      position: "relative",
      top: -30
    },
    contentSubHeader: {
      color: "#175492",
      fontSize: responsiveFontSize(1.5)
    },
    contentHeader: {
      color: "#175492",
      fontSize: responsiveFontSize(3),
      position: "relative",
      top: -30,
      lineHeight: 25
    },
    contentParagraph: {
      color: "#95989A"
    },
    ctaHeader: {
      color: "white",
      fontSize: 22
    },
    ctaText: {
      color: "white"
    }
  }
};

const htmlHeader = `
<h2 class="h2">HELPING HOMEOWNERS RECOVER AFTER</h2>
<h1 class="h1">HURRICANE HARVEY</h1>
`;

const htmlHomeOwnersBox = `
<h1 class="homeOwnerBoxHeader">GET ANSWERS</h1>
`;

const htmlBusinessOwnersBox = `
<h1 class="homeOwnerBoxHeader">NEED HELP TO FILE A CLAIM?</h1>
`;

const htmlCTA = `
<h2 class="ctaHeader">Affected by the Controlled Release of the Dams?</h2>
<p class="ctaText">Releasing water from the reservoirs caused unthinkable damage. Let us stand up and fight for you.</p>
`;

const htmlPageContent = `
<h1 class="contentHeader">DAM RELEASE CLAIMS</h1>
<section class="contentWrap">
<p class="contentParagraph">The San Jacinto River Basin contains multiple floodplains
that put hundreds of thousands of Texas homes at risk
including tens of thousands in the greater Houston area, the
fastest growing region in the United States. Despite officials
knowing the risks, unregulated
housing development allowed  homes to be built
in the path of flood runoff. To remedy this, governmental entities created reservoirs and dams to regulate the water’s path and volume. When flood
management officials allowed for “controlled releases” of these dams during
Harvey, it robbed tens of thousands of homeowners of their
most cherished and valued possessions.
</p>
<p class="contentParagraph">During Harvey, the U.S. Army Corps
of Engineers and the San Jacinto River Authority had an ethical obligation to consider the
homeowners in the path of the controlled releases.
</p>
<p class="contentParagraph">You may have heard the team “Inverse condemnation”. This is a legal term used to describe the “taking” of private property for public use that (by design) damages the private property or decreases its value. This is exactly what the Army Corps of Engineers and San Jacinto River Authority did when they flooded thousands of homes during the controlled releases. 
</p>
<p class="contentParagraph">You may have heard the team “Inverse condemnation”. These government entities designed, maintained, and intentionally released massive amounts of water directly into areas they knew were subject to flooding, and did <strong>nothing to mitigate the flooding risk.</strong> As a result, victims in those areas may be eligible to sue for the devastating losses they sustained. 
</p>
</section>
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
            <View style={[styles.boxContainer]}>
              <Button
                text={"GET ANSWERS"}
                action={Actions.residentialClaims}
                buttonStyles={styles.buttonStylesSmall}
                buttonWrapStyles={styles.buttonSmallWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
              />
              <Button
                text={"NEED HELP?"}
                action={Actions.contactUs}
                buttonStyles={styles.buttonStylesSmall}
                buttonWrapStyles={styles.buttonSmallWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
              />
            </View>
            <View style={[styles.pageContent]}>
              <HTML
                html={htmlPageContent}
                classesStyles={contentStyles.classesStyles}
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
