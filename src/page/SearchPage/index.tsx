/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../hook'
import * as Styled from './Style'
import { resetData } from '../../slices/repoSlice'

export const SearchPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [userName, setUserName] = useState<string>('')

    const onSubmit = () => {
        navigate(`users/${userName}/repos`)
    }

    useEffect(() => {
        dispatch(resetData())
    }, [location])

    return (
        <Styled.SearchContent>
            <Styled.Title>GitHub Repository Web</Styled.Title>
            <Styled.Content>
                <Styled.Input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="username" />
                <Styled.Button onClick={onSubmit} >送出</Styled.Button>
            </Styled.Content>
        </Styled.SearchContent>
    )
}