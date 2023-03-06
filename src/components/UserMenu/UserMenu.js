import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { useAuth } from "../../hooks/useAuth";
import { Title, Wrapper } from "./UserMenu.styled";
import Button from '@mui/material/Button';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut())

    return (
        <Wrapper>
            <Title>Welcome, {user.name}</Title>
            <Button variant="outlined" type="button" onClick={handleLogOut}>
                Logout
            </Button>
        </Wrapper>
    )
}