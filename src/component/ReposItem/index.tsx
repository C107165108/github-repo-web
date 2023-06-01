import * as Styled from './Style'

type repo = {
    repo: {
        name: string,
        stargazers_count: number,
    }
}
export default function ReposItem({ repo }: repo) {

    return (
        <Styled.ItemContent >
            <Styled.Itemtitle >{repo.name}</Styled.Itemtitle>
            <Styled.ItemStarContent >
                <Styled.ItemStarImg src='https://cdn-icons-png.flaticon.com/512/2107/2107957.png' alt='star' />
                <Styled.ItemStar> {repo.stargazers_count}</Styled.ItemStar>
            </Styled.ItemStarContent>
        </Styled.ItemContent>
    );
}