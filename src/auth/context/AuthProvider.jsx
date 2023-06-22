import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
