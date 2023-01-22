import { Tab, Tabs } from "@mui/material";
import TabSelectorProps from '../../Interfaces/TabSelectorProps';

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`
    };
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
                value={active}
                onChange={handleChange}
            >
                <Tab label='Favourites' {...a11yProps(0)} />
                <Tab label='Entertainment' {...a11yProps(1)} />
                <Tab label='Social' {...a11yProps(2)} />
                <Tab label='School' {...a11yProps(3)} />
                <Tab label='Development' {...a11yProps(4)} />
            </Tabs>
        </>
    );
}