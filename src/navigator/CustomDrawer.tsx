import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { styles, colors } from '../themes/appTheme';
// import {NavigationHelpersContext} from '@react-navigation/core';
// import { createStackNavigator } from '@react-navigation/stack';
// import { startClock } from 'react-native-reanimated';
import { TabNavigator } from './TabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// const SettingStackScreen = () => {
//   return(
//     <Stack.Navigator>
//       <Stack.Screen
//       name='SettingsScreen'
//       component={SettingsScreen} />
//     </Stack.Navigator>
//   )
// }

export const CustomDrawer = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front ',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home - Tabs" component={TabNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => props.navigation.navigate('StackNavigator')}>
          <Text>
            <Icon name='home-outline' color={colors.tertiary} style={{ fontSize: 40}} />
          </Text>
          <Text style={styles.menuText}>Home - Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => props.navigation.navigate('SettingsScreen')}>
           <Text>
            <Icon name='settings-outline' color={colors.tertiary} style={{ fontSize: 40}} />
          </Text>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
