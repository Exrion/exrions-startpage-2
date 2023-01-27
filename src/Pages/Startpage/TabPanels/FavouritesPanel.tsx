import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { LinkDevelopment_GitHub, LinkSchool_LEO2External, LinkSchool_LEO2Internal, LinkEntertainment_Youtube, LinkSchool_StudentPortal } from "../../../Data/Constants/Portfolio/TabPanelLinks";
import { LinkPaperSx, LinkStyle } from "../../../Styles/Elements/Startpage/StartpageRootStyles";
import SchoolIcon from '@mui/icons-material/School';
import { GitHub, YouTube } from "@mui/icons-material";

export default function FavouritesPanel() {
    const PAPER_BASE_ELEVATION = 2;

    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>Favourites</Typography>
                <Stack
                    direction={{ md: 'row', sm: 'row', xs: 'column' }}
                    spacing={1}
                >
                    {/* Left Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <a style={LinkStyle} href={LinkSchool_LEO2External}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <SchoolIcon />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">LEO 2.0 (External)</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkDevelopment_GitHub}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <GitHub />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">GitHub</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkSchool_StudentPortal}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <SchoolIcon />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">RP Student Portal</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <a style={LinkStyle} href={LinkSchool_LEO2Internal}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <SchoolIcon />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">LEO 2.0 (Internal)</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkEntertainment_Youtube}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <YouTube />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">YouTube</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}