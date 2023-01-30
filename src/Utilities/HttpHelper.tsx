export interface ResponseBundle {
    errorCode: number,
    errorText?: string
}

export async function HttpGet(
    path: string,
    data?: {}
) {
    let res = await fetch(path, data);

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