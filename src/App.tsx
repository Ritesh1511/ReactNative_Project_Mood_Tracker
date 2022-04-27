import React from 'react';
import {StyleSheet,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

 export const App: React.FC = () => {
  return (
   <NavigationContainer >
     <BottomTabsNavigator />
   </NavigationContainer>
  );
 };