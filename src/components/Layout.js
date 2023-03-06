import { Suspense } from "react"
import { Outlet } from 'react-router-dom';
import {AppBarComponent} from "./AppBar.js/AppBar";
import {Toolbar } from '@mui/material';

import { Box, styled, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  height: 100vh;
`;

export const Layout = () => {
    return (
        <CustomBox>
            <AppBarComponent position="fixed" />
            <Toolbar />
            <Suspense fallback={<Typography>Loading...</Typography>}>
                <Outlet/>
            </Suspense>
        </CustomBox>
    )
}