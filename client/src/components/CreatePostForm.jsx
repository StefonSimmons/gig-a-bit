import React, { Component } from 'react'

export default class CreatePostForm extends Component {

  state = {
    media_link: '',
    bullet_one: '',
    bullet_two: '',
    bullet_three: ''
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { media_link, bullet_one, bullet_two, bullet_three } = this.state;
    const { postFood, history } = this.props;
    return (
      <>
        <form onSubmit={(e) => {
          e.preventDefault();
          postFood(this.state);
          history.push('/foods');
          this.setState({
            name: ""
          })
        }}>
          <hr />
          <h3>Create Food</h3>
          <label htmlFor="name">Name:</label>
          <input
            id="id"
            type="text"
            name=""
            // value={name}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </>
    )
  }
}
