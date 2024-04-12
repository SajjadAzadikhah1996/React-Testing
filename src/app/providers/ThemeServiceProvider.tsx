'use client';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function ThemeServiceProvider({children}: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>

    );
}