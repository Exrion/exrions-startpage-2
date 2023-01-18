import { Route, Routes, useLocation } from "react-router-dom";
import { catchAllRoute, defaultRoute, portfolioRoute } from "../Data/Constants/Routes";
import NotFoundError from "./Error/NotFound.component";
import PortfolioLayout from "./Portfolio/_Portfolio.component";
import StartpageLayout from "./Startpage/_Startpage.component";

export default function RootLayout() {
    let location = useLocation();

    return (
        <>
            <Routes location={location}>
                {/* Startpage */}
                <Route path={defaultRoute} element={<StartpageLayout />} />

                {/* Portfolio */}
                <Route path={portfolioRoute} element={<PortfolioLayout />} />

                {/* 404 Not found */}
                <Route path={catchAllRoute} element={<NotFoundError />} />
            </Routes>
        </>
    );
}