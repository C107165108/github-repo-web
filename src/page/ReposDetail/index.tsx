/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useParams, useLocation } from 'react-router-dom'
import { getRepoDetail, resetData } from '../../slices/repoSlice'
import { useAppSelector, useAppDispatch } from '../../hook'
import * as Styled from './Style'

export default function ReposDetail() {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const urlPath = useParams()
    const { userName, repoName } = urlPath
    const detailRepo = useAppSelector((state) => state.repo.detail)
    const isLoading = useAppSelector((state) => state.repo.detailLoading)

    useEffect(() => {
        dispatch(getRepoDetail({ userName: userName, repoName: repoName }))
    }, [])

    useEffect(() => {
        dispatch(resetData())
    }, [location])

    const { full_name, visibility, description, stargazers_count, html_url, language } = detailRepo

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
                            {visibility && <Styled.Visibility> {visibility}</Styled.Visibility>}
                            {language && <Styled.Language > {language}</Styled.Language>}
                        </Styled.TitleContent>
                        <Styled.TitleContent>
                            <Styled.ItemStarImg src='https://cdn-icons-png.flaticon.com/512/2107/2107957.png' alt='star' />
                            <Styled.P> {stargazers_count}</Styled.P>
                        </Styled.TitleContent>
                    </Styled.Box>

                    {description &&
                        <Styled.Content >
                            <Styled.P>{description}</Styled.P>
                        </Styled.Content>
                    }

                    <Styled.A href={html_url} target="_blank" rel="noreferrer" >查看</Styled.A>
                </Styled.Detail >
            )}
        </>
    )
}