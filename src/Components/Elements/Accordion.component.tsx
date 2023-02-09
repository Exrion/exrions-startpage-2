import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion as MuiAccordion, AccordionSummary, Box, AccordionDetails, Typography } from '@mui/material';
import React from 'react';
import AccordionProps from '../../Components/Elements/Interfaces/AccordionProps';

const AccordianSx = {
    ".Mui-expanded": {
        color: 'darksalmon',
        transition: 'all 0.1s ease-in-out'
    }
}

export default function Accordion(props: AccordionProps) {
    const { AccordianItems: AccordionItems } = props;
    let returnElement: React.ReactElement<any, any>[] = [];

    const GenAccordian = () => {
        for (let i = 0; i < AccordionItems.length; i++) {
            returnElement.push(
                <MuiAccordion
                    defaultExpanded={i === 0 ? true : false}
                    sx={AccordianSx}
                    disableGutters
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography
                            variant='h6'
                            fontWeight={600}
                        >
                            {AccordionItems[i].title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant='body1'
                        >
                            {AccordionItems[i].content}
                        </Typography>
                    </AccordionDetails>
                </MuiAccordion>
            );
        }
        return returnElement;
    }

    return (
        <>
            <Box
                sx={{ pt: { md: 2, sm: 2, xs: 1 } }}
            >
                {GenAccordian()}
            </Box>
        </>
    );
}