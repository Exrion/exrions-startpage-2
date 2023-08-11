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
    bgcolor: 'gray',
    color: 'red',
    // opacity: 0.1,
    minWidth: '33%',
    minHeight: '50%',
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