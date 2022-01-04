import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets()
  return (
    <Tab.Navigator
    style={{
      paddingTop: top,
    }}
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
    screenOptions={ ({route}) => (
      {
      tabBarPressColor: colors.primary,
      tabBarShowIcon: true,
      tabBarIndicatorStyle: {
        backgroundColor: colors.primary
      },
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
        shadowColor: 'transparent'
      },
      tabBarIcon: ({ color, focused}) => {
        let iconName: string = ''
        switch(route.name){
          case 'ChatScreen':
            iconName = 'CH'
          break;

          case 'ContacsScreen':
            iconName = 'CO'
          break 

          case 'AlbumsScreen':
            iconName = 'AL'
          break
        }
        return <Text style={{ color }}>{iconName}</Text>
      }
     })
    }>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContacsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}