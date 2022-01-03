import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {styles} from '../themes/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => <Button title="Menu" onPress={() => navigation.toggleDrawer} />,
  //   });
  // }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text style={{
        fontSize: 25,
        margin: 10,
        textAlign: 'center'
      }}>Navigation with Props</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
