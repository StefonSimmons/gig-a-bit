import React from 'react'

export default function Posts({ posts }) {
  
  const allPosts = posts.map((post, id) => {
    return (
      <React.Fragment key={id}>
        <div>
          <img src={post.media_link} alt="se(no)" />
          <h3>{post.user_id}</h3>
          <h4>{post.topic_id}</h4>
          <button>email here</button>
          <ul>
            <li>{post.bullet_one}</li>
            <li>{post.bullet_two}</li>
            <li>{post.bullet_three}</li>
          </ul>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div>
      {allPosts}
    </div>
  )
}
