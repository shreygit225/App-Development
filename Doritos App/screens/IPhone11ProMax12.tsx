import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone11ProMax12 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax7, styles.iconLayout]}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Image
          style={[styles.bicreditCard2FrontFillIcon, styles.bicreditIconLayout]}
          contentFit="cover"
          source={require("../assets/bicreditcard2frontfill.png")}
        />
        <Text style={styles.veggieTomatoBurger}>Veggie tomato burger</Text>
        <Text style={[styles.rs120, styles.rs120Typo]}>Rs. 120</Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Image
          style={[
            styles.bicreditCard2FrontFillIcon1,
            styles.bicreditIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/bicreditcard2frontfill.png")}
        />
        <Text style={[styles.tacoBell, styles.cartFlexBox]}>Taco Bell</Text>
        <Text style={[styles.rs150, styles.rs120Typo]}>Rs. 150</Text>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupInnerBg]} />
          <Text style={[styles.text, styles.textTypo2]}>1</Text>
          <Text style={[styles.text1, styles.textTypo1]}>-</Text>
          <Text style={[styles.text2, styles.textTypo]}>+</Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupInnerBg]} />
          <Text style={[styles.text, styles.textTypo2]}>1</Text>
          <Text style={[styles.text1, styles.textTypo1]}>-</Text>
          <Text style={[styles.text2, styles.textTypo]}>+</Text>
        </View>
        <View style={[styles.parent, styles.bicreditIconLayout]}>
          <Text style={[styles.text6, styles.textTypo1]}>-</Text>
          <Text style={[styles.text7, styles.textTypo]}>+</Text>
        </View>
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
      </View>
      <Text style={[styles.cart, styles.textTypo2]}>Cart</Text>
      <Pressable
        style={[styles.iphone11ProMax7Child, styles.groupInnerBg]}
        onPress={() => navigation.navigate("IPhone11ProMax6")}
      />
      <Text style={[styles.completeOrder, styles.textTypo2]}>
        Complete order
      </Text>
      <Pressable
        style={styles.chevronLeft}
        onPress={() => navigation.navigate("IPhone11ProMax13")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.burger42, styles.burger42Layout]}
        contentFit="cover"
        source={require("../assets/burger-4-21.png")}
      />
      <Image
        style={[styles.burger2Icon, styles.burger42Layout]}
        contentFit="cover"
        source={require("../assets/burger-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
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
    left: 0,
    height: 102,
    width: 315,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  bicreditIconLayout: {
    height: 16,
    position: "absolute",
  },
  rs120Typo: {
    color: Color.colorOrangered_100,
    fontSize: FontSize.size_mini,
    left: 104,
    textAlign: "center",
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  maskGroupLayout: {
    height: 69,
    width: 69,
    left: 17,
    position: "absolute",
  },
  cartFlexBox: {
    textAlign: "left",
    color: Color.colorGray_100,
  },
  groupLayout: {
    height: 20,
    width: 52,
  },
  groupInnerBg: {
    backgroundColor: Color.colorOrangered_100,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorWhitesmoke_300,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    height: 12,
    width: 5,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhitesmoke_300,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    textAlign: "center",
    position: "absolute",
  },
  burger42Layout: {
    height: 75,
    borderRadius: Border.br_101xl,
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  bicreditCard2FrontFillIcon: {
    top: 43,
    width: 16,
    left: 64,
    height: 16,
    overflow: "hidden",
  },
  veggieTomatoBurger: {
    top: 27,
    left: 91,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  rs120: {
    top: 58,
  },
  maskGroupIcon: {
    top: 16,
  },
  rectangleParent: {
    top: 178,
    height: 102,
    width: 315,
    left: 50,
    position: "absolute",
  },
  groupItem: {
    top: 52,
  },
  bicreditCard2FrontFillIcon1: {
    top: 95,
    width: 16,
    left: 64,
    height: 16,
    overflow: "hidden",
  },
  tacoBell: {
    top: 83,
    left: 103,
    width: 175,
    height: 44,
    fontFamily: FontFamily.tiroBanglaRegular,
    textAlign: "left",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  rs150: {
    top: 110,
  },
  groupInner: {
    height: 20,
    width: 52,
    left: 0,
    top: 0,
  },
  text: {
    top: 2,
    left: 25,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    textAlign: "center",
  },
  text1: {
    top: 1,
    left: 10,
  },
  text2: {
    top: 4,
    left: 39,
  },
  rectangleContainer: {
    top: 117,
    left: 239,
    width: 52,
    position: "absolute",
  },
  groupView: {
    left: 239,
    width: 52,
    position: "absolute",
    top: 0,
  },
  text6: {
    left: 0,
    top: 0,
  },
  text7: {
    top: 3,
    left: 29,
  },
  parent: {
    top: 234,
    left: 113,
    width: 34,
  },
  maskGroupIcon1: {
    top: 68,
  },
  rectangleGroup: {
    top: 242,
    height: 250,
    width: 315,
    left: 50,
    position: "absolute",
  },
  cart: {
    top: 61,
    left: 188,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  iphone11ProMax7Child: {
    top: 785,
    width: 314,
    height: 70,
    left: 50,
    backgroundColor: Color.colorOrangered_100,
    borderRadius: Border.br_11xl,
  },
  completeOrder: {
    top: 810,
    left: 157,
    color: Color.colorWhitesmoke_100,
    textAlign: "center",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
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
  vectorIcon: {
    height: "1.56%",
    width: "3.86%",
    top: "50.89%",
    right: "30.43%",
    bottom: "47.54%",
    left: "65.7%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  burger42: {
    top: 307,
    left: 67,
    width: 75,
  },
  burger2Icon: {
    top: 197,
    left: 65,
    width: 74,
  },
  iphone11ProMax7: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 896,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    width: "100%",
  },
});

export default IPhone11ProMax12;
