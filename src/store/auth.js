import { createStore, combineReducers } from "redux";

// state
const state_value = {
  isLogIn: false,
};

// Action Creator
export const logIn = (state) => {
  //Action
  return {
    type: "LOGIN",
    state,
  };
};

// Action Creator
export const logOut = (state) => {
  //Action
  return {
    type: "LOGOUT",
    state,
  };
};

// Reducer
export const authReducer = (state = state_value, action) => {
  switch (action.type) {
    case "LOGIN":
      state.isLogIn = true;
      console.log(state.isLogIn);
      break;
    case "LOGOUT":
      state.isLogIn = false;
      break;
  }
  return state;
};

export const store = createStore(authReducer);
