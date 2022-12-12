import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import DropDown from "./UI/DropDown";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({ children }) => {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/Background/headerBg.jpg")}
      >
        {children ? (
          children
        ) : (
          <View style={{ height: "100%", width: "100%" }}></View>
        )}
      </ImageBackground>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8CBFD0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  icon: {},
  backgroundImage: {
    // justifyContent: 'flex-end',
    alignItems: "flex-end",
    height: "100%",
    width: "100%",
  },
});
