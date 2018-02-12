import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Image, Text, Linking, Platform, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import HTML from "react-native-render-html";
import email from 'react-native-email';
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
        justifyContent: "flex-end",
    },
    wrap: {
        flex: 1,
    },
    inner: {
        flex: 1
    },
    h1: {
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        fontSize: responsiveFontSize(4.5)
    },
    h2: {
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        fontSize: responsiveFontSize(2.5)
    },
    contact: {
        backgroundColor: "transparent",
        color: "white"
    },
    lineSpacing: {
        paddingTop: 15
    },
    tabsWrap: {
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    scrollWrap: {
        alignItems: "center",
        paddingTop: Platform.OS === 'ios' ? 30 : 100,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1
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
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1
    },
    logo: {
        width: 120,
        height: 60.47
    },
    logoContainer: {
        justifyContent: "center",
        position: "relative",
        flex: 1,
        padding: 50
    },
    accordionTextStyles: {
        fontSize: 14,
        color: "#FFFFFF",
        backgroundColor: "transparent"
    },
    faqTitle: {
        color: "#FFFFFF",
        fontSize: responsiveFontSize(2.5),
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "transparent",
        marginBottom: 15
    }
});

const contentStyles = {
    classesStyles: {
        h2: {
            color: "#FFFFFF",
            fontSize: responsiveFontSize(1.5),
            textAlign: "center",
            backgroundColor: "transparent"
        },
        h1: {
            color: "#FFFFFF",
            position: "relative",
            top: -35,
            fontSize: responsiveFontSize(3.5),
            textAlign: "center",
            backgroundColor: "transparent"
        },
        p: {
            textAlign: "center",
            color: "#FFFFFF",
            backgroundColor: "transparent"
        },
        contentSubHeader: {
            color: "#FFFFFF",
            fontSize: responsiveFontSize(1.5)
        },
        contentHeader: {
            color: "#FFFFFF",
            fontSize: responsiveFontSize(3),
            position: "relative",
            top: -30,
            lineHeight: 30
        },
        contentParagraph: {
            color: "#FFFFFF",
            backgroundColor: "transparent"
        },
        third: {
            position: "relative",
            top: -90
        },
        fourth: {
            position: "relative",
            top: -115
        },
        ctaHeader: {
            color: "white",
            fontSize: 22
        },
        ctaText: {
            color: "white"
        },
        address: {
            fontSize: 16,
            position: "relative"
        },
        address__a: {
            top: -30
        },
        address__b: {
            top: -60
        },
        address__c: {
            top: -90
        }
    }
};

const htmlHeader = `
<h2 class="h2" style="font-size: 0.9rem">CONTACT US</h2>
<h1 class="h1" style="font-size: 2.5rem">888.400.2101</h1>
`;

const htmlPageContent = `
<p class="contentParagraph">If you are looking for assistance in the aftermath of
Hurricane Harvey, our team is here to help you however we
can. As Texans, we understand just how devastating
this storm has been to our community, and we are committed
to doing everything that we can to help our neighbors recover.
</p>
<p class="contentParagraph">To learn more about how we can help with your insurance
claim, or to talk about your legal options, contact us as soon
as possible. We look forward to being partners with you in rebuilding South Texas. 
</p>
`;

export default class FAQ extends Component {
    openLink = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    _renderFAQ() {
        return (
            <View style={[styles.wrap]}>
                <View style={[styles.inner]}>
                    <ScrollView contentContainerStyle={[styles.scrollWrap]}>
                        <View style={[styles.image]}>
                            <Image
                                source={require("../../../assets/images/gradient_background.jpg")}
                            />
                        </View>
                        <View style={[styles.pageContent]}>
                            <Text style={styles.faqTitle}>Why is my claim taking so long?</Text>
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
                        </View>
                        <View style={styles.logoContainer}>
                            <TouchableHighlight onPress={() => this.openLink(`https://www.arnolditkin.com`)}>
                                <Image
                                    style={styles.logo}
                                    source={require("../../../assets/images/logo_full.png")}
                                />
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
                <View style={[styles.tabsWrap]}>
                    <TabsView activeFAQPage={true} />
                </View>
            </View>
        );
    }

    render() {
        return this._renderFAQ();
    }
}
