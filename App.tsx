import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {BasicDrawer} from './src/navigator/BasicDrawer';
import { CustomDrawer } from './src/navigator/CustomDrawer';
import { TabNavigator } from './src/navigator/TabNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <BasicDrawer /> */}
        <CustomDrawer />
        {/* <TabNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ( { children } : any) => {
  return( 
    <AuthProvider>
      {children }
    </AuthProvider>
  )
}
export default App;
