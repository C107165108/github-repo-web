/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect } from "react"
import { Link ,useParams} from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hook'
import InfiniteScroll from "react-infinite-scroll-component"
import { RootState } from '../../slices'
import { getRepoCount, getRepo, storePage } from '../../slices/repoSlice'
import ReposItem from "../../component/ReposItem"
import * as Styled from './Style'

const ReposList = () => {
    const dispatch = useAppDispatch()
    const urlPath = useParams()
    const { userName } = urlPath
    const repos = useAppSelector((state: RootState) => state.repo.data)
    const page = useAppSelector((state: RootState) => state.repo.page)
    const repoCount = useAppSelector((state: RootState) => state.repo.repoCount)

    useEffect(() => {
        dispatch(getRepoCount({ userName: userName }))
        dispatch(getRepo({ userName: userName, perpage: 10, page: 1 }))
        dispatch(storePage({ page: 1 }))
    }, [])

    const getMoreData = () => {
        if (page * 10 < repoCount) {
            setTimeout(() => {
                dispatch(getRepo({ userName: userName, perpage: 10, page: page + 1 }))
                dispatch(storePage({ perpage: 10, page: page + 1 }))
            }, 1500)
        }
    }

    return (
        <Styled.ListStyle id="scrollableDiv">
            <InfiniteScroll
                dataLength={page * 10}
                next={getMoreData}
                hasMore={true}
                loader={page * 10 < repoCount
                    ? <Styled.LoadingStyle>
                        <Styled.LoadingImgStyle src='https://cdn-icons-png.flaticon.com/512/6356/6356630.png' alt='loading' />
                    </Styled.LoadingStyle>
                    : ''}
                scrollableTarget="scrollableDiv"
            >
                {repos.map((repo) =>
                    <Link
                        key={repo.id}
                        to={`${repo.name}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <ReposItem key={repo.id} repo={repo} />
                    </Link>
                )}
            </InfiniteScroll>
        </Styled.ListStyle >
    )
}

export default ReposList