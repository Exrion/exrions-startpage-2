import { Box, Button, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import { DrawerProps } from "../../../Interfaces/Portfolio/DrawerProps";
import { CloseButtonDrawerSx, LinkSx } from "../../../Styles/Elements/Portfolio/PortfolioRootStyles";
import { Stack } from "@mui/system";
import { portfolioDefaultRoute, portfolioActivityRoute, portfolioShowcaseRoute, portfolioAboutRoute, startpageDefaultRoute } from "../../../Data/Constants/Routes";

export default function DrawerItems(props: DrawerProps) {
    const { height, width } = useWindowDimensions();
    const { handleDrawer, active } = props;

    return (
        <>
            <Box
                minWidth={width}
            >
                {/* Close Button */}
                <Button
                    sx={CloseButtonDrawerSx}
                    onClick={handleDrawer(false, active)}
                    disableRipple
                >
                    <CloseIcon fontSize='large' />
                </Button>

                {/* Main Links */}
                <Stack
                    display='flex'
                    justifyContent='space-between'
                    minHeight={height}
                >
                    {/* Links */}
                    <Box>
                        <List>
                            <ListItem onClick={handleDrawer(false, '/portfolio')}>
                                <Link
                                    component={RouterLink}
                                    to={portfolioDefaultRoute}
                                    sx={LinkSx}
                                >
                                    <ListItemButton disableRipple>
                                        <ListItemIcon>
                                            <HomeIcon fontSize='large' sx={{color: active === '/portfolio' ? 'primary.main' : 'GrayText'}} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                variant: 'h2',
                                                color: active === '/portfolio' ? 'primary.main' : 'GrayText'
                                            }}
                                            primary='Home'
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem onClick={handleDrawer(false, 'activity')}>
                                <Link
                                    component={RouterLink}
                                    to={portfolioActivityRoute}
                                    sx={LinkSx}
                                >
                                    <ListItemButton disableRipple>
                                        <ListItemIcon>
                                            <CodeIcon fontSize='large' sx={{color: active === 'activity' ? 'primary.main' : 'GrayText'}} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                variant: 'h2',
                                                color: active === 'activity' ? 'primary.main' : 'GrayText'
                                            }}
                                            primary='Activity'
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem onClick={handleDrawer(false, 'showcase')}>
                                <Link
                                    component={RouterLink}
                                    to={portfolioShowcaseRoute}
                                    sx={LinkSx}
                                >
                                    <ListItemButton disableRipple>
                                        <ListItemIcon>
                                            <CollectionsIcon fontSize='large' sx={{color: active === 'showcase' ? 'primary.main' : 'GrayText'}} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                variant: 'h2',
                                                color: active === 'showcase' ? 'primary.main' : 'GrayText'
                                            }}
                                            primary='Showcase'
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem onClick={handleDrawer(false, 'about')}>
                                <Link
                                    component={RouterLink}
                                    to={portfolioAboutRoute}
                                    sx={LinkSx}
                                >
                                    <ListItemButton disableRipple>
                                        <ListItemIcon>
                                            <InfoIcon fontSize='large' sx={{color: active === 'about' ? 'primary.main' : 'GrayText'}} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                variant: 'h2',
                                                color: active === 'about' ? 'primary.main' : 'GrayText'
                                            }}
                                            primary='About'
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>

                    {/* Bottom Link */}
                    <Box>
                        <Typography
                            textAlign='center'
                            paddingBottom={1}
                            color='GrayText'
                            variant='subtitle1'
                            sx={{ textDecoration: 'underline' }}
                        >
                            <Link
                                component={RouterLink}
                                to={startpageDefaultRoute}
                                sx={LinkSx}
                            >
                                Visit Startpage
                            </Link>
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}