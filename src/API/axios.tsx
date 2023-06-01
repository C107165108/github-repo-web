import axios from 'axios';

const instance = axios.create({
    method: 'get',
    baseURL: 'https://api.github.com/',
    headers: { 'Accept': 'application/vnd.github.v3+json' }
})

export const req = async (url: string) => {
    return await instance.get(url)
        .then((res) => res)
        .catch((err) => Promise.reject(err))
}