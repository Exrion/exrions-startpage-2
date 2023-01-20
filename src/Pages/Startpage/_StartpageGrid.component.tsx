import { Box, Paper, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { RegionPaperSx } from "../../Styles/Elements/Startpage/StartpageRootStyles";

export default function StartpageGrid() {
    const PAPER_BASE_ELEVATION = 1;

    return (
        <>
            <Box
                display='flex'
                flexDirection='column'
                height={1}
                width={1}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='inherit'
                    width='inherit'
                >
                    {/* Main Content */}
                    <Stack
                        spacing={1}
                        width='75%'
                    >
                        {/* Top Row */}
                        <Box width={1}>
                            <Paper elevation={PAPER_BASE_ELEVATION} sx={RegionPaperSx}>
                                test
                            </Paper>
                        </Box>

                        {/* Bottom Row */}
                        <Stack
                            direction={{md: 'row', sm: 'row', xs: 'column'}}
                            spacing={1}
                        >
                            <Box width={{md: '25%', sm: '25%', xs: '1'}}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={RegionPaperSx}
                                >
                                    test
                                </Paper>
                            </Box>
                            <Box width={{md: '75%', sm: '75%', xs: '1'}}>
                                <Paper
                                    elevation={PAPER_BASE_ELEVATION}
                                    sx={RegionPaperSx}
                                >
                                    test
                                </Paper>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}

