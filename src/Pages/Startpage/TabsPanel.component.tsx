import { Box, Typography } from "@mui/material";
import TabPanelProps from '../../Interfaces/TabPanelProps';
import TabSelectorProps from '../../Interfaces/TabSelectorProps';

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function TabsPanel(props: TabSelectorProps) {
    const { active, setActive } = props;

    return (
        <>
            <TabPanel value={active} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={active} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={active} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={active} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={active} index={4}>
                Item Five
            </TabPanel>
        </>
    );
}