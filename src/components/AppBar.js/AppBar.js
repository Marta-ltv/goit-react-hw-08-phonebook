import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppBarStyled = styled(AppBar)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 30px;
  background: #bdc3c7;
  background: linear-gradient(to left, #373b44, #4286f4);
`;

export const AppBarComponent = () => {
    const { isLoggedIn } = useAuth();

    return (
        <AppBarStyled>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </AppBarStyled>
    );
};
