import { useEffect } from "react";
import { Link } from "react-router-dom";
import { defaultRoute } from "../../Data/Constants/Routes";

export default function PortfolioLayout() {
    const DOCUMENT_TITLE = "Exrion's Portfolio";

    useEffect(() => {
      document.title = DOCUMENT_TITLE;
    }, [])

    return (
        <>
            portfolio
            <Link to={defaultRoute}>startpage</Link>
        </>
    );
}