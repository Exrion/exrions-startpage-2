export default interface AccordionProps {
    AccordianItems: AccordionType[]
}

export type AccordionType = {
    title: string,
    content: string | React.ReactNode | React.ReactNode[]
}