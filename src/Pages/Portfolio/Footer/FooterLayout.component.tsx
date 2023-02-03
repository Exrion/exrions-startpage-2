import { BottomNavigation, Box, Slide, Stack, Typography } from "@mui/material";
import { officialName } from "../../../Data/Constants/MainConstants";
import { FooterAnchorStyle, FooterBoxSx } from "../../../Styles/Elements/Portfolio/PortfolioRootStyles";
import SectionContainer from "../Shared/SectionContainer.component";

export default function FooterLayout() {
    return (
        <>
            <SectionContainer>
                <Slide
                    in={true}
                    timeout={2000}
                    direction='up'
                >
                    <Box
                        sx={FooterBoxSx}
                        boxShadow={3}
                    >
                        <BottomNavigation>
                            <Stack>
                                <Typography
                                    fontFamily='monospace'
                                    variant='subtitle1'
                                    fontWeight={600}
                                    textAlign='center'
                                >
                                    Designed and Developed by {officialName}
                                </Typography>
                                <Typography
                                    fontFamily='monospace'
                                    variant='subtitle2'
                                    fontWeight={600}
                                    color='GrayText'
                                    sx={{ textDecoration: 'underline' }}
                                    textAlign='center'
                                >
                                    <a
                                        href='https://github.com/Exrion/exrions-startpage-2'
                                        style={FooterAnchorStyle}
                                        tabIndex={0}
                                    >
                                        View Source
                                    </a>
                                </Typography>
                            </Stack>
                        </BottomNavigation>
                    </Box>
                </Slide>
            </SectionContainer>
        </>
    );
}