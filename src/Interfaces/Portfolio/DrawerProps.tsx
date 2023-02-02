export interface DrawerProps {
    handleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}