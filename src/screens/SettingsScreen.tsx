import React from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {styles} from '../themes/appTheme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop:insets.top + 20}}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};
