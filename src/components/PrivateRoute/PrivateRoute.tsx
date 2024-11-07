import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

type PrivateRouteProps = {
  element: React.ReactElement;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
