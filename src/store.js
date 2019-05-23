import { createContext } from "react";

export const initialState = { seLaCome: false };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'seLaComeType':
      return { seLaCome: !state.seLaCome };
    default:
      return state;
  }
}

export const Context = createContext();