import { Box, Link, Stack, Typography } from "@mui/material";

export default function SchoolPanel() {
    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>School</Typography>
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