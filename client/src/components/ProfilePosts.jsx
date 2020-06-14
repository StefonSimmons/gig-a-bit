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
  margin: 0 15px 15px 15px;
  width: 306px;
  border: rgb(216,224,233) solid 2px;
  border-radius: 5px;
  font-family: 'Pathway Gothic One', sans-serif; 
`
const Image = styled.img`
  width: 300px;
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
export default function ProfilePosts({ loggedInUser, posts, createNewPost, topics, showUpdatePostForm, editBtnClicked, editPostID, updatePost, deletePost }) {




  const allPosts = posts.map((post, id) => {
    if (loggedInUser !== null && post.user_id === loggedInUser.id) {
      return (
        editPostID === post.id ?
          <div style={editBtnClicked ? { display: "block" } : { display: "none" }}>
            <UpdatePostForm
              loggedInUser={loggedInUser}
              topics={topics}
              post={post}
              updatePost={updatePost}
            />
          </div>
          :
          <PostContainer key={id} style={editBtnClicked && editPostID === post.id ? { display: "none" } : { display: "block" }}>
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
      )
    }
  })

  // IF clicked editPostID === post.id then render the UpdatePostForm component in its place
  return (
    <>
      {/* <div style={editBtnClicked ? { display: "block" } : { display: "none" }}>
        <UpdatePostForm
          loggedInUser={loggedInUser}
          topics={topics}
          />
      </div> */}
      <Main>
        <CreatePostForm
          loggedInUser={loggedInUser}
          createNewPost={createNewPost}
          topics={topics}
        />
        {allPosts}
      </Main>
    </>
  )
}
