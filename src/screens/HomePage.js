import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { useState } from "react";
import React from "react";
import Footer from "../components/Footer";
//import { CATEGORIES } from '../data/dummy-data';

const images = [
  "https://onlinepngtools.com/images/examples-onlinepngtools/desert-transparent.png",
  "https://image.shutterstock.com/image-vector/shine-light-effect-golden-sky-260nw-1831190758.jpg",
  "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} icons={itemData.item.icons} />
  );
}

function HomePage() {
  const catData = require("../assets/data/categorydata.json");

  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurements
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <>
      <View style={styles.root}>
        {/* <ScrollView> */}
        <SafeAreaView style={styles.slider}>
          <View stle={styles.wrap}>
            <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}
            >
              {images.map((e, index) => (
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{ uri: e }}
                />
              ))}
            </ScrollView>
            <View style={styles.wrapDot}>
              {images.map((e, index) => (
                <Text
                  key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                >
                  ●
                </Text>
              ))}
            </View>
          </View>
        </SafeAreaView>

        <FlatList
          data={catData}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={3}
        />
        {/* </ScrollView> */}
        <Footer />
      </View>
    </>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
  },
  slider: {
    // flex: 1
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    overflow: "hidden",
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
});
