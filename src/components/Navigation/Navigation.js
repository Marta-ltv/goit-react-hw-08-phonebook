import { HomeLink } from './Navigation.styled';
import { useAuth } from "hooks/useAuth";

export const Navigation = () => {
 const { isLoggedIn } = useAuth();
    return (
        <nav>
            <HomeLink to="/">
                Home
            </HomeLink>
            {isLoggedIn && (
                <HomeLink to="/contacts">
                Contacts
            </HomeLink>)}
        </nav>
    );
};