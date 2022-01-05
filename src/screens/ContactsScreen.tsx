import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { signIn, authState } = useContext(AuthContext)
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>

      { !authState.isLoggedIn && 
      <Button 
        title= 'Sign In'
        onPress={ signIn }
        />
      }
    </View>
  )
}
