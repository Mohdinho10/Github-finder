import { createContext, useReducer } from "react";

const AlertContext = createContext({
  setAlert: () => {},
});

const initialState = null;

const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET-ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export function AlertProvider({ children }) {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET-ALERT",
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertContext;
