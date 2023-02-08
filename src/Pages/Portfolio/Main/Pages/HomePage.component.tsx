import { Button, Fade, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { officialName } from "../../../../Data/Constants/MainConstants";
import { useEffect, useRef, useState } from "react";
import { IntroductionStackSpacing, IntroductionStackSx, RootStackSx } from "../../../../Styles/Elements/Portfolio/HomePageStyles";
import { AnimationTimeout } from "../../../../Utilities/AnimationTimeout";

export default function HomePage() {
    const containerRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    return (
        <>
            <Stack
                sx={RootStackSx}
                spacing={2}
            >
                <Stack
                    sx={IntroductionStackSx}
                    spacing={IntroductionStackSpacing}
                    ref={containerRef}
                >
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(0)}
                    >
                        <Typography
                            variant='h6'
                            color='primary.dark'
                            textAlign='left'
                            fontFamily="monospace"
                            fontWeight={600}
                        >
                            Hi, my name is
                        </Typography>
                    </Fade>
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(1)}
                    >
                        <Typography
                            variant='h1'
                            color='darksalmon'
                            fontWeight={600}
                            textAlign='left'
                        >
                            {officialName}
                        </Typography>
                    </Fade>
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(2)}
                    >
                        <Typography
                            variant='h3'
                            color='salmon'
                            fontWeight={600}
                            textAlign='left'
                            maxWidth={0.75}
                        >
                            I'm a Full-Stack Software Developer.
                        </Typography>
                    </Fade>
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(3)}
                    >
                        <Typography
                            variant='body1'
                            color='gray'
                            fontWeight={600}
                            textAlign='left'
                            maxWidth={0.75}
                        >
                            I am an aspiring UI/UX Designer and Front-End Web Developer currently studying at Republic Polytechnic. I hope to create experiences that are inclusive of people from all walks of life.
                        </Typography>
                    </Fade>
                </Stack>
                <Typography
                    variant='body1'
                    fontWeight={500}
                >
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(4)}
                    >
                        <Button
                            variant='outlined'
                            size='medium'
                            tabIndex={-1}
                            disabled
                        >
                            Check out my work (Fix in Progress)
                        </Button>
                    </Fade>
                </Typography>
            </Stack>
        </>
    );
}