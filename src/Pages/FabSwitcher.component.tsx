import ArticleIcon from '@mui/icons-material/Article';
import WebIcon from '@mui/icons-material/Web';
import { Box, Fab, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { defaultRoute, portfolioRoute } from '../Data/Constants/Routes';
import FabSwitcherProps from '../Interfaces/FabSwitcherProps';
import { FabBoxSx as FabBoxSx } from '../Styles/Elements/SharedStyles';

export default function FabSwitcher(props: FabSwitcherProps) {
    const { location } = props;

    if (location === 'startpage') {
        return (
            <>
                <Box sx={FabBoxSx}>
                    <Tooltip title='Visit Portfolio' placement='left' arrow>
                        <Link to={portfolioRoute}>
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
                        <Link to={defaultRoute}>
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