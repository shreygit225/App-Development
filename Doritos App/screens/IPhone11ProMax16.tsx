import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone11ProMax16 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProMax1}>
      <Image
        style={styles.iphone11ProMax1Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.iphone11ProMax1Item}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.iphone11ProMax1Inner}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("IPhone11ProMax15")}
      />
      <Text style={[styles.getStarteed, styles.doritosTypo]}>Get started</Text>
      <Text style={[styles.doritos, styles.doritosTypo]}>Doritos</Text>
      <View style={[styles.bellaOlonjeLogo1111Parent, styles.bellaLayout]}>
        <Image
          style={[styles.bellaOlonjeLogo1111, styles.bellaLayout]}
          contentFit="cover"
          source={require("../assets/bella-olonje-logo-111-11.png")}
        />
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  doritosTypo: {
    textAlign: "left",
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  bellaLayout: {
    height: 116,
    position: "absolute",
  },
  iphone11ProMax1Child: {
    top: 322,
    left: 139,
    width: 159,
    height: 171,
    position: "absolute",
  },
  iphone11ProMax1Item: {
    top: 650,
    left: 192,
    width: 278,
    height: 180,
    position: "absolute",
  },
  iphone11ProMax1Inner: {
    top: 630,
    left: -75,
    width: 394,
    height: 195,
    position: "absolute",
  },
  rectangleIcon: {
    top: 785,
    width: 357,
    height: 64,
    left: 170,
    position: "absolute",
  },
  rectanglePressable: {
    top: 790,
    left: 51,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 314,
    height: 70,
    position: "absolute",
  },
  getStarteed: {
    top: 810,
    left: 173,
    fontSize: FontSize.size_mid,
    color: "#ff460a",
  },
  doritos: {
    top: 517,
    left: 117,
    fontSize: 65,
    letterSpacing: -1.9,
    lineHeight: 56,
    color: Color.colorWhite,
  },
  bellaOlonjeLogo1111: {
    top: 0,
    left: 0,
    width: 88,
  },
  groupChild: {
    top: 26,
    left: 60,
    width: 40,
    height: 83,
    position: "absolute",
  },
  bellaOlonjeLogo1111Parent: {
    top: 349,
    width: 100,
    left: 170,
  },
  iphone11ProMax1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    backgroundColor: "#ff4b3a",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMax16;
