import { startpageTheme } from "../../Themes/RootThemes";

const theme = startpageTheme;

export const RegionTimePaperSx = {
    px: 3,
    py: 4,
    opacity: 0.9,
};

export const RegionPaperSx = {
    p: 3,
    opacity: 0.9,
};

export const LinkPaperSx = {
    p: 1,
    '&:hover': {
        bgcolor: theme.palette.background.default,
        color: theme.palette.primary.main,
        transition: '0.3s'
    }
}

export const LinkStyle = {
    textDecoration: 'none'
}

export const UnsplashAnchorStyle = {
    color: 'white',
}

export const UnsplashSourceSx = {
    position: 'absolute',
    margin: 0,
    top: 'auto',
    right: 10,
    bottom: 10,
    left: 'auto',
}