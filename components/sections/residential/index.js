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
    second: {
      position: "relative",
      top: -30
    },
    third: {
      position: "relative",
      top: -30
    },
    fourth: {
      position: "relative",
      top: -30
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
<h2 class="contentSubHeader">RESIDENTIAL</h2>
<h1 class="contentHeader">HARVEY INSURANCE CLAIMS</h1>
<section class="contentWrap">
<p class="contentParagraph first">We Are Texans.</p>
<p class="contentParagraph second">Helping Each Other Is What We Do.</p>
<p class="contentParagraph third">In August 2017, Hurricane Harvey made landfall off the Gulf Coast in
Texas. Within a few days, the massive storm poured
over 27 trillion gallons of water on Texas, causing flooding at unprecedented levels. 
Unfortunately, the devastation did not stop with the floods.
For residents in the Corpus Christi, Rockport,
Port Aransas, and surrounding areas, the wind speeds reached 150 mph or more, 
completely leveling homes and businesses. As a result, hundreds of thousands of people were displaced.When people returned to their
communities, many were left with nothing—no homes, no
cars, few belongings of any kind. For  these victims of Harvey, their
expected insurance payment would be all that would
separate them from total ruin.</p>
<p class="contentParagraph fourth">Unfortunately, that’s when the nightmare really started.</p>
</section>
`;

const htmlPageContent__B = `
<p class="contentParagraph first">Want to know what happens next?</p>
<p class="contentParagraph second">Let us guide you every step of the way.</p>
<p class="contentParagraph third">If you’re unsure of where to turn or what information is reliable,
let our site be your guide. We’ve put together some of the
most important information about insurance claims—why
claims take so long, what you can do to expedite the process,
the tactics insurance companies use to pressure you into
accepting settlements, and what you can do to level the
playing field. Use our site as a resource: file claims, ask
questions, become informed. We’ll keep you updated on the
latest developments regarding insurance laws while making
sure that you understand your rights along the way. If and when you are ready for more personalized assistance, our team will be here to help. We are ready to hold your insurance company accountable for denying, delaying, or underpaying your valid claims.</p>
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
                action={Actions.contact}
                buttonStyles={styles.buttonStylesSmall}
                buttonWrapStyles={styles.buttonSmallWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
              />
              <Button
                text={"NEED HELP?"}
                action={Actions.contact}
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
            <View style={[styles.buttons]}>
              <Button
                text={"Haven’t Submitted a Claim?"}
                action={Actions.residentialClaims}
                buttonStyles={styles.buttonStyles}
                buttonWrapStyles={styles.buttonWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
              />
              <Button
                text={"Having Trouble With Your Insurance Claim?"}
                action={Actions.contact}
                buttonStyles={styles.buttonStyles}
                buttonWrapStyles={styles.buttonWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
              />
            </View>
            <View style={[styles.ctaWrap]}>
              <View style={[styles.cta]}>
                <HTML
                  html={htmlCTA}
                  classesStyles={contentStyles.classesStyles}
                />
              </View>
            </View>
            <View>
              <Image
                source={require("../../../assets/images/google_map.jpg")}
              />
            </View>
            <View style={[styles.gmapButton]}>
              <Button
                text={"Learn Options Available to You"}
                action={Actions.damRelease}
                buttonStyles={styles.buttonStyles}
                buttonWrapStyles={styles.buttonWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
              />
            </View>
            <View style={[styles.pageContent, styles.pageContent__B]}>
              <HTML
                html={htmlPageContent__B}
                classesStyles={contentStyles.classesStyles}
              />
            </View>
            <View style={[styles.buttons]}>
              <Button
                text={"Understanding the Claims Process"}
                action={Actions.residentialClaims}
                buttonStyles={styles.buttonStyles}
                buttonWrapStyles={styles.buttonWrapStyles}
                buttonTextStyles={styles.buttonTextStyles}
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