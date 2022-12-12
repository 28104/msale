import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const CustomButton = ({type, title, customStyle, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          type === 'Cancel' ? styles.cancelButton : styles.button,
          customStyle,
        ]}
        onPress={() =>
          type === 'Cancel' ? navigation.goBack(null) : onPress()
        }>
        <Text style={type === 'Cancel' ? styles.textCancel : styles.text}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#e51960',

    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 8,
  },
  cancelButton: {
    borderColor: '#e51960',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 8,
  },
  textCancel: {
    fontWeight: 'bold',
    color: '#e51960',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
