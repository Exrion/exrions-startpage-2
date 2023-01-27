import { Box, Paper, Stack, Typography } from "@mui/material";
import { LinkDefault } from "../../../Data/Constants/Portfolio/TabPanelLinks";
import { LinkPaperSx, LinkStyle } from "../../../Styles/Elements/Startpage/StartpageRootStyles";

export default function SocialPanel() {
    const PAPER_BASE_ELEVATION = 2;

    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>Social</Typography>
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
                                    <Typography variant="body1">PLACEHOLDER</Typography>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkDefault}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Typography variant="body1">PLACEHOLDER</Typography>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkDefault}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Typography variant="body1">PLACEHOLDER</Typography>
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
                                    <Typography variant="body1">PLACEHOLDER</Typography>
                                </Paper>
                            </a>
                            <a style={LinkStyle} href={LinkDefault}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Typography variant="body1">PLACEHOLDER</Typography>
                                </Paper>
                            </a>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}