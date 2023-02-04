import { Octokit } from "octokit";

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

export async function OctoGetRepos(
    perPage: number,
    page: number,
    accept: string = 'application/vnd.github+json'
) {
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_API_KEY
    });

    return await octokit.request(`GET /user/repos`, {
        headers: {
            accept: accept
        },
        per_page: perPage,
        page: page,
        type: 'owner'
    });
}