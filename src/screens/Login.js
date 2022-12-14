import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ImageBackground,
  Alert,
  headers,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import {Platform} from 'react-native';

import React, {useState} from 'react';
import Popup from '../components/UI/Popup';

import LoginImg from '../assets/images/Background/login.png';

function Login({navigation}) {
  const isWeb = Platform.OS === 'web';
  // const loginData = require('../login.json');

  const [username, onUserNameChangeText] = useState('');
  const [password, onPasswordChangeText] = useState('');
  const [errorModalVisisble, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  async function submit() {
    if (username != '' && password != '') {
      await fetch('https://msales-server.azurewebsites.net/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user: username,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(resData => {
          navigation.navigate('mSales');
          const userdetails = [
            {
              username: resData[0].userName,
              userId: resData[0].userId,
            },
          ];

          AsyncStorage.setItem('userId', username);
          AsyncStorage.setItem('userdetails', JSON.stringify(userdetails));
        })
        .catch(error => {
          // Alert.alert('Email Or Password InCorrect');
          setErrorMessage('Email Or Password InCorrect');
          setErrorModalVisible(true);
        });

      onUserNameChangeText('');
      onPasswordChangeText('');
    } else {
      // Alert.alert("Enter valid user name and password");
      setErrorMessage('Enter valid user name and password');
      setErrorModalVisible(true);
    }
  }
  return (
    <>
      <Popup
        visible={errorModalVisisble}
        header="Error"
        iconName="lock-closed-outline"
        iconColor="yellow"
        title1="OK"
        onPress1={setErrorModalVisible.bind(this, false)}>
        {errorMessage}
      </Popup>
      <ImageBackground
        source={
          isWeb
            ? {uri: LoginImg}
            : require('../assets/images/Background/login.png')
        }
        resizeMode="cover"
        style={styles.LoginForm}>
        <Text style={styles.logo}>TATA PLAY M-sales</Text>
        <View style={[styles.Newcard, isWeb ? styles.NewcardWeb : null]}>
          <View style={styles.inputView}>
            <Icon style={styles.icon} name="user" size={20} />
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              placeholderTextColor="white"
              value={username}
              onChangeText={username => onUserNameChangeText(username)}
            />
          </View>
          <View style={styles.inputView}>
            <Icon style={styles.icon} name="lock" size={20} />
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="white"
              value={password}
              onChangeText={password => onPasswordChangeText(password)}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginBtn, isWeb ? styles.loginBtnWeb : null]}
          onPress={() => submit()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
  // }
}

export default Login;
const styles = StyleSheet.create({
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  inputView: {
    width: '80%',
    // backgroundColor:"#465881",
    borderRadius: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    height: 5,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 70,
    color: 'white',
    fontSize: 15,
    borderBottomColor: 'white',
    marginVertical: 8,
    marginLeft: 10,
  },
  forgot: {
    color: 'red',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 30,
    flexDirection: 'row-reverse',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginBtnWeb: {
    width: '20%',
  },
  loginText: {
    color: '#800000',
  },

  LoginForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Newcard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 24,
    padding: 1,
    //backgroundColor: Colors.primary800,
    borderRadius: 1,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    height: '35%',
    width: '90%',
  },
  NewcardWeb: {
    width: '40%',
  },
  icon: {
    position: 'absolute',
    left: 6,
    color: 'white',
  },
});
