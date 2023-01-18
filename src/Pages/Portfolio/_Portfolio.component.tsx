import { Link } from "react-router-dom";
import { defaultRoute } from "../../Data/Constants/Routes";

export default function PortfolioLayout() {
    return (
        <>
        portfolio
        <Link to={defaultRoute}>startpage</Link>
        </>
    );
}