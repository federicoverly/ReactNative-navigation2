import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}
export const PersonScreen = ({navigation, route}: Props) => {

  const { changeUsername } = useContext(AuthContext)
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  useEffect(() => {
    changeUsername(params.name)
  }, [params.name])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {params.name} </Text>
      <Text>{JSON.stringify(params)}</Text>
    </View>
  );
};
