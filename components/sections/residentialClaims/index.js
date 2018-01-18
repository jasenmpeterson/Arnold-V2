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
    fontSize: 14
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
      textAlign: "center"
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
      lineHeight: 30,
      top: -30
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
<h1 class="homeOwnerBoxHeader" style="font-size: 0.9rem">GET ANSWERS</h1>
`;

const htmlBusinessOwnersBox = `
<h1 class="homeOwnerBoxHeader" style="font-size: 0.9rem">NEED HELP TO FILE A CLAIM?</h1>
`;

const htmlCTA = `
<h2 class="ctaHeader">Affected by the Controlled Release of the Dams?</h2>
<p class="ctaText">Releasing water from the reservoirs caused unthinkable damage. Let us stand up and fight for you.</p>
`;

const htmlPageContent = `
<h2 class="contentSubHeader" style="font-size: 0.9rem">RESIDENTIAL</h2>
<h1 class="contentHeader" style="font-size: 2rem">HARVEY INSURANCE<br/>CLAIMS PROCESS</h1>
<section class="contentWrap">
<p class="contentParagraph">The process for filing a claim should be fairly
straightforward. First, you call an insurance company to
report damage to your home. They will either ask you to
fill out a report or will send an adjuster to assess the damage.
Once the adjuster evaluates your damages, the insurance company makes
an offer to cover the damages up to your policy’s limit, and
you use the money to rebuild your house.</p>
<p class="contentParagraph">Even if your initial claim is denied, you’d have the chance to
submit an appeal where you can contest the reason for the
denial. Failing that, you’d be able to file a civil suit to claim
all the damages and expenses associated with the hurricane.
</p>
<h3 class="contentParagraph">In an ideal world, this would be the 
insurance claims process:</h3>
<section class="list">
<ul>
<li>File the paperwork</li>
<li>Receive a fair offer</li>
<li>Use payout to rebuild</li>
</ul>
</section>
<p class="contentParagraph">Unfortunately, here’s how it will usually go:</p>
<p class="contentParagraph">#1 <strong>THE ADJUSTER WILL LOW-BALL YOU</strong></p>
<p class="contentParagraph">The largest insurance companies use a business model
that offers an initial settlement significantly lower than
what you actually deserve. This approach capitalizes on the fact
that you’re not an expert on property damage, so you’ll
take the settlement rather than fight it. The catch is that once you accept the
settlement, that’s it—you’ve waived your right to demand
more. On the other hand, if you ask for more, your claim
could be delayed. Insurance companies know most
residents don’t have the money or time to wait that long.</p>
<p class="contentParagraph">#2 <strong>YOU’LL FILE AN APPEAL
(THAT TAKES MONTHS TO RESOLVE)</strong></p>
<p class="contentParagraph">The letter of appeal is practically a legal document.
It needs to include an argument for why your claim was
wrongfully denied or underpaid, as well as evidence. You may need to
hire independent inspectors, a public adjuster, or other
professionals to document the damage and provide an
alternative assessment.</p>
<p class="contentParagraph">#3 <strong>YOUR APPEAL WILL BE DENIED
(DESPITE YOUR BEST EFFORTS)</strong></p>
<p class="contentParagraph">The profits-first business model for large insurance
providers means making it as expensive as possible for
you to get full payment for your claim. If they’ve already
denied your claim once, they’re more likely to deny it a
second time—forcing you to sue them or give up. The
key here is not to give up.  Find an attorney who has experience with
insurance companies and a track-record for beating them.</p>
<p class="contentParagraph">#4 <strong>YOU TAKE THEM TO COURT &
LET THE JURY DECIDE</strong></p>
<p class="contentParagraph">Despite their efforts to deny or underpay your claim, insurance
companies don’t want to go to court. They know that a jury
of your peers will have endured the same exact tragedies as
you. We’ve represented countless claims where
insurance companies played "courtroom chicken" with our 
clients—only to settle days before trial was scheduled
to begin.</p>
<p class="contentParagraph">In the end, insurance companies are used to dealing with
regular people who are easy to intimidate with the lengthy and complex claims process during a time when they are most vulnerable.</p>
<p class="contentParagraph">Having an attorney on your side means you won’t be forced to settle for tens or hundreds of thousands of dollars less than you deserve—and being Texans means we won’t quit until our
neighbors get what they need. Arnold & Itkin LLP has won
billions for our clients against the same insurance companies
you’re facing now. More importantly, we’re from Houston—
we’re facing Harvey’s damage same as you. It’s not right
what the insurance companies are doing to our communities
, and we’re not going to let them take
advantage of us.</p>
<p class="contentParagraph">If you haven’t filed your claim yet, hiring us from the start
means you’ll have a stronger, more proactive experience from
the start. Our team of expert adjusters, damage assessors,
and seasoned litigators pressure the insurance company to
handle your claim honestly and quickly—potentially
resulting in a much higher payout. Learn more about how
our firm can help you (and the value of your claim) by
reaching out to us as soon as possible.</p>
</section>
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
