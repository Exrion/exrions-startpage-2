export const RootStackSx = {
    py: { md: 3, sm: 2, xs: 1 },
    maxWidth: 0.9,
    width: 0.9
}

export const RootGridSx = {
    
}

// export const RootGridSpacing = {
//     md: 2,
//     sm: 1,
//     xs: 0
// }

// export const RootGridCols = {
//     md: 5,
//     sm: 4,
//     xs: 2
// }

export const ItemBoxSx= {
    bgcolor: '#BABABA',
    opacity: 0.6,
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