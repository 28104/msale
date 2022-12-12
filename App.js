import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StatusBar, StyleSheet} from 'react-native';

import Header from './src/components/header';
// import Ionicons from "react-native-vector-icons/Ionicons";
import DropDown from './src/components/UI/DropDown';
import CustomerRecharge from './src/screens/dashboard/CustomerRecharge';
import CustomerInforamtion from './src/screens/dashboard/CustomerInformation';
import HomePage from './src/screens/HomePage';
import HelpLine from './src/screens/settings/HelpLine';
import ChangePassword from './src/screens/settings/ChangePassword';
import LoginPage from './src/screens/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvdTransfer from './src/screens/dashboard/evdTransfer/EvdTransfer';
import MultiTVAccount from './src/screens/dashboard/MultiTVAccount';
import Icons from './src/components/UI/Icons';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {color: 'white', fontSize: 20},
            headerTitleAlign: 'center',
            headerBackground: () => (
              <Header>
                <DropDown>
                  <Ionicons
                    name="settings"
                    color="white"
                    size={24}
                    // style={styles.icon}
                  />
                </DropDown>
              </Header>
            ),
          }}>
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="mSales"
            component={HomePage}
            options={{
              title: 'mSales',
              headerLeft: () => null,
            }}
          />
          <Stack.Group
            screenOptions={{
              headerBackground: () => <Header />,
              headerBackImage: () => (
                <Image
                  // resizeMode="contain"
                  source={require('./src/assets/images/back.png')}
                  style={styles.backImage}
                />
              ),
            }}>
            <Stack.Screen
              name="Change password"
              component={ChangePassword}
              options={{
                headerBackground: () => <Header />,
              }}
            />
            <Stack.Screen
              name="Helpline Number"
              component={HelpLine}
              options={{
                title: 'Helpline Number',
              }}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={({navigation}) => ({
              headerBackground: () => (
                <Header>
                  <DropDown>
                    <Ionicons name="settings-outline" color="white" size={24} />
                  </DropDown>
                </Header>
              ),
              headerLeft: () => (
                <Icons
                  icon="home-outline"
                  color="white"
                  size={24}
                  onPress={() => navigation.navigate('mSales')}
                />
              ),
            })}>
            <Stack.Screen
              name="Customer Information"
              component={CustomerInforamtion}
            />
            <Stack.Screen
              name="Customer Recharge"
              component={CustomerRecharge}
            />
            <Stack.Screen name="EVD Transfer" component={EvdTransfer} />
            <Stack.Screen
              name="Multi TV Account Registration"
              component={MultiTVAccount}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  backImage: {
    width: 30,
    height: 20,
  },
});
