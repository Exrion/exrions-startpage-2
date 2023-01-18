import { CssBaseline, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { defaultRoute } from "../../Data/Constants/Routes";
import { portfolioTheme } from "../../Styles/Themes/RootThemes";

function PortfolioComponent() {
    return (
        <>
            portfolio
            <Link to={defaultRoute}>startpage</Link>
        </>
    );
}

export default function PortfolioLayout() {
    return (
        <>
            <ThemeProvider theme={portfolioTheme}>
                <CssBaseline />
                {PortfolioComponent()}
            </ThemeProvider>
        </>
    );
}