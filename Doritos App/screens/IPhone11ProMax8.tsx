import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone11ProMax8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax18, styles.iconLayout]}>
      <Text style={styles.found6Results}>Found 6 results</Text>
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
        style={styles.itemNotFound}
        contentFit="cover"
        source={require("../assets/item-not-found.png")}
      />
      <Image
        style={styles.trySearchingTheItemWithA}
        contentFit="cover"
        source={require("../assets/try-searching-the-item-with-a-different-keyword.png")}
      />
      <Image
        style={styles.feathersearchIcon}
        contentFit="cover"
        source={require("../assets/feathersearch.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  found6Results: {
    top: 164,
    left: 72,
    fontSize: FontSize.size_9xl,
    fontStyle: "italic",
    fontFamily: FontFamily.arapeyItalic,
    color: Color.colorBlack,
    textAlign: "center",
    width: 270,
    display: "none",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  chevronLeft: {
    left: 42,
    top: 70,
    width: 24,
    height: 24,
    position: "absolute",
  },
  itemNotFound: {
    top: 451,
    left: 141,
    width: 155,
    height: 21,
    position: "absolute",
  },
  trySearchingTheItemWithA: {
    top: 499,
    left: 112,
    width: 221,
    height: 36,
    position: "absolute",
  },
  feathersearchIcon: {
    top: 285,
    left: 136,
    width: 122,
    height: 122,
    position: "absolute",
    overflow: "hidden",
  },
  iphone11ProMax18: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 913,
    overflow: "hidden",
  },
});

export default IPhone11ProMax8;
