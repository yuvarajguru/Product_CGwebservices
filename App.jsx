/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScreenOne from './src/pages/ScreenOne';
import ScreenTwo from './src/pages/ScreenTwo';
import Icon from '@mdi/react';
import { mdiHomeCircle } from '@mdi/js';
import ScreenThree from './src/pages/ScreenThree';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigationContainer from './NavigationContainer';
import SplashScreen from 'react-native-splash-screen';

function App() {

  useEffect(() => {
      SplashScreen.hide();
  },[])

  return (
    <> 
    <MainNavigationContainer/>
    </>
  );
}

export default App;
