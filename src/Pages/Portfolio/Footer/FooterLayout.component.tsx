import { BottomNavigation, Box, Button, Slide, Stack, Typography } from "@mui/material";
import { officialName } from "../../../Data/Constants/MainConstants";
import { FooterAnchorStyle, FooterBoxSx } from "../../../Styles/Elements/Portfolio/PortfolioRootStyles";
import SectionContainer from "../Shared/SectionContainer.component";
import { mdiGithub, mdiLinkedin, mdiInstagram } from "@mdi/js";
import { SocialButtonSx } from "../../../Styles/Elements/Portfolio/AboutPageStyles";
import { useState, useEffect } from "react";
import Icon from "@mdi/react";

export default function FooterLayout() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    return (
        <>
            <SectionContainer>
                <Slide
                    in={true}
                    timeout={2000}
                    direction='up'
                >
                    <Box
                        sx={FooterBoxSx}
                        boxShadow={3}
                        minHeight={95}
                        bgcolor='white'
                    >
                        <BottomNavigation>
                            <Stack>
                                <Typography
                                    fontFamily='monospace'
                                    variant='subtitle1'
                                    fontWeight={600}
                                    textAlign='center'
                                >
                                    Designed and Developed by {officialName}
                                </Typography>
                                <Box
                                    display='flex'
                                    justifyContent='center'
                                    marginBottom={-1}
                                >
                                    <Stack
                                        spacing={1}
                                        direction='row'
                                        flex='between'
                                    >
                                        <Button
                                            variant='text'
                                            size='large'
                                            href='https://github.com/Exrion'
                                            sx={SocialButtonSx}
                                        >
                                            <Icon path={mdiGithub} size={1} />
                                        </Button>
                                        <Button
                                            variant='text'
                                            size='large'
                                            href='https://www.linkedin.com/in/tituslim-exrion/'
                                            sx={SocialButtonSx}
                                        >
                                            <Icon path={mdiLinkedin} size={1} />
                                        </Button>
                                        <Button
                                            variant='text'
                                            size='large'
                                            href='https://www.instagram.com/exrionlexom/'
                                            sx={SocialButtonSx}
                                        >
                                            <Icon path={mdiInstagram} size={1} />
                                        </Button>
                                    </Stack>
                                </Box>
                                <Typography
                                    fontFamily='monospace'
                                    variant='subtitle2'
                                    fontWeight={600}
                                    color='GrayText'
                                    sx={{ textDecoration: 'underline' }}
                                    textAlign='center'
                                >
                                    <a
                                        href='https://github.com/Exrion/exrions-startpage-2'
                                        style={FooterAnchorStyle}
                                        tabIndex={0}
                                    >
                                        View Source
                                    </a>
                                </Typography>
                            </Stack>
                        </BottomNavigation>
                    </Box>
                </Slide>
            </SectionContainer>
        </>
    );
}