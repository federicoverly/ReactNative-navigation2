import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../themes/appTheme'

// import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

  // useEffect(() => {
  //   console.log('Tab 1 running')
  // }, [])

  const { top } = useSafeAreaInsets()

  return (
    <View style={{...styles.globalMargin,
    marginTop: top + 10}}>
      <Text style={styles.title}>Tab 1 Screen - Icons</Text>
      <Text>
        <TouchableIcon iconName="rocket-outline" />
        <TouchableIcon iconName="football-outline" />
        <TouchableIcon iconName="heart-outline"  />
        <TouchableIcon iconName="basketball-outline"/>
        <TouchableIcon iconName="book-outline"  />
      </Text>
    </View>
  )
}
