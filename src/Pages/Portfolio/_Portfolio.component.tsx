import { useEffect } from "react";
import PortfolioGrid from "./_PortfolioGrid.component";

export default function PortfolioLayout() {
    const DOCUMENT_TITLE = "Exrion's Portfolio";

    useEffect(() => {
        document.title = DOCUMENT_TITLE;
    }, [])

    return (
        <>
            <PortfolioGrid />
        </>
    );
}