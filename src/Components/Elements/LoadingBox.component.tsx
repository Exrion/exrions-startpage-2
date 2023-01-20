import { Box, Card, CircularProgress, Stack, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function LoadingBox(props: any) {
    const loadingText: string = props.loadingText;

    const displayText = () => {
        if (loadingText) {
            return loadingText;
        }
        return 'Loading...';
    }

    return (
        <>
            <Box width={280}>
                <Card sx={{opacity: 0.9}}>
                    <Stack
                        spacing={1}
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding={2}
                    >
                        <CircularProgress size={60} />
                        <Typography variant="h5">
                            {displayText()}
                        </Typography>
                    </Stack>
                </Card>
            </Box>
        </>
    );
}