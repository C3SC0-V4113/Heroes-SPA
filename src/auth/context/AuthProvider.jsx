import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = async (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: name,
      },
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
