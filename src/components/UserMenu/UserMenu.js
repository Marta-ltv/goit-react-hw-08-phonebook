import { useAuth } from "../../hooks/useAuth";
import { Button,Title,Wrapper } from "./UserMenu.styled";

export const UserMenu = () => {
    const { user } = useAuth();

    return (
        <Wrapper>
            <Title>Welcome, {user.name}</Title>
            <Button type="button">
                Logout
            </Button>
        </Wrapper>
    )
}