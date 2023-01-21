import { Route, Routes, useLocation } from "react-router-dom";
import { catchAllRoute, defaultRoute, portfolioRoute } from "../Data/Constants/Routes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import NotFoundError from "./Error/NotFound.component";
import PortfolioLayout from "./Portfolio/_Portfolio.component";
import StartpageLayout from "./Startpage/_Startpage.component";
import { portfolioTheme, startpageTheme } from "../Styles/Themes/RootThemes";

export default function RootLayout() {
    let location = useLocation();
    const responsiveStartpageTheme = responsiveFontSizes(
        startpageTheme,
        { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'], factor: 5 }
    );
    const responsivePortfolioTheme = responsiveFontSizes(
        portfolioTheme,
        { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'], factor: 5 }
    );

    return (
        <>
            <Routes location={location}>
                {/* Startpage */}
                <Route path={defaultRoute} element={
                    <ThemeProvider theme={responsiveStartpageTheme}>
                        <CssBaseline />
                        <StartpageLayout />
                    </ThemeProvider>
                } />

                {/* Portfolio */}
                <Route path={portfolioRoute} element={
                    <ThemeProvider theme={responsivePortfolioTheme}>
                        <CssBaseline />
                        <PortfolioLayout />
                    </ThemeProvider>
                } />

                {/* 404 Not found */}
                <Route path={catchAllRoute} element={<NotFoundError />} />
            </Routes>
        </>
    );
}