import './Styles.css';
import {  useCallback, useEffect, useState } from 'react';
import { Posts } from '../../Components/Posts/index'
import { loadPosts } from '../../ultils/load-posts';
import { Button } from '../../Components/Button'
import { TextInput } from '../../Components/TextInput';

 function Home() {

    const [posts, setPosts] = useState([]);
    const [allPosts, setAllposts] = useState([]);
    const [page,setPage ] = useState(0);
    const [postsPerPage,] = useState(2);
    const [searchValue, setSearchValue] = useState("");

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postsAndPhotos = await loadPosts();
        setPosts(postsAndPhotos.slice(page, postsPerPage))
        setAllposts(postsAndPhotos)
    }, [])
    useEffect(() => {
        handleLoadPosts(0, postsPerPage);

    }, [handleLoadPosts, postsPerPage])
   const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts)
        setPosts(posts);
        setPage(nextPage)
    }
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }
    
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
        return post.title.toLowerCase().includes(
            searchValue.toLowerCase()
        )
    }) : posts;
    return (
        <section className="container">
      <div className="search-container">
        {!!searchValue && (
          <h1>Search value: {searchValue}</h1>
        )}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}

      {filteredPosts.length === 0 && (
        <p>Não existem posts =(</p>
      )}

      <div className="button-container">
        {!searchValue && (
          <Button
            text="Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
     
    );
}

/* class Home2 extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
        searchValue: ' '

    };

    async componentDidMount() {
        await this.loadPosts()
    }
    loadPosts = async () => {
        const { page, postsPerPage } = this.state;
        const postsAndPhotos = await loadPosts();
        this.setState({
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos,
        })
    }

    loadMorePosts = () => {
        const {
            page,
            postsPerPage,
            allPosts,
            posts,
        } = this.state;

        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts)

        this.setState({ posts, page: nextPosts }) o erro era aqui
    }
    handleChange = (e) => {
        const { value } = e.target;

        this.setState({ searchValue: value })
    }

    render() {
        const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
        const noMorePost = page + postsPerPage >= allPosts.length;

        const filteredPosts = !!searchValue ? allPosts.filter(post => {
            return post.title.toLowerCase().includes(
                searchValue.toLowerCase()
            )
        }) : posts;
        return (
            < section className="container" >
                <div className="search-input">
                    {
                        !!searchValue && (
                            <h1>Search value:{searchValue}</h1>
                        )

                    }

                    <TextInput
                        searchValue={searchValue}
                        handleChange={this.handleChange}
                    />
                </div>
                {
                    filteredPosts.length > 0 && (
                        <Posts posts={filteredPosts} />
                    )
                }

                {
                    filteredPosts.length === 0 && (
                        <p>Não existem posts =(</p>
                    )
                }


                <div className="button-container">
                    {
                        !searchValue && (
                            <Button
                                text="Load More posts"
                                onClick={this.loadMorePosts}
                                disabled={noMorePost}

                            />
                        )
                    }
                </div>
            </section>
        );
    }
}
 */


//function Home() {
//
//}

export default Home;