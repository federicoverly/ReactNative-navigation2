import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { authState, logOut} = useContext(AuthContext)
  return (
    <View style={ styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>
      { authState.isLoggedIn &&
       <Button
          title='Log out'
          onPress={ logOut}
         /> 
      }
    </View>
  )
}
