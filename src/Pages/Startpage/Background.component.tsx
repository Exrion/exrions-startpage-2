import { Typography } from "@mui/material";
import { useMemo, useState } from "react";
import BackgroundImageSkeleton from "../../Components/Skeletons/BackgroundImageSkeleton.component";
import { UnsplashResponse } from "../../Interfaces/UnsplashResponse";
import { HttpGet } from "../../Utilities/HttpHelper";
import jsonSample from '../../Data/Constants/DevUnsplashResponse.json';
import { UnsplashAnchorStyle, UnsplashSourceSx } from "../../Styles/Elements/Startpage/StartpageRootStyles";

async function GetImage() {
    const baseURL = 'https://api.unsplash.com';
    const orientation = 'landscape';
    const collectionId = '11649432';

    const apiUrl = `${baseURL}/photos/random?collections=${collectionId}&orientation=${orientation}`;
    let apiConfig = {};

    // ENV
    if (process.env.NODE_ENV !== 'development') {
        apiConfig = {
            headers: {
                'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
                'Accept-Version': 'v1'
            }
        }
    }

    let res = HttpGet(apiUrl, apiConfig);

    return res;
}

export default function BackgroundComponent({ children }: { children: React.ReactNode | React.ReactNode[]; }) {
    const [bgLoad, setBgLoad] = useState(false);
    const [imgSource, setImgSource] = useState(jsonSample.links.html);
    const imgSourceStr = 'Unsplash';
    const [imgAuthor, setImgAuthor] = useState(jsonSample.user.links.html);
    const [imgAuthorStr, setImgAuthorStr] = useState(jsonSample.user.name);

    let utmAppName = 'exrions-startpage-2-dev';
    if (process.env.NODE_ENV !== 'development') utmAppName = 'exrions-startpage-2';
    const utmStr = `?utm_source=${utmAppName}&utm_medium=referral`;

    const setBackground = (imgUrl: string) => {
        const bgDiv = document.getElementById('bgDiv')!;

        // ENV
        if (process.env.NODE_ENV !== 'development') {
            bgDiv.style.background = `url(${imgUrl}) no-repeat center center fixed`;
        } else {
            bgDiv.style.background = `url(${imgUrl}) no-repeat center center fixed`;
        }

        bgDiv.style.backgroundColor = '#161616';
        bgDiv.style.position = 'absolute';
        bgDiv.style.backgroundSize = 'cover';
        bgDiv.style.top = '0';
        bgDiv.style.left = '0';
        bgDiv.style.width = '100';
        bgDiv.style.height = '100';
        bgDiv.style.boxSizing = 'inherit';
        setBgLoad(true);
    }

    const setSource = () => {
        return (
            <>
                <Typography color='white' sx={UnsplashSourceSx}>
                    Photo by <a href={`${imgAuthor}${utmStr}`} style={UnsplashAnchorStyle}>{imgAuthorStr}</a> on <a href={`${imgSource}${utmStr}`} style={UnsplashAnchorStyle}>{imgSourceStr}</a>
                </Typography>
            </>
        );
    }

    useMemo(() => {
        // Load Background Image
        GetImage().then((res: UnsplashResponse) => {
            if (process.env.NODE_ENV !== 'development') {
                setBackground(res.urls.full);
                setImgSource(res.links.html);
                setImgAuthor(res.user.links.html);
                setImgAuthorStr(res.user.name);
            } else {
                setBackground(jsonSample.urls.full);
            }
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <>
            {bgLoad ? children : <BackgroundImageSkeleton />}
            {bgLoad ? setSource() : <></>}
        </>
    );

}