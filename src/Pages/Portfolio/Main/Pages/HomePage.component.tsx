import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { officialName } from "../../../../Data/Constants/MainConstants";
import { useEffect, useState } from "react";
import { IntroductionStackSpacing, IntroductionStackSx } from "../../../../Styles/Elements/Portfolio/HomePageStyles";

export default function HomePage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    return (
        <>
            <Stack
                sx={IntroductionStackSx}
                spacing={IntroductionStackSpacing}
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
                <Typography
                    variant='h1'
                    color='darksalmon'
                    fontWeight={600}
                    textAlign='left'
                >
                    {officialName}
                </Typography>
                <Typography
                    variant='h3'
                    color='salmon'
                    fontWeight={600}
                    textAlign='left'
                    maxWidth={0.75}
                >
                    I'm a Full-Stack Software Developer.
                </Typography>
                <Typography
                    variant='body1'
                    color='gray'
                    fontWeight={600}
                    textAlign='left'
                    maxWidth={0.75}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique venenatis tortor vestibulum ultricies. Pellentesque rutrum sed felis quis pharetra. Proin nisi orci, posuere nec lacinia eget, tincidunt nec quam. Nunc mi turpis, mattis id blandit sed, cursus vel lacus.
                </Typography>
            </Stack>
        </>
    );
}