import React, { Component } from 'react'
import styled from 'styled-components'

const CreatePostSection = styled.form`
  dispay: flex;
  flex-direction: row
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
    const { media_link, bullet_one, bullet_two, bullet_three } = this.state;
    const { createNewPost, history, loggedInUser } = this.props;
    return (
      <>
        <div>
          <button>Create</button>
          <CreatePostSection Submit={(e) => {
            e.preventDefault();
            createNewPost(this.state);
            // history.push('/foods');
            // this.setState({
            //   name: ""
            // })
          }}>
            <input
              type="text"
              name="media_link"
              value={media_link}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="user_id"
              value={loggedInUser.email}
            />
            <input
              type="text"
              name="topic_id"
              value="add dropdown here"
            />
            <input
              type="text"
              name="bullet_one"
              value={bullet_one}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="bullet_two"
              value={bullet_two}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="bullet_three"
              value={bullet_three}
              onChange={this.handleChange}
            />
            
          </CreatePostSection>
        </div>
      </>
    )
  }
}
