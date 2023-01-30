import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { LinkDefault } from "../../../Data/Constants/Portfolio/TabPanelLinks";
import { LinkPaperSx, LinkStyle } from "../../../Styles/Elements/Startpage/StartpageRootStyles";
import LanguageIcon from '@mui/icons-material/Language';
import { LinkProps } from '../../../Interfaces/LinkProps';

export default function Link(props: LinkProps) {
    const PAPER_BASE_ELEVATION = 2;
    const { label, link, icon } = props;

    return (
        <>
            <a style={LinkStyle} href={link ? link : LinkDefault}>
                <Paper
                    elevation={PAPER_BASE_ELEVATION}
                    sx={LinkPaperSx}
                >
                    <Stack
                        direction='row'
                        spacing={1}
                    >
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            width='6%'
                        >
                            {icon ? icon : <LanguageIcon />}
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="body1">{label ? label : 'PLACEHOLDER'}</Typography>
                    </Stack>
                </Paper>
            </a>
        </>
    );
}