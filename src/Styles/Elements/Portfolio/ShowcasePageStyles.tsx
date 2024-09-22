export const RootStackSx = {
    py: { md: 3, sm: 2, xs: 1 },
    maxWidth: 0.9,
    width: 0.9
}

export const RootGridSx = {
    
}

export const ItemBoxSx= {
    minWidth: '75vw',
    minHeight: '120vh',
    transition: '0.2s',
    transitionTimingFunction: 'ease-in-out'
}

export const ItemRootBoxSx = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'black',
    '& > *': {
        px: {md: 3, sm: 2, xs: 1},
        py: {md: 2, sm: 2, xs: 1},
    }
}