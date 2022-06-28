/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { AuthProvider } from './src/hooks/auth';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Routes } from './src/routes';

const App = () => {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
