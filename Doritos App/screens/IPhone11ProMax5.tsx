import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone11ProMax5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax9, styles.iconLayout]}>
      <Text style={[styles.checkout, styles.total1FlexBox]}>Checkout</Text>
      <Text style={[styles.payment, styles.total1FlexBox]}>Payment</Text>
      <Pressable
        style={styles.iphone11ProMax9Child}
        onPress={() => navigation.navigate("IPhone11ProMax7")}
      />
      <Text style={[styles.placeOrder, styles.total1Typo]}>Place Order</Text>
      <Pressable
        style={styles.chevronLeft}
        onPress={() => navigation.navigate("IPhone11ProMax6")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <View style={[styles.totalWrapper, styles.totalWrapperLayout]}>
        <Text style={[styles.total, styles.cardTypo]}>Total</Text>
      </View>
      <View style={[styles.paymentMethodParent, styles.methodParentLayout]}>
        <Text style={[styles.paymentMethod, styles.methodPosition]}>
          Payment method
        </Text>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <View style={[styles.cardParent, styles.parentPosition]}>
          <Text style={[styles.card, styles.cardTypo]}>Card</Text>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <View style={[styles.groupInner, styles.lineViewLayout]} />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-8.png")}
          />
        </View>
        <View style={[styles.bankAccountParent, styles.groupItemLayout]}>
          <Text style={[styles.card, styles.cardTypo]}>Bank account</Text>
          <View style={[styles.rectangleView, styles.groupItemLayout]} />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-71.png")}
          />
        </View>
        <Image
          style={styles.bicreditCard2FrontFillIcon}
          contentFit="cover"
          source={require("../assets/bicreditcard2frontfill.png")}
        />
        <Image
          style={[styles.dashiconsbank, styles.totalWrapperLayout]}
          contentFit="cover"
          source={require("../assets/dashiconsbank.png")}
        />
      </View>
      <View style={[styles.deliveryMethodParent, styles.methodParentLayout]}>
        <Text style={[styles.deliveryMethod, styles.methodPosition]}>
          Delivery method.
        </Text>
        <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
        <View style={[styles.doorDeliveryParent, styles.parentPosition]}>
          <Text style={[styles.doorDelivery, styles.cardTypo]}>
            Door delivery
          </Text>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Image
            style={[styles.groupChild4, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7.png")}
          />
          <Image
            style={[styles.groupChild5, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-8.png")}
          />
        </View>
        <View style={[styles.pickUpParent, styles.totalWrapperLayout]}>
          <Text style={[styles.doorDelivery, styles.cardTypo]}>Pick up</Text>
          <Image
            style={[styles.groupChild4, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-71.png")}
          />
        </View>
      </View>
      <Text style={[styles.total1, styles.total1Typo]}>Rs. 370.00</Text>
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
  total1Typo: {
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  totalWrapperLayout: {
    height: 20,
    position: "absolute",
  },
  cardTypo: {
    fontFamily: FontFamily.arial,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  methodParentLayout: {
    width: 315,
    position: "absolute",
  },
  methodPosition: {
    left: 3,
    top: 0,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  groupChildShadowBox: {
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
    left: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  parentPosition: {
    width: 262,
    left: 21,
    position: "absolute",
  },
  groupItemLayout: {
    height: 40,
    position: "absolute",
  },
  lineViewLayout: {
    opacity: 0.3,
    height: 1,
    width: 233,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    left: 30,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 15,
    width: 15,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 7,
    width: 7,
    left: 4,
    position: "absolute",
  },
  checkout: {
    top: 61,
    left: 161,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  payment: {
    top: 124,
    fontSize: FontSize.size_15xl,
    left: 50,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  iphone11ProMax9Child: {
    top: 785,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered_100,
    width: 314,
    height: 70,
    left: 50,
    position: "absolute",
  },
  placeOrder: {
    top: 810,
    left: 162,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    fontFamily: FontFamily.tiroBanglaRegular,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  chevronLeft: {
    left: 41,
    width: 24,
    height: 24,
    top: 60,
    position: "absolute",
  },
  total: {
    left: 0,
    fontFamily: FontFamily.arial,
    top: 0,
  },
  totalWrapper: {
    top: 714,
    width: 36,
    left: 50,
  },
  paymentMethod: {
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
  },
  groupChild: {
    height: 205,
  },
  card: {
    top: 10,
    left: 81,
  },
  groupItem: {
    backgroundColor: Color.colorDarkorange,
    width: 40,
    borderRadius: Border.br_3xs,
    left: 30,
    height: 40,
    top: 0,
  },
  groupInner: {
    top: 55,
  },
  ellipseIcon: {
    top: 11,
  },
  groupChild1: {
    top: 15,
  },
  cardParent: {
    height: 55,
    top: 60,
  },
  rectangleView: {
    backgroundColor: "#c4c4c4",
    width: 40,
    borderRadius: Border.br_3xs,
    left: 30,
    height: 40,
    top: 0,
  },
  bankAccountParent: {
    top: 130,
    width: 185,
    left: 21,
  },
  bicreditCard2FrontFillIcon: {
    top: 71,
    left: 64,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  dashiconsbank: {
    top: 139,
    left: 61,
    width: 20,
    overflow: "hidden",
  },
  paymentMethodParent: {
    top: 213,
    left: 46,
    height: 245,
  },
  deliveryMethod: {
    fontFamily: FontFamily.tiroBanglaRegular,
  },
  groupChild3: {
    height: 156,
  },
  doorDelivery: {
    left: 31,
    top: 0,
    fontFamily: FontFamily.arial,
  },
  lineView: {
    top: 45,
  },
  groupChild4: {
    top: 1,
  },
  groupChild5: {
    top: 5,
  },
  doorDeliveryParent: {
    top: 70,
    height: 45,
  },
  pickUpParent: {
    top: 140,
    width: 87,
    left: 21,
  },
  deliveryMethodParent: {
    top: 477,
    left: 51,
    height: 196,
  },
  total1: {
    top: 717,
    left: 316,
    fontFamily: FontFamily.alatsiRegular,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  iphone11ProMax9: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 896,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    width: "100%",
  },
});

export default IPhone11ProMax5;
