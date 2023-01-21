import { Box, Paper, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import LoadingBox from "../../Components/Elements/LoadingBox.component";
import { RegionPaperSx } from "../../Styles/Elements/Startpage/StartpageRootStyles";
import CenterElement from "../Layouts/CenterElementLayout.component";
import TimeDisplay from "./TimeDisplay.component";

export default function StartpageGrid() {
    const PAPER_BASE_ELEVATION = 1;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    if (loaded) {
        return (
            <CenterElement>
                <Stack
                    spacing={1}
                    width='75%'
                >
                    {/* Top Row */}
                    <Box width={1}>
                        <Paper elevation={PAPER_BASE_ELEVATION} sx={RegionPaperSx}>
                            <TimeDisplay />
                        </Paper>
                    </Box>

                    {/* Bottom Row */}
                    <Stack
                        direction={{ md: 'row', sm: 'row', xs: 'column' }}
                        spacing={1}
                    >
                        <Box width={{ md: '25%', sm: '25%', xs: '1' }}>
                            <Paper
                                elevation={PAPER_BASE_ELEVATION}
                                sx={RegionPaperSx}
                            >
                                test
                            </Paper>
                        </Box>
                        <Box width={{ md: '75%', sm: '75%', xs: '1' }}>
                            <Paper
                                elevation={PAPER_BASE_ELEVATION}
                                sx={RegionPaperSx}
                            >
                                test
                            </Paper>
                        </Box>
                    </Stack>
                </Stack>
            </CenterElement>
        );
    }
    else {
        return (
            <CenterElement>
                <LoadingBox />
            </CenterElement>
        );
    }
}

