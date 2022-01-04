import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {BasicDrawer} from './src/navigator/BasicDrawer';
import { CustomDrawer } from './src/navigator/CustomDrawer';
import { TabNavigator } from './src/navigator/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicDrawer /> */}
      <CustomDrawer />
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
