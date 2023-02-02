import { Outlet } from "react-router-dom";
import SectionContainer from "../Shared/SectionContainer.component";

export default function MainLayout() {
    return (
        <>
            <SectionContainer>
                <Outlet />
            </SectionContainer>
        </>
    );
}