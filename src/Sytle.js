import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const ListStyle = styled.div`
  width: '100%';
  height: '100vh';
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
`

export const ItemStyle = styled(Link)`
  text-decoration: none;
  color: '#333333';
`
export const LoadingImgStyle = styled.div`
  width: 20;
`
export const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
`