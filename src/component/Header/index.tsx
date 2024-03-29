import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './Style'
type Type = {
    userName: String | undefined,
    homePath: string,
}

export const Header = ({ userName, homePath }: Type) => {

    return (
        <Fragment>
            {userName !== '' && <Link to={homePath}>
                <Styled.Header >
                    <Styled.UserName >{userName}</Styled.UserName>
                </Styled.Header >
            </Link>}
        </Fragment>
    );
}