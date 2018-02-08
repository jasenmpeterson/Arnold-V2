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
        paddingLeft: 15,
        paddingRight: 15,
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
<h2 class="h2" style="font-size: 0.9rem">HELPING BUSINESS OWNERS RECOVER AFTER</h2>
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
<h2 class="contentSubHeader" style="font-size: 0.9rem">COMMERCIAL</h2>
<h1 class="contentHeader" style="font-size: 2rem">HARVEY INSURANCE<br/>CLAIMS PROCESS</h1>
<section class="contentWrap">
<p class="contentParagraph">The insurance claims process for business owners will be largely identical to the process for homeowners’ claims. The primary difference is that commercial insurance providers offer <a href="https://www.hurricaneharveyfirm.com/commercial/harvey-claims/flood-damage/">flood insurance</a> to businesses, while homeowners have to buy flood insurance from the National Flood Insurance Program. As a result, almost all of your business’ relief will come from your insurer—and they’re not likely to let you have the full amount without a long and arduous process. Here’s how it will likely go.</p>
<p class="contentParagraph">#1 <strong>The Adjuster Will Offer a Fast, Low-Ball Settlement</strong></p>
<p class="contentParagraph">The profit model for insurance companies is built on one premise: offer you as little money as possible in hopes you will take the low-ball offer because of financial pressures.</p>
<p class="contentParagraph">#2 <strong>Your Case Will Be Delayed</strong></p>
<p class="contentParagraph">TAdjusters are required to respond to your case within a certain amount of time, but they’re not required to pay within a specific amount of time under most policies. If they simply check in with you every 60 days or order new inspections, your claim could stay open for many months.</p>
<p class="contentParagraph">If your business was damaged, it shouldn’t take several weeks or months to confirm you need assistance. However, our firm has seen the same thing happen to other business owners we’ve represented. For most businesses, they can’t afford to delay the rebuilding process. Stopping revenue or operations for even a few weeks could destroy a company, leaving employees and owners without their livelihoods. Insurance companies know this—and they’re counting on it to twist your arm into settling.</p>
<p class="contentParagraph">#3 <strong>Your Claim / Appeal Will Be Denied</strong></p>
<p class="contentParagraph">Former insurance adjusters have reported using a number of tricks to put the pressure on small businesses to settle for less than they deserve. One trick is misrepresenting damage reports to allow the insurance company to deny valid claims—a practice that State Farm whistleblowers uncovered after Hurricane Sandy devastated the Northeast. Another practice was denying a claim, then filing a new damage report to justify the denial—a practice that clearly violates an insurance company’s “good faith” requirement.</p>
<p class="contentParagraph"><strong>Business Interruption Claims</strong></p>
<p class="contentParagraph"><a href="https://www.hurricaneharveyfirm.com/commercial/harvey-claims/flood-damage/">Flood</a> and <a href="https://www.hurricaneharveyfirm.com/commercial/harvey-claims/windstorm-damage/">windstorm</a> insurance are forms of property insurance—these policies protect your business’ physical location from the losses incurred by Hurricane Harvey. However, experts estimate that much of a business’ damage comes from business interruption: the loss of clients, revenue, and operations that a disaster invariably causes..</p>
<p class="contentParagraph"><strong>Specifically, a typical business interruption policy should cover:</strong></p>
<section class="list">
<ul>
<li><strong>Lost Profits & Operated Expenses </strong><br/>Recovery can be based on financial statements and expenses from previous months.</li>
<li><strong>New / Temporary Location:</strong><br/>If your business needed to move, the policy should cover the cost of moving and setting up shop in a new location.</li>
<li><strong>Cost of Hiring or Training New Operators:</strong><br/>If you needed to find and train new operators for your equipment, the costs of hiring and training are also covered.</li>
<li><strong>Reimbursement for Reasonable Expenses:</strong><br/>Any operating expenses not specifically covered under “fixed costs” can be reimbursed within reason.</li>
<li><strong>Losses from Government-Mandated Closure:</strong><br/>If a government agency ordered the closure of your business, you can reclaim revenue from the period of closure onward.</li>
<li><strong>Contingent coverage:</strong><br/>If you depend on a supplier or partner, your policy may allow you to reclaim costs incurred by losses to other parties.</li>
</ul>
</section>
<p class="contentParagraph"><strong>Bad Faith Insurance Practices</strong></p>
<p class="contentParagraph">If your business’ location was damaged or your operations were interrupted due to Hurricane Harvey—and your insurer knew you were entitled to a full payout, and still chose not to honor your claim—you may have grounds for a bad faith insurance lawsuit.</p>
<p class="contentParagraph"><strong>Bad faith requires more than your insurer “getting the facts wrong.” Bad faith occurs when your insurer knew you were entitled to relief, and despite this knowledge, chose to deny your claim.</strong></p>
<p class="contentParagraph">The penalties for an insurance company denying a claim in bad faith go beyond the four corners of the insurance policy itself. If you prevail on a bad faith claim, you may be entitled to damages for the way your insurance company handled your claim in addition to fees for delayed payment and other costs associated with your lawsuit.</p>
<p class="contentParagraph"><strong>You Don’t Have to Face This Process Alone</strong></p>
<p class="contentParagraph">If you’re not sure what to do about your claim, or if your claim has been in appeals and buried in paperwork for months, our firm is here for you. Arnold & Itkin is committed to ensuring insurers treat our neighbors and business owners fairly—and we’re committed to making sure they pay for it.</p>
<p class="contentParagraph"><strong>Insurance Companies Won't Do Right by You. Our Team Will. We've Won Billions for Our Clients.</strong></p>
<p class="contentParagraph"><strong>Let Us Help You.</strong></p>
</section>
`;

export default class CommercialClaims extends Component {
    _commercialClaims() {
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
        return this._commercialClaims();
    }
}
