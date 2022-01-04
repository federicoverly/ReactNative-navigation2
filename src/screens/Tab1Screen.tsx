import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

export const Tab1Screen = () => {

  // useEffect(() => {
  //   console.log('Tab 1 running')
  // }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab 1 Screen - Icons</Text>
    </View>
  )
}
