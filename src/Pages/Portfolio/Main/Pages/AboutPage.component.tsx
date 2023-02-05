import { Box, Button, Divider, Fade, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { RootBoxPadding, RootBoxSx, RootStackSpacing, SectionBoxSx, SocialButtonSx, TextBoxSx } from "../../../../Styles/Elements/Portfolio/AboutPageStyles";
import { mdiGithub, mdiLinkedin, mdiInstagram } from "@mdi/js";
import Icon from "@mdi/react";
import { useState, useEffect, useRef } from "react";
import { AnimationTimeout } from "../../../../Utilities/AnimationTimeout";
import useOnScreen from "../../../../Hooks/useOnScreen";

function SocialIcons(loaded: boolean) {
    return (
        <>
            <Box
                display={{ md: 'none', sm: 'none', xs: 'block' }}
            >
                <Stack
                    spacing={1}
                    direction='row'
                >
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(0)}
                    >
                        <Button
                            variant='text'
                            size='large'
                            href='https://github.com/Exrion'
                            sx={SocialButtonSx}
                        >
                            <Icon path={mdiGithub} size={1} />
                        </Button>
                    </Fade>
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(1)}
                    >
                        <Button
                            variant='text'
                            size='large'
                            href='https://www.linkedin.com/in/tituslim-exrion/'
                            sx={SocialButtonSx}
                        >
                            <Icon path={mdiLinkedin} size={1} />
                        </Button>
                    </Fade>
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(2)}
                    >
                        <Button
                            variant='text'
                            size='large'
                            href='https://www.instagram.com/exrionlexom/'
                            sx={SocialButtonSx}
                        >
                            <Icon path={mdiInstagram} size={1} />
                        </Button>
                    </Fade>
                </Stack>
            </Box>
            <Box
                display={{ md: 'block', sm: 'block', xs: 'none' }}
            >
                <Stack
                    spacing={1}
                    direction='row'
                >
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(0)}
                    >
                        <Button
                            variant='text'
                            href='https://github.com/Exrion'
                            sx={SocialButtonSx}
                        >
                            <Icon path={mdiGithub} size={1} />
                        </Button>
                    </Fade>
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(1)}
                    >
                        <Button
                            variant='text'
                            href='https://www.linkedin.com/in/tituslim-exrion/'
                            sx={SocialButtonSx}
                        >
                            <Icon path={mdiLinkedin} size={1} />
                        </Button>
                    </Fade>
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(2)}
                    >
                        <Button
                            variant='text'
                            href='https://www.instagram.com/exrionlexom/'
                            sx={SocialButtonSx}
                        >
                            <Icon path={mdiInstagram} size={1} />
                        </Button>
                    </Fade>
                </Stack>
            </Box>

            <Box
                sx={{
                    ...TextBoxSx,
                    ...{ display: { md: 'block', sm: 'block', xs: 'none' } }
                }}
            >
                <Fade
                    in={loaded}
                    timeout={AnimationTimeout(0)}
                >
                    <Divider />
                </Fade>
            </Box>
        </>
    );
}

function Statement(loaded: boolean) {
    return (
        <>
            <Box
                sx={SectionBoxSx}
            >
                <Stack
                    spacing={{ md: 0, sm: 0, xs: 1 }}
                >
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(0)}
                    >
                        <Typography
                            variant='h4'
                            color='salmon'
                            fontWeight={600}
                        >
                            Personal Statement
                        </Typography>
                    </Fade>
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(1)}
                    >
                        <Typography
                            variant='body1'
                            color='gray'
                            textAlign='left'
                            sx={TextBoxSx}
                        >
                            To design and create something that is functional and elegant is what I love to do, I think that software development is a way of expressing that. I've come to love UI/UX Design and Front-end Development the most, to not just create something beautiful and useful, but to also bring it to those who walk different paths. Creating interfaces and experiences that are accessible and inclusive is what I hope to be able to do, so that people from all walks of life can experience the internet equally as well as everyone else.
                        </Typography>
                    </Fade>
                </Stack>
            </Box>
        </>
    );
}

function Experience(loaded: boolean) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const Timeline = () => {
        return (
            <>

            </>
        );
    }

    return (
        <>
            <Box
                ref={ref}
                sx={SectionBoxSx}
            >
                {isVisible && Timeline()}
            </Box>
        </>
    );
}

function Education(loaded: boolean) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const Timeline = () => {
        return (
            <>

            </>
        );
    }

    return (
        <>
            <Box
                ref={ref}
                sx={SectionBoxSx}
            >
                {isVisible && Timeline()}
            </Box>
        </>
    );
}

export default function AboutPage() {
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
                    {/* Section 01 */}
                    <Box>
                        <Stack>
                            {/* Social Icons */}
                            {SocialIcons(loaded)}

                            {/* Statement */}
                            {Statement(loaded)}
                        </Stack>
                    </Box>

                    {/* Section 02 */}
                    {/* Experience */}
                    {Experience(loaded)}

                    {/* Section 03 */}
                    {/* Education */}
                    {Education(loaded)}
                </Stack>
            </Box>
        </>
    );
}