import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchPage } from "./page/SearchPage";
import { useAppSelector } from './hook'
import ReposList from "./page/ReposList";
import ReposDetail from "./page/ReposDetail";
import Header from "./component/Header";
import { Footer } from "./component/Footer";
export default function MainPage() {

    const userName = useAppSelector((state => state.repo.userName))
    // path
    const homePath = `users/:userName/repos`;
    const detailPath = `users/:userName/repos/:repoName`;

    return (
        <div>
            <Router >
                <Header userName={userName} homePath={homePath} />
                <Routes >
                    <Route path='/' element={<SearchPage />} />
                    <Route path={homePath} element={<ReposList />} />
                    <Route path={detailPath} element={<ReposDetail />} />
                </Routes>
                <Footer userName={userName} />
            </Router>
        </div>
    );
}