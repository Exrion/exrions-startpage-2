import { Box, Typography, Link, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import SectionContainer from "../Shared/SectionContainer.component";
import { LinkSx } from "../../../Styles/Elements/Portfolio/PortfolioRootStyles";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { portfolioAboutRoute, portfolioActivityRoute, portfolioContactRoute, portfolioDefaultRoute, portfolioShowcaseRoute } from "../../../Data/Constants/Routes";

function NavBreakpointDecider() {
    const theme = useTheme();
    const { width } = useWindowDimensions();

    if (width < theme.breakpoints.values.sm) {
        return XsNavbar();
    } else {
        return SmNavbar();
    }
}

function XsNavbar() {
    return (
        <>
            Xs
        </>
    );
}

function SmNavbar() {
    return (
        <>
            <Stack
                direction='row'
                justifyContent='space-between'
                minWidth={1}
            >
                {/* Left Align Nav Links */}
                <Box>
                    <Typography
                        variant='h5'
                        fontWeight={500}
                        color='black'
                        component='span'
                    >
                        <Stack
                            direction='row'
                            spacing={{ md: 4, sm: 2 }}
                        >
                            <Link
                                component={RouterLink}
                                to={portfolioDefaultRoute}
                                sx={LinkSx}
                            >
                                Home
                            </Link>
                            <Link
                                component={RouterLink}
                                to={portfolioActivityRoute}
                                sx={LinkSx}
                            >
                                Activity
                            </Link>
                            <Link
                                component={RouterLink}
                                to={portfolioShowcaseRoute}
                                sx={LinkSx}
                            >
                                Showcase
                            </Link>
                            <Link
                                component={RouterLink}
                                to={portfolioAboutRoute}
                                sx={LinkSx}
                            >
                                About
                            </Link>
                        </Stack>
                    </Typography>
                </Box>

                {/* Right Align Nav Links */}
                <Box>
                    <Typography
                        variant='h5'
                        fontWeight={500}
                        color='black'
                        component='span'
                    >
                        <Link
                            component={RouterLink}
                            to={portfolioContactRoute}
                        >
                            <Button
                                variant='contained'
                                startIcon={<ContactMailIcon />}
                                size='medium'
                                sx={{borderRadius: 8}}
                            >
                                Contact Me
                            </Button>
                        </Link>
                    </Typography>
                </Box>
            </Stack>
        </>
    );
}

export default function NavLayout() {
    return (
        <>
            <SectionContainer>
                {NavBreakpointDecider()}
            </SectionContainer>
        </>
    );
}