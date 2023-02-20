import { Box, Fade, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EmailForm from "../../../../Components/Elements/EmailForm.component";
import { RootBoxPadding, RootBoxSx, RootStackSpacing } from "../../../../Styles/Elements/Portfolio/ContactPageStyles";
import { AnimationTimeout } from "../../../../Utilities/AnimationTimeout";

export default function ContactPage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])


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
                        <Fade
                            in={loaded}
                            timeout={AnimationTimeout(0)}
                        >
                            <Typography
                                variant='h4'
                                color='salmon'
                                fontWeight={600}
                                textAlign='center'
                            >
                                Get in Touch
                            </Typography>
                        </Fade>
                        <Fade
                            in={loaded}
                            timeout={AnimationTimeout(1)}
                        >
                            <Typography
                                variant="body1"
                                color='GrayText'
                                textAlign='center'
                            >
                                Use the form below to send me an email, alternatively, my social media contacts can be found on the <b>About</b> page.
                            </Typography>
                        </Fade>
                        <EmailForm />
                    </Box>
                </Stack>
            </Box>
        </>
    );
}