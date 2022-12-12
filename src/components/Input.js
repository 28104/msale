import { View, Text, TextInput, StyleSheet } from "react-native";
export default function Input({ placeholder, style, onChange, value, secure }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.sectionStyle}>
        <Text style={styles.text}>*</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
          secureTextEntry={secure}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    color: "red",
    fontSize: 20,
    marginLeft: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    height: 40,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 5,
    width: 5,
    resizeMode: "stretch",
    alignItems: "center",
  },
});
