/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../hook'
import * as Styled from './Style'
import { storeSearch, resetData } from '../../slices/repoSlice'

export const SearchPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [userName, setUserName] = useState<string>('')

    const onSubmit = () => {
        if (userName !== '') {
            dispatch(storeSearch(userName))
            navigate(`users/${userName}/repos`)
        }
    }

    const enterSubmit = (e: React.KeyboardEvent<object>) => {
        if (e.keyCode === 13) {
            onSubmit()
        }
    }

    useEffect(() => {
        dispatch(resetData())
    }, [location])

    return (
        <Styled.SearchContent>
            <Styled.Title>GitHub Repository Web</Styled.Title>
            <Styled.Content>
                <Styled.Input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="username" onKeyDown={(e) => enterSubmit(e)} />
                <Styled.Button onClick={onSubmit} >送出</Styled.Button>
            </Styled.Content>
        </Styled.SearchContent>
    )
}