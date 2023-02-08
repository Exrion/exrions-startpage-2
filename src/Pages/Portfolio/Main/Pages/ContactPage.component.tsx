import { Box, Stack } from "@mui/material";
import { RootBoxPadding, RootBoxSx, RootStackSpacing } from "../../../../Styles/Elements/Portfolio/ContactPageStyles";

export default function ContactPage() {
    return (
        <>
            <Box
                sx={RootBoxSx}
                py={RootBoxPadding}
            >
                <Stack
                    spacing={RootStackSpacing}
                >
                    Test
                </Stack>
            </Box>
        </>
    );
}