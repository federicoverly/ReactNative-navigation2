// Define the information that I will have

import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

export interface AuthState {
  isLoggedIn: boolean,
  username?: string,
  favouriteIcon?: string,
}

// Initial state

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favouriteIcon: undefined,
}

// Define what the context will allow. We will use it to show what the context exposes

export interface AuthContextProps{
  authState: AuthState;
  signIn: () => void;
  changeFavouriteIcon: (iconName:string) => void,
  logOut: () => void,
  changeUsername: (username:string) => void,
}

// Create context

export const AuthContext = createContext( {} as AuthContextProps)

// Provider component. Higher order component

export const AuthProvider = ( { children } :any ) => {

  const [ authState , dispatch ] = useReducer( authReducer, authInitialState )

  const signIn = () => {
    dispatch ({type: 'signIn'})
  }

  const changeFavouriteIcon = (iconName: string) => {
    dispatch( { type: 'changeFavouriteIcon', payload: iconName})
  }

  const logOut = () => {
    dispatch( {type: 'logout'})
  }

  const changeUsername = ( username : string) => {
    dispatch( {type: 'changeUsername', payload: username})
  }

  return(
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavouriteIcon,
      logOut,
      changeUsername
    }}>
      { children }
    </AuthContext.Provider>
  )
}
