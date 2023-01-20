import BackgroundComponent from "./Background.component";
import StartpageGrid from "./_StartpageGrid.component";

export default function StartpageLayout() {
    return (
        <>
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