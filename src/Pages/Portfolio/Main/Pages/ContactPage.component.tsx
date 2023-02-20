import { Box, Stack, Typography } from "@mui/material";
import EmailForm from "../../../../Components/Elements/EmailForm.component";
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
                    <Box>
                        <Typography
                            variant='h4'
                            color='salmon'
                            fontWeight={600}
                            textAlign='center'
                        >
                            Get in Touch
                        </Typography>
                        <Typography
                            variant="body1"
                            color='GrayText'
                            textAlign='center'
                        >
                            Use the form below to send me an email, alternatively, my social media contacts can be found on the <b>About</b> page.
                        </Typography>
                        <EmailForm />
                    </Box>
                </Stack>
            </Box>
        </>
    );
}