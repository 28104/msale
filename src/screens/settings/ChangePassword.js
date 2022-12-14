import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/UI/CustomButton';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Label from '../../components/Label';
import {changePasswordApi} from '../../util/api-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Popup from '../../components/UI/Popup';
import {Platform} from 'react-native';

import ForgotPwdIcon from '../../assets/images/ScreenIcons/forgot-password-icon.png';

function CancelHandler() {
  Alert.alert('cancel button', 'No action');
}
const ChangePassword = ({navigation}) => {
  const isWeb = Platform.OS === 'web';
  const [userId, setUsername] = useState();
  const [passwordModalVisisble, setPasswordModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [errorHeader, setErrorHeader] = useState();

  useLayoutEffect(() => {
    const fetchUsername = async () => {
      const name = await AsyncStorage.getItem('userId');
      setUsername(name);
    };
    fetchUsername();
  }, []);

  const [curPassword, setCurPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [cnfmNewPassword, setCnfmNewPassword] = useState('');

  async function submit() {
    if (curPassword === '' || newPassword === '' || cnfmNewPassword === '') {
      setErrorHeader('Error');
      setErrorMessage('Please fill all the fields');
      setPasswordModalVisible(true);
      return;
    }
    await changePasswordApi(userId, curPassword, newPassword, cnfmNewPassword)
      .then(response => response.json())
      .then(json => {
        // console.log(json, 'json');
        if (json.response !== '200') {
          // Alert.alert(json.message);
          setErrorHeader('Error');
          setErrorMessage(json.message);
          setPasswordModalVisible(true);
          setCurPassword('');
          setNewPassword('');
          setCnfmNewPassword('');
          return;
        } else {
          navigation.navigate('LoginPage');
        }
      });
    // .catch(error => {
    //   console.log(error.json());
    // });
  }

  async function Proceedhandler() {
    await submit();
  }

  function updateInputValueHandler(field, enteredValue) {
    switch (field) {
      case 'curPassword':
        setCurPassword(enteredValue);
        break;
      case 'newPassword':
        setNewPassword(enteredValue);
        break;
      case 'cnfmNewPassword':
        setCnfmNewPassword(enteredValue);
        break;
      case 'confirmPassword':
        setCnfmNewPassword(enteredValue);
        break;
    }
  }

  return (
    <>
      <Popup
        visible={passwordModalVisisble}
        header={errorHeader}
        iconName="lock-closed-outline"
        iconColor="yellow"
        title1="OK"
        onPress1={setPasswordModalVisible.bind(this, false)}>
        {errorMessage}
      </Popup>
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={
                isWeb
                  ? {uri: ForgotPwdIcon}
                  : require('../../assets/images/ScreenIcons/forgot-password-icon.png')
              }
              style={styles.image}
            />
          </View>
          <KeyboardAwareScrollView>
            <Label>Username</Label>
            <Text style={styles.text}>
              {userId ? userId.toUpperCase() : null}
            </Text>
            <Input
              placeholder="Enter Old Password"
              onChange={updateInputValueHandler.bind(this, 'curPassword')}
              value={curPassword}
              secure={true}
            />
            <Label style={styles.label}>New Password</Label>
            <Input
              placeholder="Enter New Password"
              onChange={updateInputValueHandler.bind(this, 'newPassword')}
              value={newPassword}
              secure={true}
            />
            <Input
              placeholder="Confirm password"
              onChange={updateInputValueHandler.bind(this, 'cnfmNewPassword')}
              value={cnfmNewPassword}
              secure={true}
            />
            <View style={styles.buttonContainer}>
              <CustomButton title="PROCEED" onPress={Proceedhandler} />
              <CustomButton
                type="Cancel"
                title="CANCEL"
                onPress={CancelHandler}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
        <Footer />
      </View>
    </>
  );
};

export default ChangePassword;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    // flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  image: {
    height: 75,
    width: 65,
    marginTop: 30,
  },
  label: {
    marginBottom: 30,
  },
  text: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
