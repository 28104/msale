import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Footer from '../../components/Footer';
import CustomButton from '../../components/UI/CustomButton';
import Input from '../../components/Input';
import Card from '../../components/UI/Card';
function CustomerRecharge() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card
          imagePath={
            <Image
              style={styles.image}
              source={require('../../assets/images/ScreenIcons/forgot-password-icon.png')}
            />
          }>
          <Input
            placeholder="Subscriber ID"
            style={[styles.input, {marginTop: 30}]}
          />
          <Text style={styles.text}>OR</Text>
          <Input placeholder="Subscriber's Mobile Number" />
          <Text style={styles.text}>OR</Text>
          <Input placeholder="Subscriber's DigitalCard Number" />
          <View style={styles.subcriberButton}>
            <CustomButton title="Validate Subscriber" />
          </View>
          <Input placeholder="Amount" />
          <Input placeholder="TSK Serial Number" />
          <View style={styles.buttonContainer}>
            <CustomButton title="PROCEED" />
            <CustomButton type="Cancel" title="CANCEL" />
          </View>
        </Card>
      </ScrollView>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'space-between',
  },
  image: {
    height: 85,
    width: 95,
    margin: 10,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom :10,
  },
  subcriberButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
});
export default CustomerRecharge;
