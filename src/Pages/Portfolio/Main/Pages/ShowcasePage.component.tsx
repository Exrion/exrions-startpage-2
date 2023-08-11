import { Box, Paper, Skeleton, Stack } from "@mui/material";
import { ItemBoxSx, ItemRootBoxSx, RootStackSx } from "../../../../Styles/Elements/Portfolio/ShowcasePageStyles";
import ShowcaseItemProps from "../../../../Components/Elements/Interfaces/ShowcaseItemProps";
import { useEffect, useState } from "react";

function Item(props: ShowcaseItemProps) {
    const { children } = props;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    const loadingSkeleton = () => {
        return (
            <>
                <Skeleton variant="rounded" width='100%' height='100%' />
            </>
        )
    }

    return (
        <>
            <Paper
                sx={{             
                    ...ItemBoxSx
                }}
            >
                {loaded ? loadingSkeleton() : children}
            </Paper>
        </>
    )
}

export default function ShowcasePage() {
    return (
        <>
            <Stack
                sx={RootStackSx}
                spacing={2}
            >
                {/* <Grid
                    spacing={RootGridSpacing}
                    columns={RootGridCols}
                    sx={RootGridSx}
                >
                    <Grid md={3}>
                        <Item>
                            Test 1
                        </Item>
                    </Grid>
                    <Grid md={1}>
                        <Item>
                            Test 2
                        </Item>
                    </Grid>
                    <Grid md={1}>
                        <Item>
                            Test 3
                        </Item>
                    </Grid>
                </Grid> */}
            
                <Box
                    sx={ItemRootBoxSx}
                >
                    <Item>
                        Test 1
                    </Item>
                    <Item>
                        Test 1
                    </Item>
                    <Item>
                        Test 1
                    </Item>
                    <Item>
                        Test 1
                    </Item>
                    <Item>
                        Test 1
                    </Item>
                    <Item>
                        Test 1
                    </Item>
                </Box>
            </Stack>
        </>
    );
}