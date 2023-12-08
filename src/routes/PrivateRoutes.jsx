import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function PrivateRoutes() {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoutes;
