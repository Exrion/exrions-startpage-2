import { useEffect } from "react";
import FabSwitcher from "../FabSwitcher.component";
import BackgroundComponent from "./Background.component";
import StartpageGrid from "./_StartpageGrid.component";

export default function StartpageLayout() {
    const DOCUMENT_TITLE = 'My Startpage';

    useEffect(() => {
      document.title = DOCUMENT_TITLE;
    }, [])

    return (
        <>
            <FabSwitcher location='startpage' />
            <div id="bgDiv" style={{
                width: '100%',
                height: '100%'
            }}>
                <BackgroundComponent>
                    <StartpageGrid />
                </BackgroundComponent>
            </div>
        </>
    );
}