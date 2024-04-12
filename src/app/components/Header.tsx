'use client';
import {useTheme} from "@mui/material";

export default function Header() {
    const theme = useTheme();
    return (
        <h1>{theme.palette.mode} mode</h1>
    );
}