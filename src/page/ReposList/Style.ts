import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ListStyle = styled.div`
  width: 100%;
  min-height: 74vh;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 80px auto;
`

export const ItemStyle = styled(Link)`
  text-decoration: none;
  color: '#333333';
`
export const LoadingImgStyle = styled.img`
  width: 30px;
`
export const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`