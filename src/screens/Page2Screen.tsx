import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Overwriting Page 2',
      headerBackTitle: 'Back',
    });
  });
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2 Screen</Text>
      <Button
        title="Go to Page 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};
