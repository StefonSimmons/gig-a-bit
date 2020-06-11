import React from 'react'
import styled from 'styled-components'

const PostSection = styled.div`
  margin: 15px;
  width: 306px;
  // padding: 20px;
  border: grey solid 3px;
`
const Image = styled.img`
  width: 300px;
`

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`

export default function Posts({ posts }) {

  // const allPosts = posts.map((post, id) => {
  //   return (
  //     <React.Fragment key={id}>
  //       <PostSection>
  //         <Image src={post.media_link} alt="se(no)" />
  //         <h3>{post.user_id}</h3>
  //         <h4>{post.topic_id}</h4>
  //         <button>email here</button>
  //         <ul>
  //           <li>{post.bullet_one}</li>
  //           <li>{post.bullet_two}</li>
  //           <li>{post.bullet_three}</li>
  //         </ul>
  //       </PostSection>
  //     </React.Fragment>

  // })

  const allPosts = posts.map((post, id) => {

    return (
      <React.Fragment key={id}>
        <PostSection>
          <Image src={post.media_link} alt={post.topic_name} />
          <h3>{`${post.primary_name} ${post.surname}`}</h3>
          <h4>{post.topic_name}</h4>
          <button><a href={`mailto:${post.email}`}>Email</a></button>
          <ul>
            <li>{post.bullet_one}</li>
            <li>{post.bullet_two}</li>
            <li>{post.bullet_three}</li>
          </ul>
        </PostSection>
      </React.Fragment>
    )
  })

  return (
    <>
      <Main>
        {console.log(posts)}
        {allPosts}
      </Main>
    </>
  )
}
