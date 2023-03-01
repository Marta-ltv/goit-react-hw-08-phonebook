import { RegisterLink } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <div>
            <RegisterLink to="/register">
                Register
            </RegisterLink>
            <RegisterLink to="/login">
                Log In
            </RegisterLink>
        </div>
    );
};