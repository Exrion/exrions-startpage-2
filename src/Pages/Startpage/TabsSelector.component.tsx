import { Tab, Tabs, Typography } from "@mui/material";
import TabSelectorProps from '../../Interfaces/TabSelectorProps';
import { TabsSelectorSx } from "../../Styles/Elements/Startpage/StartpageRootStyles";

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`
    };
}

function LabelTypography(label: string) {
    return (
        <>
            <Typography noWrap fontFamily='Roboto' fontWeight={400}>{label}</Typography>
        </>
    );
}

export default function TabsSelector(props: TabSelectorProps) {
    const { active, setActive } = props;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActive(newValue);
    };

    return (
        <>
            <Tabs
                orientation='vertical'
                variant='standard'
                sx={TabsSelectorSx}
                value={active}
                onChange={handleChange}
            >
                <Tab label={LabelTypography('Favourites')} {...a11yProps(0)} />
                <Tab label={LabelTypography('Entertainment')} {...a11yProps(1)} />
                <Tab label={LabelTypography('Social')} {...a11yProps(2)} />
                <Tab label={LabelTypography('School')} {...a11yProps(3)} />
                <Tab label={LabelTypography('Development')} {...a11yProps(4)} />
            </Tabs>
        </>
    );
}