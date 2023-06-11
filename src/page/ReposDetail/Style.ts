import styled from 'styled-components'

export const LoadingImg = styled.img`
  width: 30px;
`
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`
export const Detail = styled.div`
  width: 65vw;
  max-width: 1000px;
  height: 90vh;
  padding: 32px;
  margin: 80px auto 72px;
`
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 24px;
`
export const TitleContent = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-right: 16px;
`
export const Visibility = styled.p`
  border: #aaa 0.5px solid;
  border-radius: 20px;
  padding: 4px 12px;
  margin-right: 10px;
`
export const Language = styled.p`
  font-weight: 600;
  border-radius: 20px;
  padding: 4px 12px;
  background-color: #b3ccff;
  color: #003cb3;
`
export const StarContent = styled.div`
  display: flex;
  align-items: baseline;
`
export const P = styled.p`
  font-size: 16px;
  color: #595959;
  margin-left: 10px;
  width: 100%;
`
export const ItemStarImg = styled.img`
  width: 16px;
  height: 16px;
`
export const Description = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 24px;
  padding: 16px;
  width: 100%;
`
export const MarkDown = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  margin-bottom: 72px;
`
export const BtnContent = styled.div`
  margin-bottom: 24px;
`
export const A = styled.a`
  border-radius: 20px;
  padding: 8px 16px;
  background-color: #00b33c;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  width: 80px;
  text-align: center;
  margin: 4px;
  text-decoration: none;
`
export const BranchsSelect = styled.select`
  padding: 8px 20px;
  margin: 4px;
  border: #808080 1px solid;
  border-radius: 30px;
  margin-right: 10px;
  &:focus {
    outline: #00b33c 1px solid;
    }
`