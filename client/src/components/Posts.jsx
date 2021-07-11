import React from 'react'
import styled, { keyframes }from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`
const Post = styled.div`
  display: grid;
  align-items: end;
  margin: 15px;
  width: 304px;
  border: rgb(216,224,233) solid 2px;
  border-radius: 15px;
  font-family: 'Pathway Gothic One', sans-serif;
  background: rgb(245,247,249)

`
const Image = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 300px;
  height: 250px;
  padding-bottom: 10px
`
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const UserName = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
`
const Topic = styled.h4`
  text-align: center;
  font-size: 18px;
  margin-top: 4px;
  letter-spacing: 3px 
`
export const Btn = styled.button`
  margin: 20px 0;
  padding: 6px 12px;
  background-color: rgb(154, 78, 80);
  border-radius: 5px;
  border: 2px solid rgb(154, 78, 80)
`
const BtnLnk = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 15px
  letter-spacing: 1.26px;
  color: white;
`
const List = styled.div`
  margin: 20px
`
const Bullet = styled.li`
  font-size: 18px;
  list-style: none;
  padding: 10px 0;
`
// animation
const rotate = keyframes`
  0%{transform: rotate(360deg); box-shadow: 1px 1px 0px 0px rgb(154, 78, 80);}
  50%{transform: rotate(180deg); box-shadow: 1px 1px 4px 4px rgb(154, 78, 80);}
  100%{transform: rotate(0deg); box-shadow: 1px 1px 0px 0px rgb(154, 78, 80);}
`
const counterRotate = keyframes`
  0%{transform: rotate(0deg); box-shadow: 1px 1px 0px 0px rgb(80, 78, 154);}
  50%{transform: rotate(180deg); box-shadow: 1px 1px 2px 2px rgb(80, 78, 154);}
  100%{transform: rotate(360deg); box-shadow: 1px 1px 0px 0px rgb(80, 78, 154);}
`

const Loading = styled.div`
  margin: 200px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border: solid 1px black;
  border-radius: 90px;
  width: 100px;
  height: 100px;
  animation: ${rotate} 4s infinite
`
const InnerLoad = styled.div`
  border-left: solid 2px black;
  border-right: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  width: 80px;
  height: 80px;
  animation: ${counterRotate} 2s infinite
`
export default function Posts({ posts, noPostsMsg }) {

  const allPosts = posts.map((post, id) => {
    return (
      <React.Fragment key={id}>
        <Post>
          <Image src={post.media_link} alt={post.topic_name} />
          <UserContainer>
            <UserName>{`${post.primary_name} ${post.surname}`}</UserName>
            <Topic>{post.topic_name}</Topic>
            <Btn><BtnLnk href={`mailto:${post.email}`}>Email Me</BtnLnk></Btn>
          </UserContainer>
          <List>
            <Bullet>{`- ${post.bullet_one }`}</Bullet>
            <Bullet>{`- ${post.bullet_two}`}</Bullet>
            <Bullet>{`- ${post.bullet_three}`}</Bullet>
          </List>
        </Post>
      </React.Fragment>
    )
  })
  
  if (!posts.length) {
    return <Loading><InnerLoad>Loading...</InnerLoad></Loading>
  }

  return (
    <>
      <Main>
        {noPostsMsg}
        {allPosts}
      </Main>
    </>
  )
}
