import { Box } from "@mui/material";

export default function CenterElement({ children }: { children: React.ReactNode | React.ReactNode[]; }) {
    return (
        <>
            <Box
                display='flex'
                flexDirection='column'
                overflow='auto'
                height={1}
                width={1}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='inherit'
                    width='inherit'
                >
                    {/* Main Content */}
                    {children}
                </Box>
            </Box>
        </>
    );
}