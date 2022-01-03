import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}
export const Page1Screen = ({navigation}: any) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
    </View>
  );
};
