
import { HomeLink } from './Navigation.styled';

export const Navigation = () => {

    return (
        <nav>
            <HomeLink to="/">
                Home
            </HomeLink>
            <HomeLink to="contacts">
                Contacts
            </HomeLink>
        </nav>
    );
};