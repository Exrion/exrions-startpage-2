import { Box, Stack } from "@mui/system";
import { RootBoxSx, RootStackSx } from "../../Styles/Elements/Portfolio/PortfolioRootStyles";
import FooterLayout from "./Footer/FooterLayout.component";
import MainLayout from "./Main/MainLayout.component";
import NavLayout from "./Navbar/NavLayout.component";

export default function PortfolioGrid() {
    return (
        <>
            <Box
                sx={RootBoxSx}
            >
                <Stack
                    sx={RootStackSx}
                >
                    {/* Navigation Bar */}
                    <Box component='nav'>
                        <NavLayout />
                    </Box>

                    {/* Main Content */}
                    <Box component='main'>
                        <MainLayout />
                    </Box>

                    {/* Footer */}
                    <Box component='footer'>
                        <FooterLayout />
                    </Box>
                </Stack>
            </Box>
        </>
    );
}