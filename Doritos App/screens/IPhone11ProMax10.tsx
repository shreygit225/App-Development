import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone11ProMax10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax15, styles.iconLayout]}>
      <Text style={[styles.history, styles.historyTypo]}>History</Text>
      <Text style={styles.noHistoryYet}>No history yet</Text>
      <Text
        style={[styles.hitTheOrange, styles.hitTheOrangeTypo]}
      >{`Hit the orange button down
below to Create an order`}</Text>
      <Pressable
        style={styles.iphone11ProMax15Child}
        onPress={() => navigation.navigate("IPhone11ProMax14")}
      />
      <Text style={[styles.startOdering, styles.hitTheOrangeTypo]}>
        Start odering
      </Text>
      <Pressable
        style={styles.chevronLeft}
        onPress={() => navigation.navigate("IPhone11ProMax14")}
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
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  historyTypo: {
    fontFamily: FontFamily.arapeyItalic,
    fontStyle: "italic",
  },
  hitTheOrangeTypo: {
    fontSize: FontSize.size_mid,
    textAlign: "center",
    position: "absolute",
  },
  history: {
    top: 61,
    left: 175,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  noHistoryYet: {
    top: 418,
    left: 119,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.tiroBanglaRegular,
    textAlign: "center",
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
  iphone11ProMax15Child: {
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
    left: 164,
    color: Color.colorWhitesmoke_100,
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
    height: "13.2%",
    width: "25.72%",
    top: "30.46%",
    right: "37.13%",
    bottom: "56.34%",
    left: "37.15%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone11ProMax15: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});

export default IPhone11ProMax10;
