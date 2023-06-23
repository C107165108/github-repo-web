import { useState } from "react"

const useGetMarkDown = (userName: string | undefined, repoName: string | undefined, branch: string | undefined) => {
    const [data, setData] = useState<string | undefined>('')
    if (userName && repoName && branch) {
        const url = `https://raw.githubusercontent.com/${userName}/${repoName}/${branch}/README.md`

        fetch(url)
            .then(res => res.text())
            .then(text => text !== '404: Not Found' ? setData(text) : setData(undefined))
            .catch(err => setData(undefined))
    }

    return data
}

export default useGetMarkDown