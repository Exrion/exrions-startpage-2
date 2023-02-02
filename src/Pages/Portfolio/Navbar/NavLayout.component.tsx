import { Box, Typography, Link, Button, AppBar, Toolbar, Drawer } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import SectionContainer from "../Shared/SectionContainer.component";
import { LinkSx } from "../../../Styles/Elements/Portfolio/PortfolioRootStyles";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { portfolioAboutRoute, portfolioActivityRoute, portfolioContactRoute, portfolioDefaultRoute, portfolioShowcaseRoute } from "../../../Data/Constants/Routes";
import { useState } from "react";
import DrawerItems from "./DrawerItems.component";

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
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setDrawerState(open);
    }

    return (
        <>
            <AppBar
                position='sticky'
            >
                <Toolbar
                    disableGutters
                >
                    {/* Menu Button */}
                    <Button
                        placeholder="Menu"
                        sx={{ color: 'white' }}
                        onClick={toggleDrawer(true)}
                        disableRipple
                    >
                        <MenuIcon />
                    </Button>
                    <Drawer
                        anchor='left'
                        open={drawerState}
                        onClose={toggleDrawer(false)}
                    >
                        <DrawerItems handleDrawer={toggleDrawer} />
                    </Drawer>

                    {/* Title */}
                    <Link
                        component={RouterLink}
                        to={portfolioDefaultRoute}
                        sx={{ flexGrow: 1, color: 'white' }}
                    >
                        <Typography>
                            Exrion's Portfolio
                        </Typography>
                    </Link>

                    {/* Contact Me */}
                    <Link
                        component={RouterLink}
                        to={portfolioContactRoute}
                    >
                        <Button
                            placeholder="Contact Me"
                            sx={{ color: 'white' }}
                            disableRipple
                        >
                            <EmailOutlinedIcon />
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
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
                                startIcon={<EmailIcon />}
                                size='medium'
                                sx={{ borderRadius: 8 }}
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