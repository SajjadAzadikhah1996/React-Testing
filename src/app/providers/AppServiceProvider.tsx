import React from "react";
import ThemeServiceProvider from "@/app/providers/ThemeServiceProvider";

export default function AppServiceProvider({children}: { children: React.ReactNode }) {
    return (
        <>
            {/*other providers*/}
            <ThemeServiceProvider>
                {children}
            </ThemeServiceProvider>
            {/*other providers*/}
        </>
    );
}