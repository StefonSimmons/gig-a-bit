import React from 'react'
import styled from 'styled-components'
import CreatePostForm from './CreatePostForm'
import UpdatePostForm from './UpdatePostForm'

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`
const PostContainer = styled.div`
`
const UpdateDeleteBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 15px; 
`
const Icon = styled.i`
  margin: 0 10px;
  color: rgb(154, 78, 80);
  cursor: pointer
`
const Post = styled.div`
  display: grid;
  align-items: start;
  margin: 0 15px 15px 15px;
  width: 304px;
  border: rgb(216,224,233) solid 2px;
  border-radius: 15px;
  font-family: 'Pathway Gothic One', sans-serif; 
  background: white;
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
  font-size: 18px;
`
const Topic = styled.h4`
  text-align: center;
  font-size: 15px;
  margin-top: 4px;
  letter-spacing: 1.5px 
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
  font-size: 15px;
  list-style: none;
  padding: 10px 0 
`
export default function ProfilePosts({ loggedInUser, posts, createNewPost, topics, showUpdatePostForm, editPostID, updatePost, deletePost, noPostsMsg }) {


  const allPosts = posts.map((post, id) => {
    return (loggedInUser !== null && post.user_id === loggedInUser.id) &&
      <React.Fragment key={id}>
        {
          editPostID === post.id ?
            <div style={editPostID === post.id ? { display: "block" } : { display: "none" }}>
              <UpdatePostForm
                loggedInUser={loggedInUser}
                topics={topics}
                post={post}
                updatePost={updatePost}
                showUpdatePostForm={showUpdatePostForm}
              />
            </div>
            :
            <PostContainer style={editPostID === post.id ? { display: "none" } : { display: "block" }}>
              <UpdateDeleteBtns>
                <Icon onClick={() => showUpdatePostForm(post.id)}><i className="material-icons w3-xxlarge">edit</i></Icon>
                <Icon onClick={() => deletePost(post.id)}><i className="material-icons w3-xxlarge">clear</i></Icon>
              </UpdateDeleteBtns>
              <Post>
                <Image src={post.media_link} alt={post.topic_name} />
                <UserContainer>
                  <UserName>{`${post.primary_name} ${post.surname}`}</UserName>
                  <Topic>{post.topic_name}</Topic>
                  <Btn><BtnLnk href={`mailto:${post.email}`}>Email Me</BtnLnk></Btn>
                </UserContainer>
                <List>
                  <Bullet>- {post.bullet_one}</Bullet>
                  <Bullet>- {post.bullet_two}</Bullet>
                  <Bullet>- {post.bullet_three}</Bullet>
                </List>
              </Post>
            </PostContainer>
        }
      </React.Fragment>
  })

  return (
    <>
      <Main>
        <CreatePostForm
          loggedInUser={loggedInUser}
          createNewPost={createNewPost}
          topics={topics}
        />
        {noPostsMsg}
        {allPosts}
      </Main>
    </>
  )
}
