import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;

function CategoryGridTile({ title, icons }) {
  const navigation = useNavigation();
  const menuNavigation = () => {
    navigation.navigate(title);
  };
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={menuNavigation}
      >
        <View style={[styles.innerContainer]}>
          <Icon name={icons} size={24} color="black" />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    //flex: 1,
    margin: 1,
    height: 130,
    width: WIDTH / 3,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
