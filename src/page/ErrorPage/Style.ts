import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageStyle = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 35vh auto;
`
export const TextBox = styled.p`
display: flex;
align-items: center;
`
export const Text404 = styled.p`
  font-weight: 600;
  font-size: 32px;
  margin: 0px 10px;
`
export const TextNotFound = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0px 10px;
`
export const TextUserName = styled.p`
  font-weight: 600;
  font-size: 20px;
  color:  #00b33c;
`

export const ButtonLink = styled(Link)`
  border-radius: 30px;
  padding: 12px 16px;
  background-color: #00b33c;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  width: 80px;
  text-align: center;
  border: none;
  text-decoration: none;
`
