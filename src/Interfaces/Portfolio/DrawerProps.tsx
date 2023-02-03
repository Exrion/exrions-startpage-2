export interface DrawerProps {
    handleDrawer: (open: boolean, active?: string) => (event: React.KeyboardEvent | React.MouseEvent) => void
    active: string
}