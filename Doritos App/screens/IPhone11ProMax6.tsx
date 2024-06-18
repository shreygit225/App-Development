import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone11ProMax6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax8, styles.iconLayout]}>
      <Text style={[styles.checkout, styles.total1FlexBox]}>Checkout</Text>
      <Text style={[styles.delivery, styles.deliveryPosition]}>Delivery</Text>
      <Pressable
        style={[styles.iphone11ProMax8Child, styles.deliveryPosition]}
        onPress={() => navigation.navigate("IPhone11ProMax5")}
      />
      <Text style={styles.proceedToPayment}>Proceed to payment</Text>
      <Pressable
        style={styles.chevronLeft}
        onPress={() => navigation.navigate("IPhone11ProMax12")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <View style={styles.addressDetailsParent}>
        <Text style={[styles.addressDetails, styles.addressDetailsTypo]}>
          Address details
        </Text>
        <Text style={[styles.change, styles.totalTypo]}>change</Text>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <View style={styles.lineParent}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={styles.dashiconsbank} />
      </View>
      <View style={[styles.deliveryMethodParent, styles.deliveryPosition]}>
        <Text style={[styles.deliveryMethod, styles.addressDetailsTypo]}>
          Delivery method.
        </Text>
        <Text style={[styles.total, styles.totalTypo]}>Total</Text>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <View style={[styles.doorDeliveryParent, styles.parentPosition]}>
          <Text style={[styles.doorDelivery, styles.totalTypo]}>
            Door delivery
          </Text>
          <View style={[styles.lineView, styles.groupLayout]} />
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={styles.groupChild1}
            contentFit="cover"
            source={require("../assets/ellipse-8.png")}
          />
        </View>
        <View style={[styles.pickUpParent, styles.parentPosition]}>
          <Text style={[styles.doorDelivery, styles.totalTypo]}>Pick up</Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-71.png")}
          />
        </View>
      </View>
      <Text style={[styles.total1, styles.total1FlexBox]}>Rs. 370.00</Text>
      <Text style={[styles.vikramAdityaMarg, styles.adityaTypo]}>
        Vikram Aditya Marg, Dwarkadas J. Sanghvi College of Engineering, Mumbai
        -09
      </Text>
      <Text style={[styles.adityaPandey, styles.adityaTypo]}>
        Aditya Pandey
      </Text>
      <Text style={[styles.text, styles.adityaTypo]}>+91 8732947923</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  total1FlexBox: {
    textAlign: "left",
    color: Color.colorGray_100,
  },
  deliveryPosition: {
    left: 50,
    position: "absolute",
  },
  addressDetailsTypo: {
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    top: 0,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  totalTypo: {
    fontFamily: FontFamily.arial,
    textAlign: "left",
    position: "absolute",
  },
  groupChildShadowBox: {
    height: 156,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 40,
    width: 315,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  groupLayout: {
    opacity: 0.3,
    height: 1,
    width: 233,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  parentPosition: {
    left: 24,
    position: "absolute",
  },
  adityaTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    left: 79,
    textAlign: "left",
    fontFamily: FontFamily.timesNewRoman,
    position: "absolute",
  },
  checkout: {
    top: 61,
    left: 161,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.timesNewRoman,
    textAlign: "left",
    position: "absolute",
  },
  delivery: {
    top: 124,
    fontSize: FontSize.size_15xl,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.timesNewRoman,
  },
  iphone11ProMax8Child: {
    top: 785,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered_100,
    width: 314,
    height: 70,
  },
  proceedToPayment: {
    top: 810,
    left: 131,
    fontFamily: FontFamily.tiroBanglaRegular,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  chevronLeft: {
    left: 41,
    top: 60,
    width: 24,
    height: 24,
    position: "absolute",
  },
  addressDetails: {
    left: 3,
  },
  change: {
    left: 254,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkorange,
    top: 0,
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 52,
    left: 0,
  },
  lineParent: {
    top: 93,
    width: 232,
    height: 52,
    left: 30,
    position: "absolute",
  },
  dashiconsbank: {
    top: 139,
    left: 61,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  addressDetailsParent: {
    top: 209,
    left: 49,
    height: 196,
    width: 315,
    position: "absolute",
  },
  deliveryMethod: {
    left: 6,
  },
  total: {
    top: 266,
    left: 0,
    fontSize: FontSize.size_mid,
    color: Color.colorGray_100,
    fontFamily: FontFamily.arial,
  },
  rectangleView: {
    left: 3,
  },
  doorDelivery: {
    left: 31,
    top: 0,
    fontSize: FontSize.size_mid,
    color: Color.colorGray_100,
    fontFamily: FontFamily.arial,
  },
  lineView: {
    top: 45,
    left: 30,
  },
  ellipseIcon: {
    top: 1,
    width: 15,
    height: 15,
    left: 0,
    position: "absolute",
  },
  groupChild1: {
    top: 5,
    left: 4,
    width: 7,
    height: 7,
    position: "absolute",
  },
  doorDeliveryParent: {
    top: 70,
    width: 262,
    height: 45,
  },
  pickUpParent: {
    top: 140,
    width: 87,
    height: 20,
  },
  deliveryMethodParent: {
    top: 448,
    width: 318,
    height: 286,
  },
  total1: {
    top: 712,
    left: 315,
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  vikramAdityaMarg: {
    top: 306,
    width: 199,
    height: 48,
  },
  adityaPandey: {
    top: 280,
    width: 133,
    height: 33,
  },
  text: {
    top: 358,
    width: 141,
    height: 23,
  },
  iphone11ProMax8: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 896,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    width: "100%",
  },
});

export default IPhone11ProMax6;
