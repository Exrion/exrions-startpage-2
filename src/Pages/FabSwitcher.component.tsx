import ArticleIcon from '@mui/icons-material/Article';
import WebIcon from '@mui/icons-material/Web';
import { Box, Fab, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { startpageDefaultRoute, portfolioDefaultRoute } from '../Data/Constants/Routes';
import FabSwitcherProps from '../Interfaces/Startpage/FabSwitcherProps';
import { FabBoxSx } from '../Styles/Elements/SharedStyles';

export default function FabSwitcher(props: FabSwitcherProps) {
    const { location } = props;

    if (location === 'startpage') {
        return (
            <>
                <Box sx={FabBoxSx}>
                    <Tooltip title='Visit Portfolio' placement='left' arrow>
                        <Link to={portfolioDefaultRoute}>
                            <Fab color='primary'                            >
                                <ArticleIcon />
                            </Fab>
                        </Link>
                    </Tooltip>
                </Box>
            </>
        );
    } else if (location === 'portfolio') {
        return (
            <>
                <Box sx={FabBoxSx}>
                    <Tooltip title='Visit Startpage' placement='left'>
                        <Link to={startpageDefaultRoute}>
                            <Fab color='primary'                            >
                                <WebIcon />
                            </Fab>
                        </Link>
                    </Tooltip>
                </Box>
            </>
        );
    } else {
        return (
            <>

            </>
        );
    }
}