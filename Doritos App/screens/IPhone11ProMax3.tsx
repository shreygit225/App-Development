import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone11ProMax3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProMax19}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.heroiconsSolidhome}
        contentFit="cover"
        source={require("../assets/heroiconssolidhome.png")}
      />
      <Pressable
        style={styles.icsharpHistory}
        onPress={() => navigation.navigate("IPhone11ProMax10")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icsharphistory.png")}
        />
      </Pressable>
      <Image
        style={styles.shoppingCartIcon}
        contentFit="cover"
        source={require("../assets/shoppingcart.png")}
      />
      <Pressable
        style={[styles.user, styles.userPosition]}
        onPress={() => navigation.navigate("IPhone11ProMax11")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
      </Pressable>
      <Image
        style={[styles.heartIcon, styles.userPosition]}
        contentFit="cover"
        source={require("../assets/heart1.png")}
      />
      <Text style={styles.found4Results}>Found 4 results</Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("IPhone11ProMax2")}
      >
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text style={[styles.rs120, styles.rs120Typo]}>Rs. 200</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("IPhone11ProMax4")}
      >
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text
          style={styles.mayonnaiseSpicyBurger}
        >{`Mayonnaise Spicy Burger `}</Text>
        <Text style={[styles.rs135, styles.rs120Typo]}>Rs. 135</Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Pressable
          style={[styles.burger31, styles.burgerLayout]}
          onPress={() => navigation.navigate("IPhone11ProMax1")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/burger-3-11.png")}
          />
        </Pressable>
        <Text style={[styles.rs135, styles.rs120Typo]}>Rs 180</Text>
      </View>
      <View style={styles.groupView}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Text style={[styles.tacoBell, styles.tacoBellLayout]}>Taco Bell</Text>
        <Image
          style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.doubleDecker, styles.tacoBellLayout]}>
          Double Decker
        </Text>
        <Text style={[styles.rs150, styles.rs120Typo]}>Rs. 150</Text>
      </View>
      <Pressable
        style={[styles.burger22, styles.burgerLayout]}
        onPress={() => navigation.navigate("IPhone11ProMax4")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/burger-2-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.burger42, styles.burgerLayout]}
        onPress={() => navigation.navigate("IPhone11ProMax")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/burger-4-2.png")}
        />
      </Pressable>
      <Text style={styles.cheeseHamburger}>Cheese Hamburger</Text>
      <Pressable
        style={[styles.image14, styles.burgerLayout]}
        onPress={() => navigation.navigate("IPhone11ProMax2")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-14.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  userPosition: {
    top: 822,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildShadowBox: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(57, 57, 57, 0.1)",
    height: 212,
    width: 156,
    position: "absolute",
  },
  rs120Typo: {
    width: 135,
    color: Color.colorOrangered_100,
    fontSize: FontSize.size_mid,
    textAlign: "center",
    fontFamily: FontFamily.tiroBanglaRegular,
    height: 15,
    position: "absolute",
  },
  rectangleLayout: {
    height: 252,
    width: 156,
    position: "absolute",
  },
  maskGroupLayout: {
    height: 129,
    width: 129,
    top: 0,
    position: "absolute",
  },
  burgerLayout: {
    height: 125,
    position: "absolute",
  },
  tacoBellLayout: {
    width: 110,
    height: 41,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  vectorIcon: {
    top: 74,
    width: 22,
    height: 15,
    left: 55,
    position: "absolute",
  },
  heroiconsSolidhome: {
    top: 818,
    left: 50,
    width: 31,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    opacity: 0.3,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  icsharpHistory: {
    left: 333,
    top: 819,
    width: 29,
    height: 29,
    position: "absolute",
  },
  shoppingCartIcon: {
    top: 65,
    left: 349,
    height: 24,
    width: 24,
    opacity: 0.3,
    position: "absolute",
    overflow: "hidden",
  },
  icon1: {
    overflow: "hidden",
  },
  user: {
    left: 241,
  },
  heartIcon: {
    left: 149,
    overflow: "hidden",
  },
  found4Results: {
    top: 119,
    left: 68,
    fontSize: FontSize.size_9xl,
    width: 270,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(57, 57, 57, 0.1)",
  },
  rs120: {
    top: 167,
    left: 7,
    width: 135,
    color: Color.colorOrangered_100,
    fontSize: FontSize.size_mid,
  },
  rectangleParent: {
    top: 278,
    left: 30,
    height: 212,
    width: 156,
    position: "absolute",
  },
  groupShadowBox: {
    top: 40,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(57, 57, 57, 0.1)",
    left: 0,
    height: 212,
    width: 156,
    position: "absolute",
  },
  maskGroupIcon: {
    left: 13,
    height: 129,
    width: 129,
  },
  mayonnaiseSpicyBurger: {
    top: 143,
    width: 138,
    height: 41,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    left: 13,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  rs135: {
    top: 207,
    left: 7,
    width: 135,
    color: Color.colorOrangered_100,
    fontSize: FontSize.size_mid,
  },
  rectangleGroup: {
    top: 241,
    left: 222,
  },
  icon2: {
    borderRadius: Border.br_101xl,
  },
  burger31: {
    left: 16,
    top: 4,
    width: 125,
    height: 125,
  },
  rectangleContainer: {
    top: 525,
    left: 33,
  },
  rectangleView: {
    top: 3,
    left: 171,
  },
  tacoBell: {
    top: 129,
    left: 201,
  },
  maskGroupIcon2: {
    left: 187,
  },
  doubleDecker: {
    top: 115,
    left: 0,
  },
  rs150: {
    top: 170,
    left: 188,
  },
  groupView: {
    top: 562,
    width: 327,
    height: 215,
    left: 55,
    position: "absolute",
  },
  burger22: {
    left: 225,
    top: 218,
    width: 151,
  },
  burger42: {
    left: 246,
    top: 528,
    width: 125,
    height: 125,
  },
  cheeseHamburger: {
    top: 387,
    left: 38,
    width: 131,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  icon5: {
    borderRadius: 86,
  },
  image14: {
    top: 215,
    width: 153,
    left: 33,
  },
  iphone11ProMax19: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProMax3;
