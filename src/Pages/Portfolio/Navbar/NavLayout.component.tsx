import { Box, Typography, Link, Button, AppBar, Toolbar, Drawer, Grow, Slide } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import SectionContainer from "../Shared/SectionContainer.component";
import { LinkActiveItem, LinkInactiveItem, LinkSx } from "../../../Styles/Elements/Portfolio/PortfolioRootStyles";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { portfolioAboutRoute, portfolioActivityRoute, portfolioContactRoute, portfolioDefaultRoute, portfolioShowcaseRoute } from "../../../Data/Constants/Routes";
import DrawerItems from "./DrawerItems.component";
import { developerName } from "../../../Data/Constants/MainConstants";

function XsNavbar() {
    const [drawerState, setDrawerState] = useState(false);
    const [active, setActive] = useState(window.location.pathname.replace('/portfolio/', ''));

    const toggleDrawer = (open: boolean, active: string = '') => (event: React.KeyboardEvent | React.MouseEvent) => {
        setActive(active);

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
            <Box
                display={{ md: 'none', sm: 'none', xs: 'block' }}
                minWidth={1}
            >
                <Slide
                    in={true}
                    timeout={400}
                    direction='down'
                    id='XsNavbar'
                >
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
                                onClick={toggleDrawer(true, active)}
                                disableRipple
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer
                                anchor='left'
                                open={drawerState}
                                onClose={toggleDrawer(false)}
                            >
                                <DrawerItems handleDrawer={toggleDrawer} active={active} />
                            </Drawer>

                            {/* Title */}
                            <Link
                                component={RouterLink}
                                to={portfolioDefaultRoute}
                                sx={{ flexGrow: 1, color: 'white' }}
                            >
                                <Typography>
                                    {developerName}'s Portfolio
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
                                    onClick={toggleDrawer(false)}
                                    disableRipple
                                >
                                    <EmailOutlinedIcon />
                                </Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </Slide>
            </Box>
        </>
    );
}

function SmNavbar() {
    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState(window.location.pathname.replace('/portfolio/', ''));

    const activeSx = (current: string) => {
        if (current === active) {
            return LinkActiveItem;
        } else {
            return LinkInactiveItem;
        }        
    }

    useEffect(() => {
        setLoaded(true);
    }, [])

    return (
        <>
            <Box
                display={{ md: 'block', sm: 'block', xs: 'none' }}
                minWidth={1}
            >
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
                                <Grow
                                    in={loaded}
                                    style={{ transformOrigin: '0 0 0' }}
                                    timeout={800 + 0 * 400}
                                >
                                    <Link
                                        component={RouterLink}
                                        to={portfolioDefaultRoute}
                                        sx={{
                                            ...LinkSx,
                                            ...activeSx('/portfolio')
                                        }}
                                        tabIndex={0}
                                        onClick={() => setActive('/portfolio')}
                                    >
                                        Home
                                    </Link>
                                </Grow>
                                <Grow
                                    in={loaded}
                                    style={{ transformOrigin: '0 0 0' }}
                                    timeout={800 + 1 * 400}
                                >
                                    <Link
                                        component={RouterLink}
                                        to={portfolioActivityRoute}
                                        sx={{
                                            ...LinkSx,
                                            ...activeSx('activity')
                                        }}
                                        tabIndex={0}
                                        onClick={() => setActive('activity')}
                                    >
                                        Activity
                                    </Link>
                                </Grow>
                                <Grow
                                    in={loaded}
                                    style={{ transformOrigin: '0 0 0' }}
                                    timeout={800 + 2 * 400}
                                >
                                    <Link
                                        component={RouterLink}
                                        to={portfolioShowcaseRoute}
                                        sx={{
                                            ...LinkSx,
                                            ...activeSx('showcase')
                                        }}
                                        tabIndex={0}
                                        onClick={() => setActive('showcase')}
                                    >
                                        Showcase
                                    </Link>
                                </Grow>
                                <Grow
                                    in={loaded}
                                    style={{ transformOrigin: '0 0 0' }}
                                    timeout={800 + 3 * 400}
                                >
                                    <Link
                                        component={RouterLink}
                                        to={portfolioAboutRoute}
                                        sx={{
                                            ...LinkSx,
                                            ...activeSx('about')
                                        }}
                                        tabIndex={0}
                                        onClick={() => setActive('about')}
                                    >
                                        About
                                    </Link>
                                </Grow>
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
                            <Grow
                                in={loaded}
                                style={{ transformOrigin: '0 0 0' }}
                                timeout={800 + 4 * 400}
                            >
                                <Link
                                    component={RouterLink}
                                    to={portfolioContactRoute}
                                >
                                    <Button
                                        variant='contained'
                                        startIcon={<EmailIcon />}
                                        size='medium'
                                        tabIndex={-1}
                                        sx={{ borderRadius: 8 }}
                                        onClick={() => setActive('')}
                                    >
                                        Contact Me
                                    </Button>
                                </Link>
                            </Grow>
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}

export default function NavLayout() {
    return (
        <>
            <SectionContainer>
                {XsNavbar()}
                {SmNavbar()}
            </SectionContainer>
        </>
    );
}