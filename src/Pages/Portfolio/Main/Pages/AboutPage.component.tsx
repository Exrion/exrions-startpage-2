import { Box, Button, Divider, Fade, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { RootBoxPadding, RootBoxSx, RootStackSpacing, SectionBoxSx, SocialButtonSx, TextBoxSx } from "../../../../Styles/Elements/Portfolio/AboutPageStyles";
import { mdiGithub, mdiLinkedin, mdiInstagram } from "@mdi/js";
import Icon from "@mdi/react";
import { useState, useEffect, useRef } from "react";
import { AnimationTimeout } from "../../../../Utilities/AnimationTimeout";
import useOnScreen from "../../../../Hooks/useOnScreen";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Accordion from "../../../../Components/Elements/Accordion.component";
import { AccordionType } from "../../../../Components/Elements/Interfaces/AccordionProps";
import { Rating } from "@mui/lab";
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

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

function Journey(loaded: boolean) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const TimelineElement = () => {
        return (
            <>
                <Stack
                    spacing={{ md: 0, sm: 0, xs: 1 }}
                >
                    {/* Title and Description */}
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(0)}
                    >
                        <Typography
                            variant='h4'
                            color='salmon'
                            fontWeight={600}
                        >
                            My Journey
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
                            A brief overview of my journey thus far.
                        </Typography>
                    </Fade>

                    {/* Timeline */}
                    <Fade
                        in={loaded}
                        timeout={AnimationTimeout(2)}
                    >
                        <Timeline
                            sx={{
                                [`& .${timelineOppositeContentClasses.root}`]: {
                                    flex: 0.2,
                                },
                                py: 5,
                                px: 0
                            }}
                        >
                            {/* Diploma in Information Technology (RP) - End */}
                            <Fade
                                in={loaded}
                                timeout={AnimationTimeout(3)}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                        maxWidth={0.25}
                                        minWidth={0.25}
                                    >
                                        April 2023
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <SchoolIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent
                                        sx={{ py: '12px', px: 2 }}
                                    >
                                        <Typography
                                            variant='subtitle2'
                                            color='GrayText'
                                            fontFamily='monospace'
                                        >
                                            Completed Diploma at
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            color='primary.dark'
                                        >
                                            Republic Polytechnic
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            color='GrayText'
                                        >
                                            At the end of four long years at Republic Polytechnic, I graduated with a Diploma in Information Technology.
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            color='darksalmon'
                                            fontWeight={600}
                                        >

                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Fade>

                            {/* TeBS Internship - End */}
                            <Fade
                                in={loaded}
                                timeout={AnimationTimeout(3.5)}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                        maxWidth={0.25}
                                        minWidth={0.25}
                                    >
                                        03 February 2022
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <WorkIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent
                                        sx={{ py: '12px', px: 2 }}
                                    >
                                        <Typography
                                            variant='subtitle2'
                                            color='GrayText'
                                            fontFamily='monospace'
                                        >
                                            Completed Internship at
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            color='primary.dark'
                                        >
                                            Total Ebiz Solutions Singapore
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            color='GrayText'
                                        >
                                            This internship opened my eyes on how complex enterprise level applications are. I learned much more on proper practises such as repository patterns and data, logic and business layer seperation, in addition to technologies I have not learned before like ReactJS (TypeScript) and Dynamics 365 CRM.
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            color='darksalmon'
                                            fontWeight={600}
                                        >

                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Fade>

                            {/* TeBS Internship - Start */}
                            <Fade
                                in={loaded}
                                timeout={AnimationTimeout(4)}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                        maxWidth={0.25}
                                        minWidth={0.25}
                                    >
                                        19 September 2022
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color='primary'>
                                            <WorkIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent
                                        sx={{ py: '12px', px: 2 }}
                                    >
                                        <Typography
                                            variant='subtitle2'
                                            color='GrayText'
                                            fontFamily='monospace'
                                        >
                                            Began Internship at
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            color='primary.dark'
                                        >
                                            Total Ebiz Solutions Singapore
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            color='GrayText'
                                        >
                                            Worked as a .NET Developer for the NParks Maven II AVS Project. I was responsible for the development of the public-facing Singapore Foreign Account Application form.
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            color='darksalmon'
                                            fontWeight={600}
                                        >
                                            ReactJS(TypeScript), .NET 6 Web API, Dynamics 365 CRM OData API
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Fade>

                            {/* Diploma in Information Technology (RP) - Start */}
                            <Fade
                                in={loaded}
                                timeout={AnimationTimeout(4.5)}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                        maxWidth={0.25}
                                        minWidth={0.25}
                                    >
                                        March 2019
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color='primary'>
                                            <SchoolIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent
                                        sx={{ py: '12px', px: 2 }}
                                    >
                                        <Typography
                                            variant='subtitle2'
                                            color='GrayText'
                                            fontFamily='monospace'
                                        >
                                            Started studying at
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            color='primary.dark'
                                        >
                                            Republic Polytechnic
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            color='GrayText'
                                        >
                                            Began Year 0 of the Polytechnic Foundation Programme for a Diploma in Information Technology
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            color='darksalmon'
                                            fontWeight={600}
                                        >
                                            Java, Python, Windows Server 2019, Palo Alto Firewalls, Cisco Networks, .NET Core 5 & 6 (MVC and Web API), MySQL, Software Development Life Cycle
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Fade>

                            {/* GCSE 'N' Levels */}
                            <Fade
                                in={loaded}
                                timeout={AnimationTimeout(5)}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                        maxWidth={0.25}
                                        minWidth={0.25}
                                    >
                                        January 2019
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <SchoolIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent
                                        sx={{ py: '12px', px: 2 }}
                                    >
                                        <Typography
                                            variant='subtitle2'
                                            color='GrayText'
                                            fontFamily='monospace'
                                        >
                                            Graduated from
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            color='primary.dark'
                                        >
                                            Riverside Secondary School
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            color='GrayText'
                                        >
                                            Received GCSE 'N(A)' Level results on December 2018 and accepted posting to Polytechnic Foundation Programme at Republic Polytechnic for a Diploma in Information Technology in January 2019.
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            color='darksalmon'
                                            fontWeight={600}
                                        >
                                            GCSE 'N(A)' Level Certificate
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Fade>

                            {/* PSLE */}
                            <Fade
                                in={loaded}
                                timeout={AnimationTimeout(5.5)}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                        maxWidth={0.25}
                                        minWidth={0.25}
                                    >
                                        November 2014
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot>
                                            <SchoolIcon />
                                        </TimelineDot>
                                    </TimelineSeparator>
                                    <TimelineContent
                                        sx={{ py: '12px', px: 2 }}
                                    >
                                        <Typography
                                            variant='subtitle2'
                                            color='GrayText'
                                            fontFamily='monospace'
                                        >
                                            Graduated from
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            color='primary.dark'
                                        >
                                            Beacon Primary School
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            color='GrayText'
                                        >
                                            Received Primary School Leaving Examination results and posted to the 'Normal Academic' stream.
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            color='darksalmon'
                                            fontWeight={600}
                                        >
                                            PSLE Certificate
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Fade>
                        </Timeline>
                    </Fade>
                </Stack>
            </>
        );
    }

    return (
        <>
            <Box
                ref={ref}
                sx={SectionBoxSx}
            >
                {isVisible && TimelineElement()}
            </Box>
        </>
    );
}

function Skills(loaded: boolean) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#42a5f5',
        },
    });

    const accordianArray: AccordionType[] = [
        {
            title: 'Web Development', //ReactJS (JS/TS), .NET Core 5 MVC, NextJS
            content:
                <>
                    <Stack
                        spacing={1}
                    >
                        <Box>
                            <Stack>
                                <Stack
                                    direction='row'
                                    justifyContent='space-between'
                                >
                                    <Typography
                                        variant='h6'
                                        color='primary.dark'
                                    >
                                        ReactJS
                                    </Typography>
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <StyledRating
                                            value={4}
                                            icon={<CircleIcon fontSize='inherit' />}
                                            emptyIcon={<CircleOutlinedIcon fontSize='inherit' />}
                                            readOnly
                                        />
                                        <Typography
                                            variant='subtitle1'
                                            color='GrayText'
                                        >
                                            Advanced
                                        </Typography>
                                    </Stack>
                                </Stack>
                                Lorem Ipsum
                            </Stack>
                        </Box>
                    </Stack>
                </>
        },
        {
            title: 'Middleware Technologies', //NodeJS, .NET Core 6 Web API
            content:
                <>

                </>
        },
        {
            title: 'Backend Technologies', //MySQL, MSSQL, MongoDB, MariaDB
            content:
                <>

                </>
        },
        {
            title: 'Server Administration', //VMWare VSphere, Windows Server, Linux Server, 
            content:
                <>

                </>
        },
        {
            title: 'Internetworking', //Cisco Network Devices, Palo Alto Firewalls
            content:
                <>

                </>
        },
        {
            title: 'Cloud Services', //Azure, AWS, Dynamics 365
            content:
                <>

                </>
        }
    ];

    const SkillsElement = () => {
        return (
            <>
                <Box
                    sx={SectionBoxSx}
                >
                    <Stack
                        spacing={{ md: 0, sm: 0, xs: 1 }}
                    >
                        {/* Title and Description */}
                        <Fade
                            in={loaded}
                            timeout={AnimationTimeout(0)}
                        >
                            <Typography
                                variant='h4'
                                color='salmon'
                                fontWeight={600}
                            >
                                Skills
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
                                A summary of what I have learned thus far; the technologies that I have worked with over the years.
                            </Typography>
                        </Fade>

                        {/* Skills */}
                        <Fade
                            in={loaded}
                            timeout={AnimationTimeout(1)}
                        >
                            <Box>
                                <Accordion AccordianItems={accordianArray} />
                            </Box>
                        </Fade>
                    </Stack>
                </Box>
            </>
        );
    }

    return (
        <>
            <Box
                ref={ref}
                sx={SectionBoxSx}
            >
                {isVisible && SkillsElement()}
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
                    {/* Journey */}
                    {Journey(loaded)}

                    {/* Section 03 */}
                    {/* Skills */}
                    {Skills(loaded)}
                </Stack>
            </Box>
        </>
    );
}