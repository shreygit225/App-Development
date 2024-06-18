import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone11ProMax11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax13, styles.iconLayout]}>
      <Text style={styles.myProfile}>My profile</Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("IPhone11ProMax14")}
      >
        <View style={styles.groupChild} />
        <Text style={styles.update}>Update</Text>
      </Pressable>
      <Pressable
        style={[styles.chevronLeft, styles.chevronLayout]}
        onPress={() => navigation.navigate("IPhone11ProMax14")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Text style={styles.change}>change</Text>
      <Text style={[styles.personalDetails, styles.ordersTypo]}>
        Personal details
      </Text>
      <Image
        style={styles.iphone11ProMax13Child}
        contentFit="cover"
        source={require("../assets/group-56.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.orders, styles.ordersTypo]}>
          Order Instructions
        </Text>
        <Image
          style={[styles.chevronLeftIcon, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft1.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.orders, styles.ordersTypo]}>Pending reviews</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft1.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.orders, styles.ordersTypo]}>FAQ</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft1.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.orders, styles.ordersTypo]}>Help</Text>
        <Image
          style={[styles.chevronLeftIcon, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft1.png")}
        />
      </View>
      <Image
        style={styles.image12Icon}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Text style={[styles.adityaPandey, styles.adityaTypo]}>
        Aditya Pandey
      </Text>
      <Text style={[styles.text, styles.adityaTypo]}>+91 8732947923</Text>
      <Text style={[styles.vikramAdityaMarg, styles.adityaTypo]}>
        Vikram Aditya Marg, Dwarkadas J. Sanghvi College of Engineering, Mumbai
        -09
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  chevronLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  ordersTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 315,
    left: 42,
    position: "absolute",
  },
  adityaTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.timesNewRoman,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  myProfile: {
    top: 124,
    fontSize: FontSize.size_15xl,
    textAlign: "left",
    color: Color.colorGray_100,
    left: 50,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered_100,
    left: 0,
    top: 0,
    height: 70,
    width: 314,
    position: "absolute",
  },
  update: {
    top: 25,
    left: 134,
    fontSize: FontSize.size_mid,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  rectangleParent: {
    top: 845,
    height: 70,
    width: 314,
    left: 50,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  chevronLeft: {
    left: 41,
    top: 60,
  },
  change: {
    top: 212,
    left: 304,
    fontFamily: FontFamily.arial,
    color: Color.colorOrangered_100,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  personalDetails: {
    top: 209,
    left: 42,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
  },
  iphone11ProMax13Child: {
    top: 239,
    height: 197,
    width: 315,
    left: 42,
    position: "absolute",
  },
  groupShadowBox: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    height: 60,
    width: 315,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  orders: {
    top: 20,
    left: 23,
    fontFamily: FontFamily.tiroBanglaRegular,
    width: 151,
  },
  chevronLeftIcon: {
    top: 19,
    left: 264,
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 465,
  },
  rectangleContainer: {
    top: 552,
  },
  groupView: {
    top: 639,
  },
  rectangleParent1: {
    top: 726,
  },
  image12Icon: {
    top: 284,
    left: 53,
    width: 98,
    height: 88,
    position: "absolute",
  },
  adityaPandey: {
    top: 293,
    left: 164,
    height: 29,
    width: 151,
  },
  text: {
    top: 326,
    left: 163,
    width: 141,
    height: 23,
  },
  vikramAdityaMarg: {
    top: 354,
    left: 165,
    width: 183,
    height: 48,
  },
  iphone11ProMax13: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 945,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    width: "100%",
  },
});

export default IPhone11ProMax11;
