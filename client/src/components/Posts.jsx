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

export default function Posts({ userPosts }) {

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

  const posts = userPosts.posts 
  const allUserPosts = posts.map((post, id) => {

    return (
      <React.Fragment key={id}>
        <PostSection>
          <Image src={post.media_link} alt={post.media_link} />
          <h3>{``}</h3>
          <h4></h4>
          <button><a href={`mailto:`}>Email</a></button>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </PostSection>
      </React.Fragment>
    )
  })

  return (
    <>
      <Main>
        {console.log(userPosts)}
        {allUserPosts}
      </Main>
    </>
  )
}
