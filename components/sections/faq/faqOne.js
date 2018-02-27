import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Image, Text, Linking, Platform, TouchableHighlight } from "react-native";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";
import TabsView from "../../tabsBar";

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
        flex: 1,
        alignSelf: "stretch"
    },
    logo: {
        width: 120,
        height: 60.47
    },
    logoContainer: {
        justifyContent: "center",
        position: "relative",
        flex: 1
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
                    <ScrollView contentContainerStyle={[styles.scrollWrap]} removeClippedSubviews={true}>
                        <View style={[styles.image]}>
                            <Image
                                source={require("../../../assets/images/gradient_background.jpg")}
                                resizeMethod='resize'
                            />
                        </View>
                        <View style={[styles.pageContent]}>
                            <Text style={styles.faqTitle}>What are my rights as an insured property owner?</Text>
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
                                justify.
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
