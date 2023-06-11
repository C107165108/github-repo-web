/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams, useLocation } from 'react-router-dom'
import { getRepoDetail, resetData, getRepoMainBranch } from '../../slices/repoSlice'
import { useAppSelector, useAppDispatch } from '../../hook'
import * as Styled from './Style'
import ReactMarkdown from 'react-markdown'
import useGetMarkDown from '../../hook/useGetMarkDown'
import rehypeRaw from 'rehype-raw'

export default function ReposDetail() {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const urlPath = useParams()
    const { userName, repoName } = urlPath
    const [mdBranch, serMdBranch] = useState<string | undefined>('')
    const detailRepo = useAppSelector((state) => state.repo.detail)
    const isLoading = useAppSelector((state) => state.repo.detailLoading)
    const detailBranchs = useAppSelector((state) => state.repo.branchs)
    const markDown = useGetMarkDown(userName, repoName, mdBranch)

    useEffect(() => {
        dispatch(getRepoDetail({ userName: userName, repoName: repoName }))
        dispatch(getRepoMainBranch({ userName: userName, repoName: repoName }))
    }, [])

    useEffect(() => {
        detailBranchs.length !== 0 && serMdBranch(detailBranchs[0]?.name)
    }, [detailBranchs])

    useEffect(() => {
        dispatch(resetData())
    }, [location])

    const { full_name, visibility, description, stargazers_count, html_url, language, homepage } = detailRepo

    return (
        <>
            {isLoading ? (
                <Styled.Loading >
                    <Styled.LoadingImg src='https://cdn-icons-png.flaticon.com/512/6356/6356630.png' alt='loading' />
                </Styled.Loading>

            ) : (
                <Styled.Detail>
                    <Styled.Box>
                        <Styled.TitleContent>
                            <Styled.Title>{full_name}</Styled.Title>
                            <Styled.TitleContent>
                                {visibility && <Styled.Visibility> {visibility}</Styled.Visibility>}
                                {language && <Styled.Language > {language}</Styled.Language>}
                            </Styled.TitleContent>
                        </Styled.TitleContent>
                        <Styled.StarContent>
                            <Styled.ItemStarImg src='https://cdn-icons-png.flaticon.com/512/2107/2107957.png' alt='star' />
                            <Styled.P> {stargazers_count}</Styled.P>
                        </Styled.StarContent>
                    </Styled.Box>

                    {description &&
                        <Styled.Description>
                            <Styled.P>{description}</Styled.P>
                        </Styled.Description>
                    }
                    <Styled.BtnContent>
                        {detailBranchs.length !== 0 && <Styled.BranchsSelect onChange={(e) => serMdBranch(e.target.value)}>
                            {detailBranchs.map(({ name }) => <option key={name}>{name}</option>)}
                        </Styled.BranchsSelect>}
                        <Styled.A href={`${html_url}/tree/${mdBranch}`} target="_blank" rel="noreferrer" >查看</Styled.A>
                        {homepage && <Styled.A href={homepage} target="_blank" rel="noreferrer" >🔗</Styled.A>}
                    </Styled.BtnContent>

                    {markDown &&
                        <Styled.MarkDown>
                            <ReactMarkdown
                                children={markDown}
                                rehypePlugins={[rehypeRaw]}
                                components={{ img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }}{...props} alt='' /> }} />
                        </Styled.MarkDown>
                    }
                </Styled.Detail >
            )}
        </>
    )
}