import React, { Component } from 'react'
import styled from 'styled-components'
import TopicOptions from './TopicOptions'


const UpdateFormContainer = styled.div`
`
const UpdatePostContainer = styled.div`
  display: flex;
  flex-direction: column;  
  height: 500px;
  width: 302px;
  margin: 0 15px 15px 15px;
  border: rgb(216,224,233) solid 2px;
  border-radius: 5px
`
const Update = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 15px; 
`
const UpdateBtn = styled.button`
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
const MediaInput = styled.textarea`
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
  color: grey;
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
const Dropdown = styled.select`
  margin: 0 15px 10px 15px; 
  padding: 10px;
  height: 45px;
  border-radius: 5px; 
`

export default class UpdatePostForm extends Component {

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
      [name]: value,
      user_id: this.props.loggedInUser.id
    })
  }


  render() {
    const { media_link, bullet_one, bullet_two, bullet_three } = this.state;
    const { updatePost, loggedInUser, topics } = this.props;
    const userPosts = loggedInUser !== null ?
      <UpdateFormContainer>
        <Update>
          <UpdateBtn onClick={(e) => {
            e.preventDefault();
            updatePost(this.state);
            // window.location.reload()
            this.setState({
              media_link: '',
              bullet_one: '',
              bullet_two: '',
              bullet_three: '',
              user_id: '',
              topic_id: ''
            })
          }}>Update</UpdateBtn>
        </Update>
        <UpdatePostContainer>
          <Form>
            <MediaInput
              type="text"
              name="media_link"
              value={media_link}
              placeholder="Enter image, video, or audio link here"
              onChange={this.handleChange}
            />
            <ReadOnlyInput
              type="text"
              name="user_id"
              value={loggedInUser.user_id} readOnly
              placeholder={loggedInUser.primary_name.concat(' ').concat(loggedInUser.surname)}
            />
            <Label htmlFor="topic">Choose a Topic:</Label>
            <Dropdown name="topic_id" id="topic" onChange={this.handleChange}>
              {topics.map(topic =>
                <TopicOptions
                  id={topic.id}
                  topic={topic}
                />
              )}
            </Dropdown>
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
        </UpdatePostContainer>
      </UpdateFormContainer>
      :
      "Loading..."


    return (
      <>
        {userPosts}
      </>
    )
  }
}
