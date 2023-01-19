import axios from "axios";
import { useMemo } from "react";

export default function BackgroundComponent({ children }: { children: React.ReactNode | React.ReactNode[]; }) {
    const getBgImg = () => {
        const unsplashURL = 'https://api.unsplash.com';
        const orientation = 'landscape';
        const collectionId = '11649432';

        const apiUrl = `${unsplashURL}/photos/random?collections=${collectionId}&orientation=${orientation}`;
        const apiConfig = {
            headers: {
                'Authorization': process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
                'Accept-Version': 'v1'
            }
        }

        let img: any;
        axios.get(
            apiUrl,
            apiConfig
        ).then(res => {
            console.log(res);
            img = JSON.parse(res.data)['urls']['full'];
        })
            .catch(e => {
                console.log(e);
            })
            .finally(() => {
                document.body.style.backgroundImage = `url(${img}) no-repeat center center fixed`;
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