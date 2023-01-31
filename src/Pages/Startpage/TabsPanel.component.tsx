import { Box, Fade, Typography } from "@mui/material";
import TabPanelProps from '../../Interfaces/Startpage/TabPanelProps';
import TabSelectorProps from '../../Interfaces/Startpage/TabSelectorProps';
import { TabsPanelSx } from "../../Styles/Elements/Startpage/StartpageRootStyles";
import DevelopmentPanel from "./TabPanels/DevelopmentPanel";
import EntertainmentPanel from "./TabPanels/EntertainmentPanel";
import FavouritesPanel from "./TabPanels/FavouritesPanel";
import SchoolPanel from "./TabPanels/SchoolPanel";
import SocialPanel from "./TabPanels/SocialPanel";

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Fade
            in={value === index}
            timeout={300}
        >
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={TabsPanelSx}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        </Fade>
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