import { Box, Paper, Stack, Typography } from "@mui/material";
import { LinkDefault, LinkFavourites_LEO2External, LinkFavourites_LEO2Internal } from "../../../Data/Constants/Portfolio/TabPanelLinks";
import { LinkPaperSx, LinkStyle } from "../../../Styles/Elements/Startpage/StartpageRootStyles";

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
                    <Box width={{md: 0.5, sm: 0.5, xs: 1}}>
                        <Stack spacing={1}>
                            <a style={LinkStyle} href={LinkFavourites_LEO2External}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Typography variant="body1">LEO 2.0 (External)</Typography>
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
                    <Box width={{md: 0.5, sm: 0.5, xs: 1}}>
                        <Stack spacing={1}>
                            <a style={LinkStyle} href={LinkFavourites_LEO2Internal}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={LinkPaperSx}
                                >
                                    <Typography variant="body1">LEO 2.0 (Internal)</Typography>
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