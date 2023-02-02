import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { startpageDefaultRoute } from "../../Data/Constants/Routes";
import error404Image from './../../Data/Images/Errors/404.jpg';

export default function NotFoundError() {
    const DOCUMENT_TITLE = '404 Not Found';
    const navigate = useNavigate();

    useEffect(() => {
      document.title = DOCUMENT_TITLE;
    }, [])

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh'
                }}
            >
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <Typography variant="h1">
                                404
                            </Typography>
                            <Typography variant="h6">
                                The page you’re looking for doesn’t exist.
                            </Typography>
                            <Typography variant="body1">
                                <Button onClick={() => {navigate(-1)}} variant='contained' size='small'>
                                    Back
                                </Button>
                            </Typography>
                        </Grid>
                        <Grid xs={6}>
                            <img
                                src={error404Image}
                                alt=''
                                width={500} height={250}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}