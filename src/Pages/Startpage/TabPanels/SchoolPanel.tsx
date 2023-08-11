import { mdiSchool, mdiEmail, mdiServerNetwork, mdiAccount, mdiVideo } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, Stack, Typography } from "@mui/material";
import { LinkSchool_DRAMA, LinkSchool_DistanceMoodle, LinkSchool_Roundcube, LinkSchool_IN4SIT, LinkSchool_Intranet, LinkSchool_xSiTe } from "../../../Data/Constants/Startpage/TabPanelLinks";
import Link from "../Links/Link";

export default function SchoolPanel() {
    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>School</Typography>
                <Stack
                    direction={{ md: 'row', sm: 'row', xs: 'column' }}
                    spacing={1}
                >
                    {/* Left Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='DRAMA' link={LinkSchool_DRAMA} icon={<Icon path={mdiSchool} size={1} />} />
                            <Link label='Distance (Moodle)' link={LinkSchool_DistanceMoodle} icon={<Icon path={mdiVideo} size={1} />} />
                            <Link label='IN4SIT' link={LinkSchool_IN4SIT} icon={<Icon path={mdiAccount} size={1} />} />
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='Roundcube' link={LinkSchool_Roundcube} icon={<Icon path={mdiEmail} size={1} />} />
                            <Link label='xSiTe' link={LinkSchool_xSiTe} icon={<Icon path={mdiSchool} size={1} />} />
                            <Link label='Intranet' link={LinkSchool_Intranet} icon={<Icon path={mdiServerNetwork} size={1} />} />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}