import { Box, Paper, Grid, Skeleton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import LoadingBox from "../../Components/Elements/LoadingBox.component";
import { RegionPaperSx, RegionTimePaperSx } from "../../Styles/Elements/Startpage/StartpageRootStyles";
import CenterElement from "../Layouts/CenterElementLayout.component";
import TabsPanel from "./TabsPanel.component";
import TabsSelector from "./TabsSelector.component";
import TimeDisplay from "./TimeDisplay.component";

export default function StartpageGrid() {
    const PAPER_BASE_ELEVATION = 1;
    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState(0); // Tabs State Provider

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
                        <Paper elevation={PAPER_BASE_ELEVATION} sx={RegionTimePaperSx}>
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
                                <TabsSelector active={active} setActive={setActive} />
                            </Paper>
                        </Box>
                        <Box width={{ md: '75%', sm: '75%', xs: '1' }}>
                            <Paper
                                elevation={PAPER_BASE_ELEVATION}
                                sx={RegionPaperSx}
                            >
                                <TabsPanel active={active} setActive={setActive} />
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

