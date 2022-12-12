import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  Pressable,
  TextInput,
} from 'react-native';
import Footer from '../../components/Footer';
import CustomButton from '../../components/UI/CustomButton';
import Card from '../../components/UI/Card';
const HelpLine = ({navigation}) => {
  const numbers = require('../../assets/data/helpline.json');
  return (
    <>
      <View style={styles.container}>
        <Card
          imagePath={
            <Image
              style={styles.image}
              source={require('../../assets/images/ScreenIcons/forgot-password-icon.png')}
            />
          }>
          <View style={styles.textContainer}>
            <View style={{marginHorizontal: 20}}>
              {numbers.CustomerCare
                ? numbers.CustomerCare.map((item, index) => (
                    <Text style={styles.text} key={index}>
                      Customer Care No.{index + 1}:
                      <Text style={styles.number}>{item}</Text>
                    </Text>
                  ))
                : null}
              {numbers.DealerHelpLine
                ? numbers.DealerHelpLine.map((item, index) => (
                    <Text style={styles.text} key={index}>
                      Dealer Helpline No.{index + 1}:
                      <Text style={styles.number}>{item}</Text>
                    </Text>
                  ))
                : null}
            </View>
            <CustomButton type="Cancel" title="CANCEL" />
          </View>
        </Card>
        <Footer />
      </View>
    </>
  );
};

export default HelpLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'space-between',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    // padding: 20,
    borderRadius: 5,
    margin: 20,
    overflow: 'hidden',
  },
  iconPlaceHolder: {
    height: 40,
    width: '100%',
    backgroundColor: 'gray',
    padding: 0,
    margin: 0,
  },
  image: {
    height: 80,
    width: 70,
    margin: 20,
    resizeMode: 'contain',
  },
  text: {
    width: '100%',
    borderBottomWidth: 1,
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 30,
  },
  number: {
    color: 'rgb(34,167,255)',
    fontWeight: 'bold',
  },
});
