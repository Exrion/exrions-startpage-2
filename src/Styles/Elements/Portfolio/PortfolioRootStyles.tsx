export const RootBoxSx = {
    display: 'flex',
    py: { md: 6, sm: 3, xs: 0 }
}

export const RootStackSx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100vw',
    '&:after': {
        flexGrow: 1
    }
}

export const RootStackSpacing = {
    md: 2,
    sm: 2,
    xs: 2
}

export const LinkSx = {
    position: 'relative',
    color: 'text.primary',
    textDecoration: 'none',
    '&:hover': {
        color: 'primary.main',
        transition: 'all 0.3s ease-in-out'
    },
    '&:before': {
        content: "''",
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-2px',
        left: '50%',
        transform: 'translate(-50%,0%)',
        backgroundColor: 'primary.main',
        transformOrigin: 'center',
        visibility: 'hidden',
        transition: 'all 0.3s ease-in-out',
    },
    '&:hover:before': {
        visibility: 'visible',
        width: '100%',
    }
}

export const CloseButtonDrawerSx = {
    color: 'gray',
    position: 'absolute',
    margin: 0,
    top: 10,
    right: 10,
    bottom: 'auto',
    left: 'auto',
    zIndex: 'fab'
}