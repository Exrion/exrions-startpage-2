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
                // Improve Mobile Responsiveness
                paddingY={{md: 0, sm: 0, xs: 5}}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='inherit'
                    width='inherit'
                    // Improve Mobile Responsiveness
                    paddingY={{md: 0, sm: 0, xs: 5}}
                >
                    {/* Main Content */}
                    {children}
                </Box>
            </Box>
        </>
    );
}