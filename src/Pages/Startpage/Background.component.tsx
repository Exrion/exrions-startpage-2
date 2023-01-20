import axios from "axios";
import { useMemo, useState } from "react";
import BackgroundImageSkeleton from "../../Components/Skeletons/BackgroundImageSkeleton.component";

export default function BackgroundComponent({ children }: { children: React.ReactNode | React.ReactNode[]; }) {
    const [bgLoad, setBgLoad] = useState(false);

    const getBgImg = () => {
        const unsplashURL = 'https://api.unsplash.com';
        const orientation = 'landscape';
        const collectionId = '11649432';
        let imgUrl: string = 'https://images.unsplash.com/photo-1545350089-47b3d117a92c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjI1MTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQxMjI2MDI&ixlib=rb-4.0.3&q=80';

        const apiUrl = `${unsplashURL}/photos/random`;
        let apiConfig = {};

        // ENV
        if (process.env.NODE_ENV !== 'development') {
            apiConfig = {
                headers: {
                    'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
                    'Accept-Version': 'v1'
                },
                params: {
                    'collections': collectionId,
                    'orientation': orientation
                }
            }
        }

        axios.get(
            apiUrl,
            apiConfig
        ).then(res => {
            // ENV
            if (process.env.NODE_ENV !== 'development') imgUrl = res.data['urls']['full'];
        })
            .catch(e => {
                console.log(e);
                setBgLoad(false);
            })
            .finally(() => {
                document.body.style.background = `url(${imgUrl}) no-repeat center center fixed`;
                document.body.style.backgroundColor = '#161616';
                document.body.style.position = 'absolute';
                document.body.style.backgroundSize = 'cover';
                document.body.style.top = '0';
                document.body.style.left = '0';
                document.body.style.width = '100';
                document.body.style.height = '100';
                setBgLoad(true);
            });
    };

    useMemo(() => {
        // Load Background Image
        getBgImg();
    }, [])

    return (
        <>
            {
                bgLoad ? children : <BackgroundImageSkeleton />
            }
        </>
    );

}