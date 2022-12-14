import React from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from './CustomButton';
import {Platform} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const Popup = ({
  visible,
  header,
  title1,
  title2,
  iconName,
  iconColor,
  iconSize,
  children,
  buttonStyle,
  onPress1,
  onPress2,
}) => {
  const isWeb = Platform.OS === 'web';
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View
          style={[
            styles.textContainer,
            isWeb ? styles.textContainerWeb : null,
          ]}>
          <View style={styles.header}>
            <ImageBackground
              style={styles.header}
              source={require('../../assets/images/Background/headerBg.png')}>
              <Ionicons
                name={iconName}
                color={iconColor}
                size={iconSize ? iconSize : 28}
                style={styles.icon}
              />
              <Text style={styles.headerText}>{header}</Text>
            </ImageBackground>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>{children}</Text>
            <View style={styles.buttonContainer}>
              {title1 ? (
                <CustomButton
                  title={title1}
                  customStyle={buttonStyle}
                  onPress={onPress1}
                />
              ) : null}
              {title2 ? (
                <CustomButton
                  title={title2}
                  customStyle={buttonStyle}
                  onPress={onPress2}
                />
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: WIDTH * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textContainerWeb: {
    width: WIDTH * 0.5,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: HEIGHT * 0.05,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    backgroundColor: 'white',
    margin: 0,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  contentText: {
    color: 'black',
    padding: 10,
    fontSize: 16,
  },
  icon: {
    marginLeft: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
});
