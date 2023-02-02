import { Outlet, Route, Routes } from "react-router-dom";
import { portfolioActivityRoute, portfolioShowcaseRoute, portfolioAboutRoute, portfolioContactRoute } from "../../../Data/Constants/Routes";
import SectionContainer from "../Shared/SectionContainer.component";
import AboutPage from "./Pages/AboutPage.component";
import ActivityPage from "./Pages/ActivityPage.component";
import ContactPage from "./Pages/ContactPage.component";
import HomePage from "./Pages/HomePage.component";
import ShowcasePage from "./Pages/ShowcasePage.component";

export default function MainLayout() {
    return (
        <>
            <SectionContainer>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path={portfolioActivityRoute} element={<ActivityPage />} />
                    <Route path={portfolioShowcaseRoute} element={<ShowcasePage />} />
                    <Route path={portfolioAboutRoute} element={<AboutPage />} />
                    <Route path={portfolioContactRoute} element={<ContactPage />} />
                </Routes>
                <Outlet />
            </SectionContainer>
        </>
    );
}