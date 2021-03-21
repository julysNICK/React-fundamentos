import './Styles.css';
import { Component } from 'react';
import { Posts } from '../../Components/Posts/index'
import { loadPosts } from '../../ultils/load-posts';
import  {Button}from '../../Components/Button'
class Home extends Component {
    state = {
        posts: [],
        allPost: [],
        page: 0,
        postsPerPage: 10,
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
                posts
            }=this.state;

            const nextPage = page + postsPerPage;
            const nextPosts = allPost.slice(nextPage,nextPage + postsPerPage);
            posts.push(...nextPosts)

            this.setState({posts,  page: nextPosts})
    }
    render() {
        const { posts,page,postsPerPage,allPost } = this.state;
        const noMorePost = page + postsPerPage >= allPost.length;
        return (
            < section className="container" >
                <Posts posts={posts} />
                <div className="button-container">
                    <Button 
                    text="Load More posts"
                    onClick={this.loadMorePosts}
                    disabled={noMorePost}
                    
                    />
                </div>
            </section>
        );
    }
}



//function Home() {
//
//}

export default Home;