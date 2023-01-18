import { Link } from "react-router-dom";
import { portfolioRoute } from "../../Data/Constants/Routes";

export default function StartpageLayout() {
    return (
        <>
        startpage
        <Link to={portfolioRoute}>portfolio</Link>
        </>
    );
}