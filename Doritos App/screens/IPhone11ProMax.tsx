import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone11ProMax = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax23, styles.iconLayout]}>
      <Pressable
        style={[styles.chevronLeft, styles.heartIconPosition]}
        onPress={() => navigation.navigate("IPhone11ProMax3")}
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
      <Image
        style={styles.iphone11ProMax23Child}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <Pressable
        style={styles.iphone11ProMax23Item}
        onPress={() => navigation.navigate("IPhone11ProMax12")}
      />
      <Text style={[styles.addToCart, styles.addToCartTypo]}>Add to cart</Text>
      <Text style={[styles.veggieTomatoBurger, styles.rs150FlexBox]}>
        Taco Bel
      </Text>
      <Text style={[styles.rs150, styles.rs150FlexBox]}>Rs. 150</Text>
      <Image
        style={styles.burger43}
        contentFit="cover"
        source={require("../assets/burger-4-3.png")}
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
  addToCartTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  allOurFoodsTypo: {
    opacity: 0.5,
    width: 297,
    fontFamily: FontFamily.arial,
    lineHeight: 21,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray_100,
    left: 53,
    position: "absolute",
  },
  rs150FlexBox: {
    textAlign: "center",
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
  deliveryInfo: {
    top: 533,
    color: Color.colorGray_100,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    left: 53,
    textAlign: "left",
  },
  returnPolicy: {
    top: 643,
    color: Color.colorGray_100,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    left: 53,
    textAlign: "left",
  },
  deliveredBetweenMonday: {
    top: 560,
    height: 77,
  },
  allOurFoods: {
    top: 666,
    height: 158,
  },
  iphone11ProMax23Child: {
    top: 373,
    left: 172,
    width: 68,
    height: 8,
    position: "absolute",
  },
  iphone11ProMax23Item: {
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
    fontFamily: FontFamily.tiroBanglaRegular,
    color: Color.colorWhitesmoke_100,
  },
  veggieTomatoBurger: {
    top: 408,
    left: 48,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.archivoBlackRegular,
    width: 318,
    height: 52,
    color: Color.colorGray_100,
  },
  rs150: {
    top: 453,
    left: 139,
    color: Color.colorOrangered_100,
    width: 135,
    height: 15,
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_mid,
    textAlign: "center",
  },
  burger43: {
    top: 110,
    left: 99,
    borderRadius: Border.br_101xl,
    width: 202,
    height: 210,
    position: "absolute",
  },
  iphone11ProMax23: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMax;
