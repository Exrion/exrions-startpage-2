import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { portfolioRoute } from "../../Data/Constants/Routes";
import { startpageTheme } from "../../Styles/Themes/RootThemes";

function StartpageComponent() {
    return (
        <>
            startpage
            <Link to={portfolioRoute}>portfolio</Link>
        </>
    );
}

export default function StartpageLayout() {
    return (
        <>
            <ThemeProvider theme={startpageTheme}>
                <CssBaseline />
                {StartpageComponent()}
            </ThemeProvider>
        </>
    );
}