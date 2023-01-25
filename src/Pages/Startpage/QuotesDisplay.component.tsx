import { Quotable } from "../../Interfaces/QuotableType";
import { useEffect, useMemo, useState } from "react";
import { HttpGet } from "../../Utilities/HttpHelper";
import Typography from "@mui/material/Typography";

async function getQuote() {
    const baseURL = 'https://api.quotable.io';
    const tags = [
        'famous-quotes',
    ];

    const apiUrl = `${baseURL}/random?${tags.entries}`;

    let res = HttpGet(apiUrl);

    return res;
}

export default function QuotesDisplay() {
    const [loaded, setLoaded] = useState(false);
    const [quoteData, setQuoteData] = useState<Quotable>();

    useMemo(() => {
        getQuote().then((res: Quotable) => {
            setQuoteData(res);
            console.log(quoteData)
        }).catch(e => {
            console.log(e);
        })
    }, []);

    useEffect(() => {
        setLoaded(true);
    }, [])


    if (loaded) {
        return (
            <>
                <Typography variant='body1'>{quoteData?.content}</Typography>
                <Typography variant='caption' color='gray'>{quoteData?.author}</Typography>
            </>
        );
    }
    else {
        return (
            <>
                Loading
            </>
        );
    }
}