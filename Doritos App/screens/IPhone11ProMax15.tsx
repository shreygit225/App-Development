import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone11ProMax15 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProMax2}>
      <Image
        style={styles.iphone11ProMax2Child}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <View style={styles.bellaOlonjeLogo1111Parent}>
        <Image
          style={styles.bellaOlonjeLogo1111}
          contentFit="cover"
          source={require("../assets/bella-olonje-logo-111-1.png")}
        />
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Text style={[styles.signUp, styles.loginTypo]}>Sign-up</Text>
      <View style={styles.iphone11ProMax2Item} />
      <View style={styles.emailAddressParent}>
        <Text style={[styles.emailAddress, styles.passwordTypo]}>
          Email address
        </Text>
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View>
      <View style={[styles.passwordParent, styles.passwordParentPosition]}>
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Text style={[styles.text, styles.textTypo]}>{`* * * * * * * * `}</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <Pressable
        style={[styles.iphone11ProMax2Inner, styles.passwordParentPosition]}
        onPress={() => navigation.navigate("IPhone11ProMax14")}
      />
      <Text style={[styles.login1, styles.textTypo]}>Login</Text>
      <Text style={[styles.forgotPasscode, styles.textTypo]}>
        Forgot passcode?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    top: 330,
    color: Color.colorGray_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  passwordTypo: {
    opacity: 0.4,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.tiroBanglaRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  passwordParentPosition: {
    width: 314,
    left: 50,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  iphone11ProMax2Child: {
    top: 47,
    left: -1,
    width: 414,
    height: 382,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  bellaOlonjeLogo1111: {
    width: 132,
    left: 0,
    top: 0,
    height: 162,
    position: "absolute",
  },
  groupChild: {
    top: 37,
    left: 90,
    width: 60,
    height: 116,
    position: "absolute",
  },
  bellaOlonjeLogo1111Parent: {
    top: 113,
    left: 136,
    width: 150,
    height: 162,
    position: "absolute",
  },
  login: {
    left: 89,
  },
  signUp: {
    left: 263,
  },
  iphone11ProMax2Item: {
    top: 366,
    shadowColor: "rgba(195, 63, 21, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_21xl,
    backgroundColor: "#21e529",
    width: 134,
    height: 3,
    left: 50,
    position: "absolute",
  },
  emailAddress: {
    color: "#060606",
    width: 81,
    height: 21,
  },
  groupItem: {
    top: 53,
    width: 249,
  },
  emailAddressParent: {
    top: 448,
    width: 248,
    height: 53,
    left: 50,
    position: "absolute",
  },
  password: {
    color: Color.colorGray_100,
  },
  text: {
    top: 28,
    fontStyle: "italic",
    fontFamily: FontFamily.arapeyItalic,
    color: Color.colorGray_100,
    left: 0,
  },
  groupInner: {
    top: 59,
    width: 315,
  },
  passwordParent: {
    top: 536,
    height: 59,
  },
  iphone11ProMax2Inner: {
    top: 785,
    backgroundColor: "#ef2b11",
    height: 70,
    borderRadius: Border.br_11xl,
  },
  login1: {
    top: 810,
    left: 184,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    fontSize: FontSize.size_mid,
  },
  forgotPasscode: {
    top: 629,
    color: Color.colorOrangered_100,
    left: 50,
    fontFamily: FontFamily.tiroBanglaRegular,
    fontSize: FontSize.size_mid,
  },
  iphone11ProMax2: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMax15;
