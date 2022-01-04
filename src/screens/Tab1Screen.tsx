import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../themes/appTheme'

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


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
        <Icon name="rocket-outline" size={50} color={colors.primary} />
        <Icon name="football-outline" size={50} color={colors.primary} />
        <Icon name="heart-outline" size={50} color={colors.primary} />
        <Icon name="basketball-outline" size={50} color={colors.primary} />
        <Icon name="book-outline" size={50} color={colors.primary} />
      </Text>
    </View>
  )
}
