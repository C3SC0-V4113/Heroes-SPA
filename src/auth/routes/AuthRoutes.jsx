import { Navigate } from "react-router-dom";

export const AuthRoutes = [
  {
    path: "*",
    element: <Navigate to={"login"} />,
  },
];
