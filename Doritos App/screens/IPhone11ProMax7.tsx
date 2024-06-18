import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone11ProMax7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMax20, styles.iconLayout]}>
      <Text style={[styles.found6Results, styles.yourOrderHasFlexBox]}>
        Found 6 results
      </Text>
      <Pressable
        style={styles.chevronLeft}
        onPress={() => navigation.navigate("IPhone11ProMax5")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Image
        style={styles.iphone11ProMax20Child}
        contentFit="cover"
        source={require("../assets/group-66.png")}
      />
      <Text style={[styles.yourOrderHas, styles.yourOrderHasFlexBox]}>
        Your order has been successfully placed!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  yourOrderHasFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  found6Results: {
    top: 164,
    left: 72,
    fontSize: FontSize.size_9xl,
    fontStyle: "italic",
    fontFamily: FontFamily.arapeyItalic,
    width: 270,
    display: "none",
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
  iphone11ProMax20Child: {
    height: "12.05%",
    width: "27.33%",
    top: "28.23%",
    right: "37.88%",
    bottom: "59.71%",
    left: "34.79%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yourOrderHas: {
    top: 429,
    left: 113,
    fontSize: 20,
    fontFamily: FontFamily.interRegular,
    width: 213,
    height: 60,
  },
  iphone11ProMax20: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 945,
    overflow: "hidden",
  },
});

export default IPhone11ProMax7;
