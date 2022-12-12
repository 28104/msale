import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Card from "../../components/UI/Card";
import CustomButton from "../../components/UI/CustomButton";
import CustomDropdown from "../../components/UI/CustomDropdown";

function MultiTVAccount() {
    const [visible, setVisible] = useState(false);
    function onProcessed() {
        setVisible(true);
      }

    const data = [1, 2, 3, 4, 5, 6, 7, 8];
   
  let content = (
    <View>
      <Card
        imagePath={
          <Image
            style={styles.image}
            source={require("../../assets/images/ScreenIcons/forgot-password-icon.png")}
          />
        }
      >
        <Input
          placeholder="Subscriber ID"
          style={styles.input}
        />
        
        <Input
          placeholder="TSK Pin" 
        />
        <View style={styles.dropdownContainer}>
        <CustomDropdown data={data} label="Select Offer Category" />
        </View>
        
        <View style={styles.buttonContainer}>
          <CustomButton title="PROCEED" onPress={onProcessed} />
          <CustomButton type="Cancel" title="CANCEL" />
        </View>
      </Card>
    </View>
  );
  if (visible) {
    content = (
      <>
       <Card>
          <View style={styles.cardContainer}>
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Subscriber ID</Text>
              <Text style={styles.detailstext}>
                3001024029
              </Text>
            </View>
            <View style={styles.leftborder} />
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Box Type</Text>
              <Text style={styles.detailstext}>
                SD
              </Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.dropdownContainer}>
            <CustomDropdown data={data} label="Non Combo" />
            <CustomDropdown data={data} label="S A MultiTV 150 Jul17 Pack" />
            <Input
          placeholder="TSK Pin" 
        />
          </View>
          <View style={styles.buttonContainer}>
          <CustomButton title="REGISTER" onPress={onProcessed} />
        </View>
        </Card>
      </>
    );
  }

  return (
    <View style={styles.container}>
      {content}
      <Footer />
    </View>
  );
}
export default MultiTVAccount;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    justifyContent: "space-between",
  },
  cardContainer: {
    flexDirection: "row",
  },
  input: {
    marginTop: 25,
  },
  image: {
    height: 85,
    width: 95,
    margin: 10,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    padding: 5,
  },
  detailstext: {
    textAlign: "center",
    padding: 4,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  dropdownContainer: {
    marginBottom: 25,
   // marginTop: 25,
  },
  bottomborder: {
    borderBottomWidth: 0.5,
    width: "100%",
    marginTop: 10,
    marginBottom: 5,
  },
  leftborder: {
    borderRightWidth: 0.5,
    margin: 10,
  },
});
