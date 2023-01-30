import { Box, Stack, Typography } from "@mui/material";
import { LinkDevelopment_GitHub, LinkSchool_LEO2External, LinkSchool_LEO2Internal, LinkEntertainment_Youtube, LinkSchool_StudentPortal } from "../../../Data/Constants/Portfolio/TabPanelLinks";
import Icon from '@mdi/react';
import { mdiYoutube,  mdiGithub, mdiAccountSchoolOutline, mdiSchool } from '@mdi/js';
import Link from "../Links/Link";

export default function FavouritesPanel() {
    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>Favourites</Typography>
                <Stack
                    direction={{ md: 'row', sm: 'row', xs: 'column' }}
                    spacing={1}
                >
                    {/* Left Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='LEO 2.0 (External)' link={LinkSchool_LEO2External} icon={<Icon path={mdiSchool} size={1} />} />
                            <Link label='GitHub' link={LinkDevelopment_GitHub} icon={<Icon path={mdiGithub} size={1} />} />
                            <Link label='RP Student Portal' link={LinkSchool_StudentPortal} icon={<Icon path={mdiAccountSchoolOutline} size={1} />} />
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='LEO 2.0 (Internal)' link={LinkSchool_LEO2Internal} icon={<Icon path={mdiSchool} size={1} />} />
                            <Link label='YouTube' link={LinkEntertainment_Youtube} icon={<Icon path={mdiYoutube} size={1} />} />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}