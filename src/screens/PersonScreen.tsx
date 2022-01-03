import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

// interface RouteParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}
export const PersonScreen = ({navigation, route}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {params.name} </Text>
      <Text>{JSON.stringify(params)}</Text>
    </View>
  );
};
