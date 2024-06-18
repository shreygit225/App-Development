import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone11ProMax9 = () => {
  return (
    <View style={styles.iphone11ProMax16}>
      <Text style={styles.orders}>Orders</Text>
      <Text style={styles.noOrdersYet}>No orders yet</Text>
      <Text
        style={[styles.hitTheOrange, styles.hitTheOrangeTypo]}
      >{`Hit the orange button down
below to Create an order`}</Text>
      <View style={styles.iphone11ProMax16Child} />
      <Text style={[styles.startOdering, styles.hitTheOrangeTypo]}>
        Start odering
      </Text>
      <Image
        style={styles.chevronLeftIcon}
        contentFit="cover"
        source={require("../assets/chevronleft.png")}
      />
      <Image
        style={styles.iphone11ProMax16Item}
        contentFit="cover"
        source={require("../assets/group-661.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hitTheOrangeTypo: {
    fontSize: FontSize.size_mid,
    textAlign: "center",
    position: "absolute",
  },
  orders: {
    top: 61,
    left: 175,
    fontSize: FontSize.size_lg,
    fontStyle: "italic",
    fontFamily: FontFamily.arapeyItalic,
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  noOrdersYet: {
    top: 418,
    left: 123,
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    fontFamily: FontFamily.tiroBanglaRegular,
    color: Color.colorGray_100,
    position: "absolute",
  },
  hitTheOrange: {
    top: 468,
    left: 105,
    fontFamily: FontFamily.arial,
    opacity: 0.57,
    color: Color.colorGray_100,
  },
  iphone11ProMax16Child: {
    top: 785,
    left: 50,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered_100,
    width: 314,
    height: 70,
    position: "absolute",
  },
  startOdering: {
    top: 810,
    left: 157,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    fontSize: FontSize.size_mid,
  },
  chevronLeftIcon: {
    top: 60,
    left: 41,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iphone11ProMax16Item: {
    height: "12.05%",
    width: "27.32%",
    top: "30.36%",
    right: "40.8%",
    bottom: "57.59%",
    left: "31.88%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone11ProMax16: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMax9;
