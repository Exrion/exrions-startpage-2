import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import SectionContainer from "../Shared/SectionContainer.component";
import { LinkSx } from "../../../Styles/Elements/Portfolio/PortfolioRootStyles";

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
            >
                <Typography
                    variant='h5'
                    fontWeight={600}
                    color='black'
                >
                    {/* Left Align Nav Links */}
                    <Box>
                        <Link
                            component={RouterLink}
                            to=''
                            sx={LinkSx}
                        >
                            Home
                        </Link>
                        <Link
                            component={RouterLink}
                            to=''
                            sx={LinkSx}
                        >
                            Activity
                        </Link>
                        <Link
                            component={RouterLink}
                            to=''
                            sx={LinkSx}
                        >
                            Showcase
                        </Link>
                        <Link
                            component={RouterLink}
                            to=''
                            sx={LinkSx}
                        >
                            About
                        </Link>
                    </Box>

                    {/* Right Align Nav Links */}
                    <Box>
                        <Link
                            component={RouterLink}
                            to=''
                            sx={LinkSx}
                        >
                            Contact Me
                        </Link>
                    </Box>
                </Typography>
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