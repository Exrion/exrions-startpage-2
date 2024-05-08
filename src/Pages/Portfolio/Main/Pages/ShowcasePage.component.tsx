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
            Showcase - WIP!
        </>
    );
}