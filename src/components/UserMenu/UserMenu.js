import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { useAuth } from "../../hooks/useAuth";
import { Button,Title,Wrapper } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut())

    return (
        <Wrapper>
            <Title>Welcome, {user.name}</Title>
            <Button type="button" onClick={handleLogOut}>
                Logout
            </Button>
        </Wrapper>
    )
}