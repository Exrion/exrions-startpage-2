import { Box, Typography } from "@mui/material";
import TabPanelProps from '../../Interfaces/TabPanelProps';
import TabSelectorProps from '../../Interfaces/TabSelectorProps';
import DevelopmentPanel from "./TabPanels/DevelopmentPanel";
import EntertainmentPanel from "./TabPanels/EntertainmentPanel";
import FavouritesPanel from "./TabPanels/FavouritesPanel";
import SchoolPanel from "./TabPanels/SchoolPanel";
import SocialPanel from "./TabPanels/SocialPanel";

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
    const { active } = props;

    return (
        <>
            <TabPanel value={active} index={0}>
                <FavouritesPanel />
            </TabPanel>
            <TabPanel value={active} index={1}>
                <EntertainmentPanel />
            </TabPanel>
            <TabPanel value={active} index={2}>
                <SocialPanel />
            </TabPanel>
            <TabPanel value={active} index={3}>
                <SchoolPanel />
            </TabPanel>
            <TabPanel value={active} index={4}>
                <DevelopmentPanel />
            </TabPanel>
        </>
    );
}