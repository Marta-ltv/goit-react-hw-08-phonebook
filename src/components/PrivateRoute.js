import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
    const { isLoggedIn,isRefreshing } = useAuth();
    const shoulRedirect = !isLoggedIn && !isRefreshing;
    return shoulRedirect ? <Navigate to={redirectTo} /> : <Component/>;
 }
