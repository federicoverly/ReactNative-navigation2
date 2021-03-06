import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
      tabBarShowLabel: false,
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
            iconName = 'chatbox-outline'
          break;

          case 'ContacsScreen':
            iconName = 'people-outline'
          break 

          case 'AlbumsScreen':
            iconName = 'camera-outline'
          break
        }
        return <Icon name={iconName} color={color} style={{ fontSize: 25}} />

      }
     })
    }
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContacsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}