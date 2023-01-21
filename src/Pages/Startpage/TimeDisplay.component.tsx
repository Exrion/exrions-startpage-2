import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import moment from "moment";
import { useEffect, useState } from "react";
import { developerName } from '../../Data/Constants/MainConstants'

export default function TimeDisplay() {
    const [greetingText, setGreetingText] = useState('Upadting...');
    const [dateText, setDateText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const timeOfDay = () => {
                let hour = parseInt(moment().format('H'));
                if (hour <= 12) {
                    return 'Morning';
                }
                else if (hour >= 13 && hour <= 17) {
                    return 'Afternoon';
                }
                else if (hour >= 18 && hour <= 23) {
                    return 'Evening'
                }
            }

            setDateText(moment().format(`dddd, Do MMMM YYYY[ — ]hh[:]mm[:]ssA`))
            setGreetingText(`Good ${timeOfDay()}, ${developerName}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Stack
                direction='row'
                justifyContent='space-between'
                spacing={1}
            >
                {/* Date */}
                <Typography variant='h4' textAlign='left'>
                    {greetingText}
                </Typography>

                {/* Time */}
                <Typography variant='h4' textAlign='right'>
                    {dateText}
                </Typography>
            </Stack>
        </>
    );
}