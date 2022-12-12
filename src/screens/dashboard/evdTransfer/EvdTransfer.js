import { Text, StyleSheet, View, TextInput, Image } from "react-native";
import Card from "../../../components/UI/Card";
import CustomButton from "../../../components/UI/CustomButton";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";

function CancelHandler() {
  Alert.alert("cancel button", "No action");
}

const EvdTransfer = () => {
  const numbers = require("../../../assets/data/helpline.json");
  return (
    <>
      <View style={styles.container}>
        <Card
          imagePath={
            <Image
              style={styles.image}
              source={require("../../../assets/images/ScreenIcons/forgot-password-icon.png")}
            />
          }
        >
          <Input
            placeholder="Transfer to (Mobile Number)"
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <CustomButton title="VALIDATE NUMBER" />
          </View>
          <Input
            placeholder="Transfer to (Mobile Number)"
            style={styles.input}
          />
          <View style={styles.action}>
            <CustomButton title="PROCEED" />
            <CustomButton title="Cancel" type="Cancel" />
          </View>
        </Card>
        <Footer />
      </View>
    </>
  );
};

export default EvdTransfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    justifyContent: "space-between",
  },
  image: {
    height: 80,
    width: 70,
    margin: 20,
    resizeMode: "contain",
  },
  contentContainer: {},
  buttonContainer: {
    marginLeft: 20,
  },
  action: {
    marginTop: 70,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    marginBottom: 0,
    marginTop: 35,
  },
});
