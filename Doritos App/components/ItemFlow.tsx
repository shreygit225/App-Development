import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const ItemFlow = () => {
  return (
    <View style={styles.itemflow}>
      <View style={styles.groupHolder} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupHolder: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 100,
    height: 100,
    overflow: "hidden",
    display: "none",
  },
  itemflow: {
    width: 0,
    height: 0,
  },
});

export default ItemFlow;
