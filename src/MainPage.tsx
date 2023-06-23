import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchPage } from "./page/SearchPage"
import ReposList from "./page/ReposList"
import ReposDetail from "./page/ReposDetail"
import ErrorPage from "./page/ErrorPage"

export default function MainPage() {
    // path
    const homePath = `users/:userName/repos`
    const detailPath = `users/:userName/repos/:repoName`
    const errorPath ='/404'

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<SearchPage />} />
                    <Route path={homePath} element={<ReposList />} />
                    <Route path={detailPath} element={<ReposDetail />} />
                    <Route path={errorPath} element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    )
}