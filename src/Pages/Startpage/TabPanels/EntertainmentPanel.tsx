import { Box, Stack, Typography } from "@mui/material";
import Link from "../Links/Link";

export default function EntertainmentPanel() {
    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>Entertainment</Typography>
                <Stack
                    direction={{ md: 'row', sm: 'row', xs: 'column' }}
                    spacing={1}
                >
                    {/* Left Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link />
                            <Link />
                            <Link />
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link />
                            <Link />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}