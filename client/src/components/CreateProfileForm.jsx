import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { TitleLogIn, Circle, Welcome, Input, Form } from './LogInForm'
import { Btn } from './Posts'


const CreateProfileModal = styled.div`
  margin: 15px auto;
  width: 350px;
  height: 550px;
  border: rgb(216,224,233) solid 2px;
  font-family: 'Pathway Gothic One', sans-serif; 
  text-align: center;
  background-color: rgb(245,247,249);
`

const JoinLnk = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 15px
  letter-spacing: 1.26px;
  color: white;
`


export default class CreateProfileForm extends Component {

  state = {
    primary_name: '',
    surname: '',
    email: '',
    password: '',
    user_type: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { user_type, primary_name, surname, email, password } = this.state;
    const { handleRegisterSubmit, history, createProfileClicked, hideCreateProfileForm} = this.props;

    return (
      <>
        <div className="w3-modal" style={createProfileClicked ? { display: "block" } : { display: "none" }}>
          <CreateProfileModal className="w3-modal-content w3-card-4 w3-animate-zoom">
          <span onClick={hideCreateProfileForm} className="w3-button w3-xlarge w3-hover-red w3-display-topright">&times;</span>
            <Form onSubmit={(e) => {
              e.preventDefault();
              handleRegisterSubmit(this.state);
              // history.push('/');
              // this.setState({
              //   username: "",
              //   email: "",
              //   password: ""
              // })
            }}>
              <Welcome>Create a Profile</Welcome>
              <Circle>
                <TitleLogIn>Gig-A-Bit</TitleLogIn>
              </Circle>
              <Input
                type="text"
                name="user_type"
                value={user_type}
                placeholder="usertype"
                onChange={this.handleChange}
              />
              <br />
              <Input
                type="text"
                name="primary_name"
                value={primary_name}
                placeholder="primary name"
                onChange={this.handleChange}
              />
              <br />
              <Input
                type="text"
                name="surname"
                value={surname}
                placeholder="surname"
                onChange={this.handleChange}
              />
              <br />
              <Input
                type="text"
                name="email"
                value={email}
                placeholder="email"
                onChange={this.handleChange}
              />
              <br />
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={this.handleChange}
              />
              <Btn><JoinLnk to="#">Join</JoinLnk></Btn>
            </Form>
          </CreateProfileModal>
        </div>
      </>
    )
  }
}
