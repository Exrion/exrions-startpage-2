import { Box } from "@mui/system";
import React from "react";

export default function SectionContainer({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                minWidth={{ md: '75vw', sm: '80vw', xs: '100vw' }}
            >
                {children}
            </Box>
        </>
    );
}