import { mdiSchool, mdiAccountSchoolOutline, mdiNoteMultiple, mdiServerNetwork, mdiPalmTree, mdiShopping } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, Stack, Typography } from "@mui/material";
import { LinkSchool_LEO2External, LinkSchool_StudentPortal, LinkSchool_LEO2Internal, LinkSchool_SA2, LinkSchool_Intranet, LinkSchool_Oasis, LinkSchool_POLITE } from "../../../Data/Constants/Portfolio/TabPanelLinks";
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
                            <Link label='LEO 2.0 (External)' link={LinkSchool_LEO2External} icon={<Icon path={mdiSchool} size={1} />} />
                            <Link label='RP Student Portal' link={LinkSchool_StudentPortal} icon={<Icon path={mdiAccountSchoolOutline} size={1} />} />
                            <Link label='Oasis' link={LinkSchool_Oasis} icon={<Icon path={mdiPalmTree} size={1} />} />
                            <Link label='POLITE Mall' link={LinkSchool_POLITE} icon={<Icon path={mdiShopping} size={1} />} />
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='LEO 2.0 (Internal)' link={LinkSchool_LEO2Internal} icon={<Icon path={mdiSchool} size={1} />} />
                            <Link label='SA 2.0' link={LinkSchool_SA2} icon={<Icon path={mdiNoteMultiple} size={1} />} />
                            <Link label='Intranet' link={LinkSchool_Intranet} icon={<Icon path={mdiServerNetwork} size={1} />} />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}