import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform} from 'react-native';

import headerBgImage from '../assets/images/Background/headerBg.jpg';

const Footer = () => {
  const isWeb = Platform.OS === 'web';
  return (
    <ImageBackground
      source={
        isWeb
          ? {uri: headerBgImage}
          : require('../assets/images/Background/headerBg.jpg')
      }
      style={styles.imageBackgroung}>
      <View style={styles.view}>
        <Icon name="copyright" color="white" size={12} style={styles.icon} />
        <Text style={styles.text}>TataSky</Text>
        <Text style={[styles.text, styles.contact_text]}>
          Supervisor Contact:1234567890
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Footer;

const styles = StyleSheet.create({
  imageBackgroung: {
    transform: [{scaleX: -1}],
  },
  view: {
    width: '100%',
    height: 40,
    transform: [{scaleX: -1}],
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 4,
  },
  icon: {
    marginLeft: 8,
  },
  contact_text: {position: 'absolute', right: 10},
});
