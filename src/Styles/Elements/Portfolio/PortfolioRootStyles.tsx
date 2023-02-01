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
    color: 'text.primary',
    textDecoration: 'none',
    '&:hover': {
        color: 'primary.main',
        transition: '0.3s'
    }
}