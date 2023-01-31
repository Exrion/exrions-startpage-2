import { mdiGithub, mdiMicrosoftAzureDevops, mdiMaterialUi, mdiTailwind, mdiServer, mdiApi } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, Stack, Typography } from "@mui/material";
import { LinkDevelopment_DevOps, LinkDevelopment_GitHub, LinkDevelopment_MUI, LinkDevelopment_Tailwind, LinkDevelopment_Unsplash, LinkDevelopment_Vercel } from "../../../Data/Constants/Startpage/TabPanelLinks";
import Link from "../Links/Link";

export default function DevelopmentPanel() {
    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>Development</Typography>
                <Stack
                    direction={{ md: 'row', sm: 'row', xs: 'column' }}
                    spacing={1}
                >
                    {/* Left Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='GitHub' link={LinkDevelopment_GitHub} icon={<Icon path={mdiGithub} size={1} />} />
                            <Link label='Azure DevOps' link={LinkDevelopment_DevOps} icon={<Icon path={mdiMicrosoftAzureDevops} size={1} />} />
                            <Link label='Material UI Docs' link={LinkDevelopment_MUI} icon={<Icon path={mdiMaterialUi} size={1} />} />
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='Tailwind CSS Docs' link={LinkDevelopment_Tailwind} icon={<Icon path={mdiTailwind} size={1} />} />
                            <Link label='Vercel' link={LinkDevelopment_Vercel} icon={<Icon path={mdiServer} size={1} />} />
                            <Link label='Unsplash API' link={LinkDevelopment_Unsplash} icon={<Icon path={mdiApi} size={1} />} />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}