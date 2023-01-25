export interface ResponseBundle {
    errorCode: number,
    errorText?: string
}

export async function HttpGet(
    path: string
) {
    let res = await fetch(path);

    if (res.status === 200) {
        let data: any = await res.json();
        return data;
    } else {
        return res.status;
    }
}

export async function HttpPost(
    path: string,
    options?: {}
) {
    let res = await fetch(
        path,
        options
    )

    if (res.status === 200) {
        let data: any = await res.json();
        return data;
    } else {
        return res.status;
    }
}