import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}
export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text>Navigation with Props</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: 'lightblue'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Peter Parker',
            })
          }>
          <Text style={styles.bigButtonText}>Peter Parker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: 'lightgreen'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'MJ',
            })
          }>
          <Text style={styles.bigButtonText}>MJ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
