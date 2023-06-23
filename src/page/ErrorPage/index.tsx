/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector } from '../../hook'
import * as Styled from './Style'

const ErrorPage = () => {
    const userName = useAppSelector((state => state.repo.userName))
    return (
        <Styled.PageStyle>
            <Styled.Text404>404 </Styled.Text404>
            <Styled.TextBox>
                <Styled.TextNotFound>can't not found</Styled.TextNotFound>
                <Styled.TextUserName>{userName}</Styled.TextUserName>
            </Styled.TextBox>
            <Styled.ButtonLink to={'/'}>home</Styled.ButtonLink>
        </Styled.PageStyle>
    )
}

export default ErrorPage