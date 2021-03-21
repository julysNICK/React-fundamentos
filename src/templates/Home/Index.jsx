import './Styles.css';
import { Component } from 'react';
import { Posts } from '../../Components/Posts/index'
import { loadPosts } from '../../ultils/load-posts';
import { Button } from '../../Components/Button'
import { TextInput } from '../../Components/TextInput';
class Home extends Component {
    state = {
        posts: [],
        allPost: [],
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
            allPost: postsAndPhotos,
        })
    }

    loadMorePosts = () => {
        const {
            page,
            postsPerPage,
            allPost,
            posts,
        } = this.state;

        const nextPage = page + postsPerPage;
        const nextPosts = allPost.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts)

        this.setState({ posts, page: nextPosts })
    }
    handleChange = (e) => {
        const { value } = e.target;

        this.setState({ searchValue: value })
    }

    render() {
        const { posts, page, postsPerPage, allPost, searchValue } = this.state;
        const noMorePost = page + postsPerPage >= allPost.length;

        const filteredPosts = !!searchValue ? allPost.filter(post => {
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



//function Home() {
//
//}

export default Home;