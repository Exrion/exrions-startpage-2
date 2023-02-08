import { Route, Routes, useLocation } from "react-router-dom";
import { startpageDefaultRoute, portfolioDefaultRoute, catchAllRoute, portfolioAboutRoute, portfolioActivityRoute, portfolioContactRoute, portfolioShowcaseRoute } from "../Data/Constants/Routes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import PortfolioLayout from "./Portfolio/_Portfolio.component";
import StartpageLayout from "./Startpage/_Startpage.component";
import { portfolioTheme, startpageTheme } from "../Styles/Themes/RootThemes";
import NotFoundError from "./Error/NotFound.component";
import AboutPage from "./Portfolio/Main/Pages/AboutPage.component";
import ActivityPage from "./Portfolio/Main/Pages/ActivityPage.component";
import ShowcasePage from "./Portfolio/Main/Pages/ShowcasePage.component";
import HomePage from "./Portfolio/Main/Pages/HomePage.component";
import ContactPage from "./Portfolio/Main/Pages/ContactPage.component";

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
                <Route path={startpageDefaultRoute} element={
                    <ThemeProvider theme={responsiveStartpageTheme}>
                        <CssBaseline />
                        <StartpageLayout />
                    </ThemeProvider>
                } />

                {/* Portfolio */}
                <Route path={portfolioDefaultRoute} element={
                    <ThemeProvider theme={responsivePortfolioTheme}>
                        <CssBaseline />
                        <PortfolioLayout />
                    </ThemeProvider>
                }>
                    <Route index element={<HomePage />} />
                    <Route path={portfolioActivityRoute} element={<ActivityPage />} />
                    <Route path={portfolioShowcaseRoute} element={<ShowcasePage />} />
                    <Route path={portfolioAboutRoute} element={<AboutPage />} />
                    <Route path={portfolioContactRoute} element={<ContactPage />} />
                </Route>

                {/* 404 Not found */}
                <Route path={catchAllRoute} element={<NotFoundError />} />
            </Routes>
        </>
    );
}