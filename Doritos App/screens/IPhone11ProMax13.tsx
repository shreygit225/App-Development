import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone11ProMax13 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax4, styles.iconLayout]}>
      <Pressable
        style={[styles.chevronLeft, styles.heartIconPosition]}
        onPress={() => navigation.navigate("IPhone11ProMax14")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Image
        style={[styles.heartIcon, styles.heartIconPosition]}
        contentFit="cover"
        source={require("../assets/heart.png")}
      />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Text style={[styles.veggieTomatoBurger, styles.rs120FlexBox]}>
        Vegetarian Tomato Burger
      </Text>
      <Text style={[styles.deliveryInfo, styles.addToCartTypo]}>
        Delivery info
      </Text>
      <Text style={[styles.returnPolicy, styles.addToCartTypo]}>
        Return policy
      </Text>
      <Text style={[styles.deliveredBetweenMonday, styles.allOurFoodsTypo]}>
        Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
      </Text>
      <Text style={[styles.allOurFoods, styles.allOurFoodsTypo]}>
        All our foods are double checked before leaving our stores so by any
        case you found a broken food please contact our hotline immediately.
      </Text>
      <Text style={[styles.rs120, styles.rs120FlexBox]}>Rs. 120</Text>
      <Image
        style={styles.iphone11ProMax4Child}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <Pressable
        style={styles.iphone11ProMax4Item}
        onPress={() => navigation.navigate("IPhone11ProMax12")}
      />
      <Text style={[styles.addToCart, styles.addToCartTypo]}>Add to cart</Text>
      <Image
        style={styles.burger1Icon}
        contentFit="cover"
        source={require("../assets/burger-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  heartIconPosition: {
    top: 60,
    position: "absolute",
  },
  rs120FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  addToCartTypo: {
    textAlign: "left",
    fontFamily: FontFamily.tiroBanglaRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  allOurFoodsTypo: {
    opacity: 0.5,
    width: 297,
    lineHeight: 21,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.tiroBanglaRegular,
    left: 53,
    color: Color.colorGray_100,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  chevronLeft: {
    left: 41,
    width: 24,
    height: 24,
  },
  heartIcon: {
    left: 340,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  maskGroupIcon: {
    top: 94,
    left: 86,
    width: 241,
    height: 241,
    position: "absolute",
  },
  veggieTomatoBurger: {
    top: 406,
    left: 48,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.archivoBlackRegular,
    width: 318,
    height: 52,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  deliveryInfo: {
    top: 533,
    left: 53,
    fontFamily: FontFamily.tiroBanglaRegular,
    fontSize: FontSize.size_mid,
    color: Color.colorGray_100,
  },
  returnPolicy: {
    top: 643,
    left: 53,
    fontFamily: FontFamily.tiroBanglaRegular,
    fontSize: FontSize.size_mid,
    color: Color.colorGray_100,
  },
  deliveredBetweenMonday: {
    top: 560,
    height: 77,
  },
  allOurFoods: {
    top: 666,
    height: 158,
  },
  rs120: {
    top: 471,
    left: 121,
    fontSize: FontSize.size_3xl,
    fontStyle: "italic",
    fontFamily: FontFamily.arapeyItalic,
    color: Color.colorOrangered_100,
    width: 172,
    height: 19,
  },
  iphone11ProMax4Child: {
    top: 373,
    left: 172,
    width: 68,
    height: 8,
    position: "absolute",
  },
  iphone11ProMax4Item: {
    top: 785,
    left: 50,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered_100,
    width: 314,
    height: 70,
    position: "absolute",
  },
  addToCart: {
    top: 810,
    left: 160,
    color: Color.colorWhitesmoke_100,
  },
  burger1Icon: {
    top: 130,
    left: 75,
    borderRadius: Border.br_101xl,
    width: 265,
    height: 214,
    position: "absolute",
  },
  iphone11ProMax4: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMax13;
