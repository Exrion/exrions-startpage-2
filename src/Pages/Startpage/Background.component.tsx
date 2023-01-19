import axios from "axios";
import { useMemo } from "react";

export default function BackgroundComponent({ children }: { children: React.ReactNode | React.ReactNode[]; }) {
    const getBgImg = () => {
        const unsplashURL = 'https://api.unsplash.com';
        const orientation = 'landscape';
        const collectionId = '11649432';

        const apiUrl = `${unsplashURL}/photos/random`;
        const apiConfig = {
            headers: {
                'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
                'Accept-Version': 'v1'
            },
            params: {
                'collections': collectionId,
                'orientation': orientation
            }
        }

        let imgUrl: any;
        axios.get(
            apiUrl,
            // apiConfig
        ).then(res => {
            imgUrl = res.data['urls']['full'];
        })
            .catch(e => {
                console.log(e);
            })
            .finally(() => {
                document.body.style.backgroundImage = `url(${imgUrl}) no-repeat center fixed`;
            });
    };

    useMemo(() => {
        getBgImg();
    }, [])

    return (
        <>
            {children}
        </>
    );

}