import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/';
const Card = ({imagePath, children}) => {
  //   useLayoutEffect(() => {
  //     const val = imagePath;
  //   });
  //   const val = 'forgot-password-icon.png';
  //   console.log(imagePath);
  return (
    <View style={styles.card}>
      <View style={styles.iconPlaceHolder}>
        <View>{imagePath}</View>
      </View>
      {children}
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 70,
    margin: 20,
    resizeMode: 'contain',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 20,
    overflow: 'hidden',
  },
  iconPlaceHolder: {
    width: '100%',
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
