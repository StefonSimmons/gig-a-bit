import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'


const LogInModal = styled.div`
  margin: 15px auto;
  width: 306px;
  border: rgb(216,224,233) solid 2px;
  font-family: 'Pathway Gothic One', sans-serif; 
  text-align: center;
`


export default class LogInForm extends Component {

  state = {
    email: '',
    password: ''
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <>

        <LogInModal>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleLoginSubmit(this.state);
            // history.push('/');
            // this.setState({
            //   username: "",
            //   password: ""
            // })
          }}>
            <h3>Welcome Back</h3>
            <h4>Gig-A-Bit</h4>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              placeholder= 'email'
              onChange={this.handleChange}
            />

            <br />
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder= 'password'
              onChange={this.handleChange}
            />
            <br />
            <button>Log In</button>
          </form>
        </LogInModal>
      </>
    )
  }
}
