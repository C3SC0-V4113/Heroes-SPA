import { useContext } from "react";

import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { AuthContext } from "../../auth/";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return logged ? children : <Navigate to={"/login"} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
