import React from 'react'
import {PostCard} from '../PostCard/index'
import './styles.css'
export const Posts = ({posts}) => {
  return (
    < div className="posts" >
      {
        posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            id={post.id}
            cover={post.cover}
            body={post.body}
          />
        ))
      }
    </div>
  )
}

