import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  users: [],
};

// //Initial State
// const initialState = {
//   users: [
//     { id: 1, name: "User One" },
//     { id: 2, name: "User Two" },
//     { id: 3, name: "User Three" },
//   ],
// };

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const removeUSer = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  //Actions
  const addUSer = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUSer: removeUSer,
        addUSer,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
