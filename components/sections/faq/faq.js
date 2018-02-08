import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Image, TouchableHighlight, Text } from "react-native";
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
        backgroundColor: "#ffffff"
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
        width: 300,
        height: 50,
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
        color: "#ffffff"
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
        paddingLeft: 15,
        paddingRight: 15,
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
        alignSelf: "flex-start",
        width: "100%"
    },
    pageContent__B: {
        position: "relative",
        top: -25
    },
    ctaWrap: {
        justifyContent: "center",
        width: responsiveWidth(95),
        position: "relative",
        backgroundColor: "#343434",
        zIndex: 5,
        top: 45,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 40
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
        top: 30
    },
    ctaImage: {
        position: "absolute",
        right: 15,
        top: 20
    },
    question_mark_image: {
        marginTop: 10,
        width: 52,
        height: 65
    },
    faqButton: {
        backgroundColor: "white",
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#EAEBEC",
        width: "100%"
    },
    faqText: {
        fontSize: 14,
        color: "#95989A"
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
            top: -30,
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
            lineHeight: 30
        },
        contentParagraph: {
            color: "#95989A"
        },
        second: {
            position: "relative"
        },
        third: {
            position: "relative"
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
<h1 class="h1" style="font-size: 2rem">FAQS</h1>
`;

export default class Commercial extends Component {
    _renderCommercial() {
        return (
            <View style={[styles.wrap]}>
                <View style={{ height: 65, width: 100, backgroundColor: "white" }}></View>
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
                        </View>
                        <View style={[styles.pageContent]}>
                            <TouchableHighlight
                                onPress={Actions.faqOne}
                                >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>What are my rights as an insured party?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqTwo}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>How much are my losses worth?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqThree}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>Why is my claim taking so long?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqFour}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>What if I had coverage but was still denied?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqFive}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>What If I Don't Have Flood Insurance?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqSix}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>What Do I Do If My Insurance Company Won’t Help Me Rebuild?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqSeven}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>Do I Have Options If My Insurance Isn’t Covering All of the Damage?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqEight}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>What If My Insurance Won’t Cover Additional Living Expenses?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqNine}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>Can I Retrieve my Items from my Home After a Prolonged Flood?</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={Actions.faqTen}
                            >
                                <View style={[styles.faqButton]}>
                                    <Text style={styles.faqText}>Why Should I Hire an Attorney Before I File My Insurance Claim?</Text>
                                </View>
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
        return this._renderCommercial();
    }
}
