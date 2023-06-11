import { Fragment } from 'react'
import * as Styled from './Style'

export const Footer = ({ userName }: { userName: String | undefined }) => {

    return (
        <Fragment>
            {userName !== '' && window.location.pathname !== '/' &&
                <Styled.FooterContent>
                    <Styled.FooterTitle >gitHub repository user / {userName}</Styled.FooterTitle>
                </Styled.FooterContent>
            }
        </Fragment>
    )
}