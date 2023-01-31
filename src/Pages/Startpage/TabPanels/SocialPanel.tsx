import { Box, Stack, Typography } from "@mui/material";
import { LinkSocial_Instagram, LinkSocial_LinkedIn, LinkSocial_Reddit, LinkSocial_Telegram, LinkSocial_Twitter, LinkSocial_WhatsApp } from "../../../Data/Constants/Startpage/TabPanelLinks";
import Link from "../Links/Link";
import Icon from '@mdi/react';
import { mdiWhatsapp, mdiInstagram, mdiLinkedin, mdiReddit, mdiTwitter } from '@mdi/js';
import { FaTelegram } from 'react-icons/fa';

export default function SocialPanel() {
    return (
        <>
            <Stack spacing={1}>
                <Typography variant='h4' color='primary'>Social</Typography>
                <Stack
                    direction={{ md: 'row', sm: 'row', xs: 'column' }}
                    spacing={1}
                >
                    {/* Left Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='WhatsApp' link={LinkSocial_WhatsApp} icon={<Icon path={mdiWhatsapp} size={1} />} />
                            <Link label='Instagram' link={LinkSocial_Instagram} icon={<Icon path={mdiInstagram} size={1} />} />
                            <Link label='LinkedIn' link={LinkSocial_LinkedIn} icon={<Icon path={mdiLinkedin} size={1} />} />
                        </Stack>
                    </Box>

                    {/* Right Column */}
                    <Box width={{ md: 0.5, sm: 0.5, xs: 1 }}>
                        <Stack spacing={1}>
                            <Link label='Reddit' link={LinkSocial_Reddit} icon={<Icon path={mdiReddit} size={1} />} />
                            <Link label='Telegram' link={LinkSocial_Telegram} icon={<FaTelegram size='85%' />} />
                            <Link label='Twitter' link={LinkSocial_Twitter} icon={<Icon path={mdiTwitter} size={1} />} />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}