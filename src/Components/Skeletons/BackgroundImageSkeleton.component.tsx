import Skeleton from "@mui/material/Skeleton";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

export default function BackgroundImageSkeleton() {
    const { height, width } = useWindowDimensions();
    
    return (
        <>
            <Skeleton variant='rectangular' height={height} width={width} />
        </>
    );
}