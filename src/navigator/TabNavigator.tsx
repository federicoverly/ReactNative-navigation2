import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StackNavigator } from './StackNavigator';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { styles, colors } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const TabNavigator = () => {
  return Platform.OS === 'ios' 
                    ? <TabsIos />
                    : <TabsAndroid />
}

const BottomTabsAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabsAndroid.Navigator
    sceneAnimationEnabled={true}
    screenOptions={ ({route}) => ({
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.secondary,
      tabBarStyle: { 
        borderTopColor: colors.primary, 
        borderTopWidth: 0,
    },
      tabBarLabelStyle: { 
        fontSize: 15,
    },
    tabBarIcon: ({ color, focused}) => {
        let iconName: string = ''
        switch(route.name){
          case 'Tab1Screen':
            iconName = 'T1'
          break;

          case 'TopTabNavigator':
            iconName = 'T2'
          break 

          case 'StackNavigator':
            iconName = 'ST'
          break
        }
        return <Text style={{ color }}>{iconName}</Text>
      }
    }
    )}
    >
      <BottomTabsAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={Tab1Screen} />
      <BottomTabsAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab 2'}} component={TopTabNavigator} />
      <BottomTabsAndroid.Screen name="StackNavigator"  options={{ title: 'Screen'}} component={StackNavigator} />
    </BottomTabsAndroid.Navigator>
  );
}

const BottomTabsIos = createBottomTabNavigator();

export const TabsIos = () => {
  return (
    <BottomTabsIos.Navigator
    screenOptions={ ({route}) => ({
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.secondary,
      tabBarStyle: { 
        borderTopColor: colors.primary, 
        borderTopWidth: 0,
        elevation: 0
    },
      tabBarLabelStyle: { 
        fontSize: 15,
    },
    tabBarIcon: ({ color, size, focused}) => {
        let iconName: string = ''
        switch(route.name){
          case 'Tab1Screen':
            iconName = 'T1'
          break;

          case 'TopTabNavigator':
            iconName = 'T2'
          break 

          case 'StackNavigator':
            iconName = 'ST'
          break
        }
        return <Text style={{ color }}>{iconName}</Text>
      }
    }
    )}
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
    >
      <BottomTabsIos.Screen name="Tab1Screen" 
      options={{ title: 'Tab 1', 
      // tabBarIcon: (props) => <Text style={{ color: props.color}}>T1</Text>
    }} 
      component={Tab1Screen} 
      />
      <BottomTabsIos.Screen name="TopTabNavigator" options={{ title: 'Tab 2'}} component={TopTabNavigator} />
      <BottomTabsIos.Screen name="StackNavigator"  options={{ title: 'Screen'}} component={StackNavigator} />
    </BottomTabsIos.Navigator>
  );
}