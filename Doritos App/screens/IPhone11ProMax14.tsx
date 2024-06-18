import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone11ProMax14 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProMax3}>
      <Text
        style={[styles.deliciousFoodFor, styles.deliciousFoodForPosition]}
      >{`Delicious 
food for you`}</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.iphone11ProMax3Child, styles.deliciousFoodForPosition]}
        onPress={() => navigation.navigate("IPhone11ProMax8")}
      />
      <Text style={styles.search}>Search</Text>
      <Pressable
        style={styles.seeMore}
        onPress={() => navigation.navigate("IPhone11ProMax13")}
      >
        <Text style={styles.seeMore1}>see more</Text>
      </Pressable>
      <Text style={styles.foods}>Foods</Text>
      <Text style={[styles.drinks, styles.saucePosition]}>Drinks</Text>
      <Text style={[styles.snacks, styles.saucePosition]}>Snacks</Text>
      <Text style={[styles.sauce, styles.saucePosition]}>Sauce</Text>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("IPhone11ProMax13")}
      >
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
        <Text
          style={[styles.veggieTomatoBurger, styles.rs120Typo]}
        >{`Veggie Tomato
Burger`}</Text>
        <Text style={[styles.rs120, styles.rs120Typo]}>Rs. 120</Text>
      </Pressable>
      <View style={[styles.iphone11ProMax3Item, styles.groupChildShadowBox]} />
      <Image
        style={styles.heroiconsSolidhome}
        contentFit="cover"
        source={require("../assets/heroiconssolidhome1.png")}
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
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.heart, styles.userPosition]}
        onPress={() => navigation.navigate("IPhone11ProMax3")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/heart1.png")}
        />
      </Pressable>
      <Image
        style={styles.burger2Icon}
        contentFit="cover"
        source={require("../assets/burger-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  deliciousFoodForPosition: {
    width: 314,
    left: 50,
    position: "absolute",
  },
  saucePosition: {
    color: Color.colorDarkgray,
    top: 348,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    position: "absolute",
  },
  rs120Typo: {
    textAlign: "center",
    left: 24,
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  userPosition: {
    top: 822,
    height: 24,
    width: 24,
    position: "absolute",
  },
  deliciousFoodFor: {
    top: 132,
    fontSize: FontSize.size_15xl,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.tiroBanglaRegular,
  },
  vectorIcon: {
    top: 74,
    left: 55,
    width: 22,
    height: 15,
    position: "absolute",
  },
  iphone11ProMax3Child: {
    top: 242,
    backgroundColor: "#efeeee",
    height: 60,
    borderRadius: Border.br_11xl,
  },
  search: {
    top: 262,
    left: 119,
    opacity: 0.5,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.tiroBanglaRegular,
    position: "absolute",
  },
  seeMore1: {
    fontSize: FontSize.size_mini,
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.arial,
    textAlign: "left",
  },
  seeMore: {
    left: 368,
    top: 413,
    position: "absolute",
  },
  foods: {
    left: 91,
    top: 348,
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.arial,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  drinks: {
    left: 182,
    fontFamily: FontFamily.tiroBanglaRegular,
  },
  snacks: {
    left: 274,
    fontFamily: FontFamily.arial,
  },
  sauce: {
    left: 373,
    fontFamily: FontFamily.arial,
  },
  vectorIcon1: {
    left: 85,
    width: 18,
    height: 18,
    top: 263,
    position: "absolute",
  },
  groupChild: {
    top: 51,
    left: 0,
    shadowColor: "rgba(57, 57, 57, 0.1)",
    shadowRadius: 60,
    elevation: 60,
    backgroundColor: Color.colorWhite,
    height: 270,
    width: 220,
    borderRadius: Border.br_11xl,
  },
  maskGroupIcon: {
    top: 0,
    left: 31,
    width: 164,
    height: 164,
    position: "absolute",
  },
  veggieTomatoBurger: {
    top: 201,
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    width: 175,
    height: 52,
    opacity: 0.9,
    color: Color.colorGray_100,
  },
  rs120: {
    width: 172,
    height: 19,
    top: 263,
    color: Color.colorOrangered_100,
    fontSize: FontSize.size_mid,
  },
  rectangleParent: {
    top: 432,
    left: 103,
    height: 321,
    width: 220,
    position: "absolute",
  },
  iphone11ProMax3Item: {
    top: 378,
    left: 75,
    shadowColor: "rgba(195, 63, 21, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorOrangered_100,
    width: 87,
    height: 3,
  },
  heroiconsSolidhome: {
    top: 818,
    width: 31,
    height: 31,
    left: 50,
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
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  user: {
    left: 241,
  },
  heart: {
    left: 149,
  },
  burger2Icon: {
    top: 469,
    left: 123,
    borderRadius: Border.br_101xl,
    width: 176,
    height: 149,
    position: "absolute",
  },
  iphone11ProMax3: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProMax14;
