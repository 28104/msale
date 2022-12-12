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
function CustomerInforamtion() {
  const CustomerInforamtion = require("../../assets/data/CustomerInformation.json");
  const [isshow, Setshow] = useState(false);
  const [custInfo, setCustInfo] = useState({
    Id: "",
    Mobileno: "",
    Cardno: "",
  });
  function showContent() {
    Setshow(true);
  }
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
          value={custInfo.Id}
        />
        <Text style={styles.text}>OR</Text>
        <Input
          placeholder="Subscriber's Mobile Number"
          value={custInfo.Mobileno}
        />
        <Text style={styles.text}>OR</Text>
        <Input
          placeholder="Subscriber's DigitalCard Number"
          value={custInfo.Cardno}
        />
        <View style={styles.buttonContainer}>
          <CustomButton title="PROCEED" onPress={showContent} />
          <CustomButton type="Cancel" title="CANCEL" />
        </View>
      </Card>
    </View>
  );
  if (isshow === true) {
    content = (
      <ScrollView>
        <Card>
          <View style={styles.cardContainer}>
            <View style={styles.leftborder}>
              <Text style={styles.text}>Status</Text>
              <Image
                source={require("../../assets/images/ScreenIcons/tickmark.png")}
                style={styles.image}
              />
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.bottomborder}>
                <Text style={styles.text}> Customer Name</Text>
                <Text style={styles.detailstext}>
                  {CustomerInforamtion.CustomerName}
                </Text>
              </View>
              <Text style={styles.text}>Subscriber Mobile No.</Text>
              <Text style={styles.detailstext}>
                {CustomerInforamtion.Mobileno}
              </Text>
            </View>
          </View>
        </Card>

        <Card>
          <View style={styles.cardContainer}>
            <View style={styles.detailsContainer}>
              <View style={styles.bottomborder}>
                <Text style={styles.text}> Current Balance</Text>
                <Text style={[styles.detailstext, { color: "#e51960" }]}>
                  {CustomerInforamtion.CurrentBalance}
                </Text>
              </View>
              <Text style={styles.text}>Recharge Due Date</Text>
              <Text style={[styles.detailstext, { color: "#e51960" }]}>
                {CustomerInforamtion.RechargeDueDate}
              </Text>
            </View>
            <View style={styles.leftborder} />
            <View style={styles.detailsContainer}>
              <View style={styles.bottomborder}>
                <Text style={styles.text}>Recommended Monthly Recharge</Text>
                <Text style={[styles.detailstext, { color: "#e51960" }]}>
                  {CustomerInforamtion.RecommendedRecharge}
                </Text>
              </View>
              <Text style={styles.text}>LDP Basepack End Date</Text>
              <Text style={[styles.detailstext, { color: "#e51960" }]}>
                {CustomerInforamtion.LDPEndDate}
              </Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.cardContainer}>
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Connection Type</Text>
              <Text style={styles.detailstext}>
                {CustomerInforamtion.ConnectionType}
              </Text>
            </View>
            <View style={styles.leftborder} />
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Box Type</Text>
              <Text style={styles.detailstext}>
                {CustomerInforamtion.BoxType}
              </Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.cardContainer}>
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Packages</Text>
              {CustomerInforamtion.Packages.map((item) => (
                <Text style={styles.detailstext}>{item}</Text>
              ))}
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.cardContainer}>
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Last Five Recharges</Text>
              <TextInput
                value={CustomerInforamtion.RechargeNo}
                editable={false}
                style={{ backgroundColor: "#F0F0F0" }}
              />
            </View>
            <View style={styles.leftborder} />
            <View style={[styles.detailsContainer, {marginTop: 5}]}>
              <CustomButton title="VIEW" />
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.cardContainer}>
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Recharge Amount</Text>
              {CustomerInforamtion.LastFiveRecharges.map((item) => (
                <Text style={styles.detailstext}>{item.RechargeAmount}</Text>
              ))}
            </View>
            <View style={styles.leftborder} />
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Date</Text>
              {CustomerInforamtion.LastFiveRecharges.map((item) => (
                <Text style={styles.detailstext}>{item.Date}</Text>
              ))}
            </View>
          </View>
        </Card>
        <View style={{ flexDirection: "row", justifyContent: "center",marginBottom : 8}}>
          <CustomButton type="Cancel" title="BACK" />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      {content}
      <Footer />
    </View>
  );
}
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
export default CustomerInforamtion;
