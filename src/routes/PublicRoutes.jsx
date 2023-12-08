import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function PublicRoutes() {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoutes;
