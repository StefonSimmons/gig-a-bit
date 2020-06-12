import React, { Component } from 'react'
import styled from 'styled-components'


const CreateFormContainer = styled.div`

`
const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;  
  height: 500px;
  width: 302px;
  margin: 0 15px 15px 15px;
  border: rgb(216,224,233) solid 2px;
  border-radius: 5px
`
const Create = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 15px; 
`
const CreateBtn = styled.button`
  padding: 4px 18px;
  margin-bottom: 5px;
  background-color: rgb(204, 160, 161);
  border-radius: 2px;
  border: 2px solid rgb(154, 78, 80)
`
const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;  
  font-family: 'Pathway Gothic One', sans-serif; 
`
const Label = styled.label` 
  margin-top: 15px; 
  text-align: center
`
const MediaInput = styled.input`
  margin: 10px 15px; 
  padding: 10px;
  height: 65px;
  font-family: 'Pathway Gothic One', sans-serif; 
  border-radius: 5px;
`
const ReadOnlyInput = styled.input`
  margin: 10px 15px; 
  padding: 10px;
  height: 45px;
  background-color: rgb(216,224,233);
  border: rgb(216,224,233) solid 1px;
  border-radius: 5px;
`
const Input = styled.input`
  margin: 10px 15px; 
  padding: 10px;
  height: 45px;
  border-radius: 5px; 
`
const Dropdown = styled.input`
  margin: 0 15px 10px 15px; 
  padding: 10px;
  height: 45px;
  border-radius: 5px; 
`

export default class CreatePostForm extends Component {

  state = {
    media_link: '',
    bullet_one: '',
    bullet_two: '',
    bullet_three: '',
    user_id: '',
    topic_id: ''
  }



  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    const { media_link, bullet_one, bullet_two, bullet_three} = this.state;
    const { createNewPost, history, loggedInUser } = this.props;
    const loggedIn = loggedInUser !== null ?
      <CreateFormContainer>
        <Create>
          <CreateBtn>Create</CreateBtn>
        </Create>
        <CreatePostContainer>
          <Form onSubmit={(e) => {
            e.preventDefault();
            createNewPost(this.state);
            // history.push('/foods');
            // this.setState({
            //   name: "" 
            // })
          }}>
            <MediaInput
              type="text"
              name="media_link"
              value={media_link}
              placeholder="Enter image, video, or audio link here"
              onChange={this.handleChange}
            />
            <ReadOnlyInput
              type="text"
              name="user_name"
              value={loggedInUser.user_id} readOnly
              placeholder={loggedInUser.primary_name.concat(' ').concat(loggedInUser.surname)}
            />
            <Label htmlFor="topic">Choose a Topic:</Label>
            <Dropdown
              id="topic"
              type="text"
              name="topic_id"
              value="add dropdown here" readOnly
            />
            <ReadOnlyInput
              type="text"
              name="email"
              value={loggedInUser.email} readOnly
              placeholder={loggedInUser.email}
            />
            <Input
              type="text"
              name="bullet_one"
              value={bullet_one}
              placeholder="Write a point about the Post"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="bullet_two"
              value={bullet_two}
              placeholder="Write a point about the Post"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="bullet_three"
              value={bullet_three}
              placeholder="Write a point about the Post"
              onChange={this.handleChange}
            />
          </Form>
        </CreatePostContainer>
      </CreateFormContainer>
      :
      "User Cant be found"
    return (
      <>
        {loggedIn}
      </>
    )
  }
}
{/* <React.Fragment key={id}>
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
</React.Fragment> */}