import { Button, Fade, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Stack } from "@mui/system";
import { officialName } from "../../../../Data/Constants/MainConstants";
import { useEffect, useRef, useState } from "react";
import { IntroductionStackSpacing, IntroductionStackSx, RootStackSx } from "../../../../Styles/Elements/Portfolio/HomePageStyles";
import { portfolioShowcaseRoute } from "../../../../Data/Constants/Routes";

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
                        timeout={1200}
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
                        timeout={1600}
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
                        timeout={2000}
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
                        timeout={2400}
                    >
                        <Typography
                            variant='body1'
                            color='gray'
                            fontWeight={600}
                            textAlign='left'
                            maxWidth={0.75}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique venenatis tortor vestibulum ultricies. Pellentesque rutrum sed felis quis pharetra. Proin nisi orci, posuere nec lacinia eget, tincidunt nec quam. Nunc mi turpis, mattis id blandit sed, cursus vel lacus.
                        </Typography>
                    </Fade>
                </Stack>
                <Typography
                    variant='body1'
                    fontWeight={500}
                >
                    <Fade
                        in={loaded}
                        timeout={2800}
                    >
                        <Link
                            component={RouterLink}
                            to={portfolioShowcaseRoute}
                        >
                            <Button
                                variant='outlined'
                                size='medium'
                            >
                                Check out my work
                            </Button>
                        </Link>
                    </Fade>
                </Typography>
            </Stack>
        </>
    );
}