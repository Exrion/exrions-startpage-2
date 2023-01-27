import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { LinkDefault } from "../../../Data/Constants/Portfolio/TabPanelLinks";
import { LinkPaperSx, LinkStyle } from "../../../Styles/Elements/Startpage/StartpageRootStyles";
import LanguageIcon from '@mui/icons-material/Language';

export default function DevelopmentPanel() {
    const PAPER_BASE_ELEVATION = 2;

    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>Development</Typography>
                <Stack
                    direction={{ md: 'row', sm: 'row', xs: 'column' }}
                    spacing={1}
                >
                    {/* Left Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <a style={LinkStyle} href={LinkDefault}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <LanguageIcon />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">PLACEHOLDER</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkDefault}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <LanguageIcon />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">PLACEHOLDER</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkDefault}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <LanguageIcon />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">PLACEHOLDER</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <a style={LinkStyle} href={LinkDefault}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <LanguageIcon />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">PLACEHOLDER</Typography>
                                    </Stack>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkDefault}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <LanguageIcon />
                                        <Divider orientation="vertical" flexItem />
                                        <Typography variant="body1">PLACEHOLDER</Typography>
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