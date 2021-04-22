import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
  return {
    isLogIn: state.isLogIn,
  };
};

// 永続化
// 永続化の設定
const persistConfig = {
  key: "root", // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  whitelist: ["isLogIn"], // Stateは`todos`のみStorageに保存する
};

// 永続化設定されたReducerとして定義
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Store
export const store = createStore(persistedAuthReducer);
export const persistor = persistStore(store);
