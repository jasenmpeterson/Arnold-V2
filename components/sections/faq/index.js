import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import HTML from "react-native-render-html";
import * as Animatable from "react-native-animatable";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import Accordion from "react-native-collapsible/Accordion";
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
    alignItems: "center",
    paddingTop: 70
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
  pageContent: {
    flexDirection: "column",
    alignSelf: "flex-start"
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
  accordion: {
    backgroundColor: "white",
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEBEC"
  },
  headerText: {
    color: "#175492"
  },
  accordionTextStyles: {
    fontSize: responsiveFontSize(1.5),
    color: "#95989A"
  },
  content: {
    padding: 25
  },
  active: {
    backgroundColor: "#eeeeee"
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
    position: "relative",
    zIndex: 2,
    top: 50,
    height: responsiveHeight(20)
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
    },
    wrap: {
      position: "relative",
      top: -50
    }
  }
};

const htmlHeader = `
<h2 class="h2" style="font-size: 0.9rem">THINKING ABOUT FILING A CLAIM?</h2>
<h1 class="h1" style="font-size: 2rem">COMMON QUESTIONS</h1>
`;

let content = (
  <Text style={styles.accordionTextStyles}>
    Your first step is to understand the reason your claim was denied. Adjusters
    are required to provide an explanation for the denial. In most cases, the
    denial notice will come with the relevant excerpt from your policy to
    highlight why. {"\n"}
    {"\n"}Most common reasons for denial of a claim are:{"\n"}
    - Not Filed on Time{"\n"}
    - Damages not covered{"\n"}
    - Fraud is suspected{"\n"}
    - Policy limits are met/exceeded{"\n"}
    - Premiums are unpaid{"\n"}
    - Documentation is lacking{"\n"}
    {"\n"}
    Once you know why your claim was denied, you can appeal the decision in a
    letter. The letter needs to include new evidence or paperwork that would
    justify
  </Text>
);

let contentTwo = (
  <Text style={styles.accordionTextStyles}>
    The average household has around $25,000 in goods—including household
    appliances, antiques, jewelry, high-value garments, furniture, and more. In
    Houston, the median home size is 1,900 sq. ft., with some areas seeing 42-48
    inches of flooding after Harvey. Taking those numbers into account, loss
    calculators indicate that many homeowners will be facing losses of{" "}
    <Text style={{ fontWeight: "bold" }}>at least $70,000</Text>—not including
    the loss of multiple vehicles, the loss of property value, lost work hours,
    potential unemployment, business interruption, and other costs.{"\n"}
    {"\n"}
    For homes that were hit with contaminated runoff (a danger that the chief
    medical officer of Houston warned residents about), the safety of your home
    may increase the cost of repairing it. Mold, sewage, toxic chemicals, and
    the growth of E. coli and other dangerous bacteria have appeared in
    waterlogged homes all over Houston. Many homeowners are weighing their
    options, wondering if it’s worth saving their homes at all.{"\n"}
    {"\n"}
    Homeowners with larger houses (and thus with more extensive damage) could{" "}
    <Text style={{ fontWeight: "bold" }}>
      easily face six- or even seven-figure losses
    </Text>{" "}
    from Hurricane Harvey—losses that insurance companies are eager to shift
    completely onto your shoulders.
  </Text>
);

let contentThree = (
  <Text style={styles.accordionTextStyles}>
    In the mid-1990s, the nation’s largest insurance companies—including State
    Farm and Allstate, the most common insurers in the greater Houston
    area—adopted a business strategy called the McKinsey model. This model used
    computers to offer settlements up to 30 percent less than what homeowners
    deserved. The system would prioritize payouts for people who accepted
    smaller settlements. People who demanded the settlements they actually
    deserved were forced to wait.{"\n"}
    {"\n"}
    <Text style={{ fontWeight: "bold" }}>
      The strategy was to make insurance lawsuits so expensive that lawyers
      would refuse to take the cases.
    </Text>
    {"\n"}
    {"\n"}
    This would back insured people into a corner: either spend exorbitant
    amounts of money to sue the company in a case they may not even win—or take
    the low-ball offer. Adjusters also have a bag of tricks to extend the wait
    time for a claim payout. For instance, adjusters can indefinitely keep
    claims open as long as they check in with you on a regular basis.{"\n"}
    {"\n"}
    Laws govern how quickly an insurance company must respond to your claim, but
    how quickly they pay you is another matter. Adjusters can demand
    investigation into causes for virtually any reason, forcing you to wait for
    more inspections while your savings drain away. For most people, delayed
    claims mean financial disaster. This isn’t a matter of inconvenience. This
    is your life. A delayed claim can cause eviction, loss of medical care,
    bankruptcy, or other life-changing events. Over 25 percent of Americans
    can’t handle a $2,000 setback in a 30-day period. Harvey means people are
    facing hundreds of thousands in expenses.
  </Text>
);

let contentFour = (
  <Text style={styles.accordionTextStyles}>
    Your first step is to understand the reason your claim was denied. Adjusters
    are required to provide an explanation for the denial. In most cases, the
    denial notice will come with the relevant excerpt from your policy to
    highlight why.{"\n"}
    {"\n"}
    <Text style={{ fontWeight: "bold" }}>
      The most common reasons for a denial of a claim are:
    </Text>
    {"\n"}
    {"\n"}
    - Not filed on time{"\n"}
    - Damages are not covered{"\n"}
    - Fraud is suspected{"\n"}
    - Policy limits are met/exceeded{"\n"}
    - Premiums are unpaid{"\n"}
    - Documentation is lacking{"\n"}
    {"\n"}
    Once you know why your claim was denied, you can appeal the decision in a
    letter. The letter needs to include new evidence or paperwork that would
    justify the insurance company changing its mind. Without an attorney, the
    appeal will likely be costly. If an appeal is denied, your only options are
    a.) give up and start rebuilding with your own money, or b.) sue the
    insurance company.
  </Text>
);

let contentFive = (
  <Text style={styles.accordionTextStyles}>
    Up to 80 percent of homes that were flooded after Hurricane Harvey do not
    have a flood insurance policy. Part of the reason for that is that many of
    the homes flooded were{" "}
    <Text style={{ fontWeight: "bold" }}>not in flood-risk zones</Text>. Between
    inaccurate FEMA maps and runoff created by massive "controlled releases"
    from local dams, homeowners that were never told to buy flood insurance
    suddenly found themselves in three feet of toxic, contaminated flood waters,
    causing massive damage to their walls, floors, and belongings.{"\n"}
    {"\n"}
    If you don't have flood insurance, you may be able to make an{" "}
    <Text style={{ fontWeight: "bold" }}>inverse condemnation claim</Text>{" "}
    against the officials who allowed your home to be flooded—specifically
    against organizations like the San Jacinto River Authority, who allowed 2
    billion gallons of water per hour to flow from their dams with little
    advance warning to the communities below them. This massive wall of water is
    what destroyed thousands of homes downriver—even homes that were never
    damaged by heavy rains or high winds.{"\n"}
    {"\n"}
    Inverse condemnation claims are lawsuits against local governments for the
    seizing (and deliberate destruction) of private property for government use.
    If the SJRA or the Harris County Flood Management District destroyed your
    home in order to "protect the dam," then it would qualify as inverse
    condemnation. In fact, a similar situation was allowed to proceed to trial
    in 2014 thanks to the Texas Supreme Court. Call (888) 400-2101 to learn if
    you qualify for a claim.
  </Text>
);

let contentSix = (
  <Text style={styles.accordionTextStyles}>
    Most Houston homeowners who suffered losses from Harvey don’t have flood
    insurance to cover their damage. Having flood damage at all usually means
    your costs will be excluded under your private insurance policy. So what are
    your options? For homeowners in specific high-risk zones, you may have the
    option to file an inverse condemnation claim against Harris County. Inverse
    condemnation cases allege that the government allowed a public project to
    put your private property at risk without your knowledge or consent.{"\n"}
    {"\n"}
    <Text style={{ fontWeight: "bold" }}>
      The most likely homes to qualify for a claim are homes located in/near:
    </Text>
    {"\n"}
    {"\n"}
    - Addicks Reservoir{"\n"}
    - Barker Reservoir{"\n"}
    - Buffalo Bayou Dam{"\n"}
    - Housing developments in or around dams{"\n"}
    {"\n"}
    Your other option is to sue your insurance agent for bad faith. When you're
    sold a policy that was never intended to be fulfilled (or was designed to
    not help you in an emergency), then your insurance agent committed a form of
    professional malpractice—qualifying you to sue them for your losses. If your
    claim is clearly valid or your policy was never appropriate to sell to you,
    then you may be able to recover losses in an insurance agent lawsuit.
  </Text>
);

let contentSeven = (
  <Text style={styles.accordionTextStyles}>
    Yes—including options for immediate cash as well as options for long-term
    relief. The first thing you should do is file a claim with NFIP if you have
    flood insurance. The program is underwritten by FEMA, so expect a long wait
    time. Also, your payout will not likely cover the complete cost of the flood
    damage. Another option for fast relief is the SBA disaster loan program.
    It’s a low-interest loan offered to both businesses and homeowners following
    a natural disaster. However, it’s not true "relief" in that you{" "}
    <Text style={{ fontStyle: "italic" }}>will</Text> need to pay it back
    eventually. Thankfully, the maximum interest rate is below 3.75 percent.
  </Text>
);

let contentEight = (
  <Text style={styles.accordionTextStyles}>
    Insurance companies often delay payment to pressure you into settling for
    less than you deserve. If you think an insurance company is too “decent” to
    use a tragedy as leverage, think again—we’ve seen it happen too many times
    to give them the benefit of the doubt. The best way to fight back is to get
    relief from multiple sources. That way, it gives you more power to let them
    play their waiting game. Every penny could mean having the strength to wait
    for a better settlement.{"\n"}
    {"\n"}
    The first thing you should do is apply for a loan from the SBA. Even if
    you’re not a business owner, the SBA offers low-interest loans following a
    disaster. That money could go toward living expenses and rebuilding efforts.
    You can apply for relief from FEMA for temporary living expenses, long-term
    housing, and other costs if your insurance is not sufficient to cover your
    damages (or too slow to act). Consider applying for grants from local
    disaster-relief efforts as well. The Disaster Unemployment Assistance
    program offers unemployment benefits for those left jobless by Harvey. In
    Texas, the maximum benefit is up to $493 a week.
  </Text>
);

let contentNine = (
  <Text style={styles.accordionTextStyles}>
    Due to the 13 Superfund sites around Houston, the waters that flooded the
    city were highly toxic and potentially life-threatening. The same could be
    said of the silt and residue left behind by the waters, some of which
    contains lead and other industrial toxins.{"\n"}
    {"\n"}
    Local researchers and homeowners have found that bacteria growth is{" "}
    <Text style={{ fontStyle: "italic" }}>especially</Text> dangerous inside of
    homes, as the warm, dark environment allows mold and germs to reproduce
    quickly. Many homes have large amounts of E. coli in the water, which is
    potentially fatal if ingested. Others have gotten staph infections or
    suffered persistent breathing problems after going home, even for just an
    hour.{"\n"}
    {"\n"}
    Check with your local health and safety office to ensure that it’s safe to
    enter your home and grab your things. Even if they say it’s safe, wear
    protective gear that covers your mouth, nose, eyes, and ears. Be extra
    careful if you have any open wounds or are immuno-deficient. Under no
    circumstances should you drink or bathe with the water—use bottled water for
    the time being.
  </Text>
);

let contentTen = (
  <Text style={styles.accordionTextStyles}>
    As insurance lawyers, our job is to hold insurance companies to the task of
    handling claims with honesty. Our work can be reactive (i.e. handle a case
    after the claim has been denied or delayed), but our clients get the best
    results when they call us proactively, before their claim is filed. By
    consulting us on your initial filing, our team’s adjusters, damage
    assessors, and other experts can gather as much evidence as possible about
    your damages quickly and thoroughly.{"\n"}
    {"\n"}
    When you don’t wait months to call us, we can immediately ensure that your
    claim is strengthened and expedited as much as possible—likely leading to a
    more favorable result than if you never called us at all. A 1999 study from
    the Insurance Research Council revealed that insurance payouts for people
    who hired representation were 3.5 times larger than those without
    representation. Another study revealed that 85% of the money paid out by
    insurance companies is paid out to people who had lawyers. Hiring us sooner
    increases the likelihood that you’ll have a{" "}
    <Text style={{ fontWeight: "bold" }}>larger payout sooner.</Text>
  </Text>
);

const SECTIONS = [
  {
    title: "What are my rights as an insured party?",
    content: content
  },
  {
    title: "How much are my losses worth?",
    content: contentTwo
  },
  {
    title: "Why is my claim taking so long?",
    content: contentThree
  },
  {
    title: "What if I had coverage but was still denied?",
    content: contentFour
  },
  {
    title: "What If I Don't Have Flood Insurance ?",
    content: contentFive
  },
  {
    title: "What Do I Do If My Insurance Company Won’t Help Me Rebuild?",
    content: contentSix
  },
  {
    title:
      "Do I Have Options If My Insurance Isn’t Covering All of the Damage?",
    content: contentSeven
  },
  {
    title: "What If My Insurance Won’t Cover Additional Living Expenses?",
    content: contentEight
  },
  {
    title: "Can I Retrieve my Items from my Home After a Prolonged Flood?",
    content: contentNine
  },
  {
    title: "Why Should I Hire an Attorney Before I File My Insurance Claim?",
    content: contentTen
  }
];

export default class FAQ extends Component {
  state = {
    activeSection: false,
    collapsed: true
  };

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _residentialClaims() {
    return (
      <View style={[styles.wrap]}>
        <View style={[styles.inner]}>
          <View style={[styles.headerWrap]}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/landing_image.png")}
            />
            <View style={styles.headerContent}>
              <HTML
                html={htmlHeader}
                classesStyles={contentStyles.classesStyles}
              />
            </View>
          </View>
          <ScrollView contentContainerStyle={[styles.scrollWrap]}>
            <View style={[styles.pageContent]}>
              <Accordion
                sections={SECTIONS}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                underlayColor="transparent"
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

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.header,
          styles.accordion,
          isActive ? styles.active : styles.inactive
        ]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={400} transition="backgroundColor">
        <Animatable.Text
          style={[styles.content]}
          animation={isActive ? "fadeInUp" : undefined}
        >
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    return this._residentialClaims();
  }
}
