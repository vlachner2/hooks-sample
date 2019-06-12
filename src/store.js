import { createContext } from "react";

export const initialState = { 
  user: { 
    name: '', 
    lastName: '', 
    company: '' 
  } 
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        user: {
          name: action.user.name,
          lastName: action.user.lastName,
          company: action.user.company,
        }
      }
    case 'signOut':
      state = initialState;
      break;
    default:
      return state;
  }
}

export const Context = createContext();