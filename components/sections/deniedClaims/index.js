import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
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
    alignItems: "center"
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
    height: responsiveHeight(6),
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
  buttonImageTextStyles: {
    color: "#FFFFFF"
  },
  buttonWrapStyles: {
    alignSelf: "center",
    borderColor: "#175492",
    borderWidth: 1,
    marginBottom: 15
  },
  buttonSmallWrapStyles: {
    alignSelf: "center",
    borderColor: "#175492",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
    marginRight: 5,
    position: "relative",
    top: -30
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: 40
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
  },
  bullet: {
    color: "#95989A"
  },
  image: {
    resizeMode: "cover",
    position: "absolute",
    left: 0,
    top: 0,
    flex: 1,
    height: "100%",
    width: "100%"
  },
  headerWrap: {
    width: "100%"
  },
  headerContent: {
    position: "relative",
    top: 40
  }
});

const contentStyles = {
  classesStyles: {
    h2: {
      color: "#FFFFFF",
      backgroundColor: "transparent",
      fontSize: responsiveFontSize(1.5),
      textAlign: "center"
    },
    h1: {
      color: "#FFFFFF",
      position: "relative",
      top: -35,
      backgroundColor: "transparent",
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
    contentSubHeader: {
      color: "#175492",
      fontSize: responsiveFontSize(1.5)
    },
    contentHeader: {
      color: "#175492",
      fontSize: responsiveFontSize(3),
      position: "relative",
      top: -30,
      lineHeight: 30
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
    },
    wrap: {
      position: "relative",
      top: -30
    },
    list: {
      position: "relative",
      left: -15
    }
  }
};

const htmlHeader = `
<h2 class="h2" style="font-size: 0.9rem">HELPING HOMEOWNERS RECOVER AFTER</h2>
<h1 class="h1" style="font-size: 2rem">HURRICANE HARVEY</h1>
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
<h2 class="contentSubHeader" style="font-size: 0.9rem">RESIDENTIAL</h2>
<h1 class="contentHeader" style="font-size: 2rem">DENIED INSURANCE CLAIMS</h1>
  <div class="wrap">
  <p class="contentParagraph">Harvey left homeowners with massive amounts of
  damage—but maybe you weren’t worried about your own
  claims. After all, you’ve been paying for insurance for years
  to protect you from exactly this type of situation. You simply
  expected to get the payout you were promised when you
  bought the policy. Then the unthinkable happened: Your
  claim was denied. How could that be? How could an
  insurance company deny your claim, and deprive you of
  promised resources at the most desperate moment in your
  life? Don’t they realize you won’t be able to rebuild unless
  they pay your claim? They do realize that. In fact, they’re 
  counting on it. They know that despite having legal options,
  denying a claim is enough to get most people to give up on
  seeking compensation.</h3>
  <p class="contentParagraph">#1 <strong>Speak with an Insurance Claims Attorney</strong></p>
  <p class="contentParagraph">Hurricane Harvey left homeowners with massive amounts of
  damage—but maybe you weren’t worried about your own
  claim. After all, you’ve been paying  insurance premiums for years
  to protect you from this type of situation. You simply
  expected to get the payout you were promised when you
  bought the policy. Then the unthinkable happened: Your
  claim was denied, underpaid, or delayed.</p>
  <p class="contentParagraph">How could your
  insurance company deprive you of the protection you were promised when you needed it most? Unfortunately, most insurance companies know that despite having legal options,
  denying a claim is enough to get most people to give up on
  seeking compensation. This is a wrong we intend to right.</p>
  <p class="contentParagraph"><strong>What are my rights as an insured property owner?</strong></p>
  <p class="contentParagraph">As an insured, your primary rights include the following: </p>
  <section class="list">
  <ul>
  <li>You have the right to a timely and thorough investigation of your claim.</li>
  <li>You have the right to full, good-faith payment of your policy for a valid claim.</li>
  <li>You have the right to receive payment within a reasonable amount of time.</li>
  <li>You have the right to know why your claim was denied, if it was.</li>
  <li>You have the right to hold insurers accountable if you believe that your claim was denied in bad faith.</li>
  </ul>
  </section>
  <p class="contentParagraph">"Good faith" versus "bad faith" isn't about whether your insurance company will pay for your damage or not. Rather, it’s a legal term that describes whether an insurance company is living up to its obligations under your policy or contract, and complying with Texas law Insurance companies are required to thoroughly investigate every claim with the intent of determining the root cause of the damage. If they fail to conduct an adequate investigation, underpay, or deny a valid claim, they are not acting in good faith. </p>
  <p class="contentParagraph">Here are some steps you should take if your claim was denied:</p>
  <p class="contentParagraph">#1 <strong>FIND OUT WHY YOUR CLAIM WAS DENIED</strong></p>
  <p class="contentParagraph">The first step to filing an appeal is countering the reasons
  for the denial.</p>
  <p class="contentParagraph">The common reasons for denial are:</p>
  <section class="list">
  <ul>
  <li>Not filed on time</li>
  <li>Damages sustained are excluded under the policy </li>
  <li>Fraud is suspected</li>
  <li>Policy limits are met/exceeded</li>
  <li>Premiums are unpaid</li>
  <li>Documentation is lacking</li>
  </ul>
  </section>
  <p class="contentParagraph">#2 <strong>WRITE AN APPEAL LETTER</strong></p>
  <p class="contentParagraph">Once you know why your claim was denied, you should gather
  documents to prove that you are rightfully owed a payout. The key here is to provide enough
  evidence that the insurance adjuster is forced to settle with
  you, rather than go to court. Unfortunately, gathering this
  evidence may be as mentally-taxing and time-consuming as
  paying for repairs yourself.</p>
  <p class="contentParagraph">Without legal training or experience, gathering the evidence 
  for the letter of appeal can be difficult at best. Furthermore,
  the insurance company has virtually unlimited resources (or
  so they would have you believe). They’re willing to make the
  process incredibly costly for both sides, knowing that you’re
  more likely to give in than they are.
  </p>
  <p class="contentParagraph">The best solution for this step is to hire an attorney to help
you with the appeal if your claim is denied.
</p>
  <p class="contentParagraph">#3 <strong>TAKE THE INSURANCE COMPANY TO COURT</strong></p>
  <p class="contentParagraph">If the insurance company denies your appeal, then your last
  option is to file a claim against them in civil court. To be frank,
  insurance companies often deny appeals—their job is to limit
  your relief, not give you the maximum compensation you
  deserve. As a result, denying your claim is simply the
  insurance companies’ way of hedging their bets. They are
  betting that you’ll quit after they deny your appeal. If they
  are right, they won’t pay you a dime. If they’re wrong, they
  will likely attempt to settle with you anyway after you hire an attorney. Our firm has
  settled thousands of claims after threatening to take an
  insurance company to court. Our knowledge of insurance
  tactics has helped us secure billions in verdicts 
  and settlements for our clients.
  </p>
  </div>
`;

export default class Home extends Component {
  _residentialClaims() {
    return (
      <View style={[styles.wrap]}>
        <View style={[styles.inner]}>
          <ScrollView contentContainerStyle={[styles.scrollWrap]}>
            <View style={[styles.headerWrap]}>
              <Image
                style={styles.image}
                source={require("../../../assets/images/landing_image.jpg")}
              />
              <View style={styles.headerContent}>
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
                  showImage={false}
                />
                <Button
                  text={"NEED HELP?"}
                  action={Actions.contact}
                  buttonStyles={styles.buttonStylesSmall}
                  buttonWrapStyles={styles.buttonSmallWrapStyles}
                  buttonTextStyles={styles.buttonTextStyles}
                  showImage={false}
                />
              </View>
            </View>
            <View style={[styles.pageContent]}>
              <HTML
                html={htmlPageContent.replace(
                  new RegExp("<li[^>]*>([\\s\\S]*?)<\\/li>", "g"),
                  "<li><span>$1</span></li>"
                )}
                classesStyles={contentStyles.classesStyles}
                tagsStyles={{
                  span: styles.bullet
                }}
                listsPrefixesRenderers={{
                  ul: (
                    htmlAttribs,
                    children,
                    convertedCSSStyles,
                    passProps
                  ) => {
                    return (
                      <Text
                        style={{
                          color: "#95989A",
                          position: "relative",
                          top: -2
                        }}
                      >
                        -
                      </Text>
                    );
                  }
                }}
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
    return this._residentialClaims();
  }
}
