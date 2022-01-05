import { AuthState } from "./AuthContext";

type AuthAction = 
        { type: 'signIn' }
      | { type: 'logout'}
      | { type: 'changeFavouriteIcon', payload: string }
      | { type: 'changeUsername', payload: string }

// This will create a new state

export const authReducer = ( state: AuthState, action: AuthAction ) : AuthState => {

  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet'
      }
    
      case 'changeFavouriteIcon':
        return {
          ...state,
          favouriteIcon: action.payload 
        }
      
      case 'logout':
        return {
          ...state,
          isLoggedIn: false,
          username: undefined,
          favouriteIcon: undefined
        }

      case 'changeUsername':
        return {
          ...state,
          isLoggedIn: true,
          username: action.payload,
          favouriteIcon: undefined
        }
  
    default:
      return state;
  }

}