import React, { useContext } from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext, AuthState } from '../context/AuthContext';
import {colors, styles} from '../themes/appTheme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext)

  return (
    <View style={{ marginTop:insets.top + 20}}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>
        { JSON.stringify(authState, null, 4)}
      </Text>

      { authState.favouriteIcon &&
        <Text>
          <Icon name={authState.favouriteIcon} size={50} color={colors.primary}/>
        </Text>
      }
    </View>
  );
};
