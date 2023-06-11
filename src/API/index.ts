import { req } from './axios';

export type FetchUserType = {
    userName: string | undefined,
}
export type FetchDetailType = {
    userName: string | undefined,
    repoName: string | undefined,
}

export type FetchDataType = {
    userName: string | undefined,
    perpage: number | undefined,
    page: number | undefined,
}

export const fetchUser = ({
    userName
}: FetchUserType) => {
    const url = `users/${userName}`
    return req(url)
}
export const fetchData = ({
    userName,
    perpage,
    page,
}: FetchDataType) => {
    const url = `users/${userName}/repos?per_page=${perpage}&page=${page}`
    return req(url)
}

export const fetchDetail = ({
    userName,
    repoName,
}: FetchDetailType) => {
    const url = `repos/${userName}/${repoName}`
    return req(url)
}

export const fetchDetailBranches = ({
    userName,
    repoName,
}: FetchDetailType) => {
    const url = `repos/${userName}/${repoName}/branches`
    return req(url)
}
