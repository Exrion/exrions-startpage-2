import { YouTube } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { LinkEntertainment_9Anime, LinkEntertainment_BFlix, LinkEntertainment_DisneyPlus, LinkEntertainment_Netflix, LinkEntertainment_PrimeTV, LinkEntertainment_Spotify, LinkEntertainment_Twitch, LinkEntertainment_Youtube } from "../../../Data/Constants/Portfolio/TabPanelLinks";
import Link from "../Links/Link";
import { RiMickeyFill } from 'react-icons/ri';
import Icon from '@mdi/react';
import { mdiTwitch, mdiSpotify, mdiNetflix } from '@mdi/js';

export default function EntertainmentPanel() {
    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>Entertainment</Typography>
                <Stack
                    direction={{ md: 'row', sm: 'row', xs: 'column' }}
                    spacing={1}
                >
                    {/* Left Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='YouTube' link={LinkEntertainment_Youtube} icon={<YouTube />} />
                            <Link label='Disney+' link={LinkEntertainment_DisneyPlus} icon={<RiMickeyFill size='85%' />} />
                            <Link label='Netflix' link={LinkEntertainment_Netflix} icon={<Icon path={mdiNetflix} size={1} />} />
                            <Link label='9Anime' link={LinkEntertainment_9Anime} />
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='Amazon Prime TV' link={LinkEntertainment_PrimeTV} icon={<YouTube />} />
                            <Link label='Spotify' link={LinkEntertainment_Spotify} icon={<Icon path={mdiSpotify} size={1} />} />
                            <Link label='Twitch' link={LinkEntertainment_Twitch} icon={<Icon path={mdiTwitch} size={1} />} />
                            <Link label='BFlix' link={LinkEntertainment_BFlix} />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}