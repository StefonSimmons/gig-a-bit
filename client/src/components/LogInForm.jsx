import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Btn } from './Posts'

const LogInModal = styled.div`
  margin: 15px auto;
  width: 450px;
  height: 400px;
  border: rgb(216,224,233) solid 2px;
  font-family: 'Pathway Gothic One', sans-serif; 
  text-align: center;
  background-color: rgb(245,247,249);
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  max-width: 600px
`
export const Welcome = styled.h3`
  margin-top: 5px;
  font-size: 28px;
  font-family: 'Pathway Gothic One', sans-serif;  
  color: rgb(61,77,92);
`
export const TitleLogIn = styled.h4`
  font-size: 18px;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-weight: 700;
  font-style: italic;
  color: rgb(154, 78, 80)
`
export const Circle = styled.div`
  border-radius: 50%;
  background-color: rgb(216,224,233);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
`
export const Input = styled.input`
  padding: 8px 10px;
  width: 250px;
  border: rgb(216,224,233) solid 2px;
  border-radius: 3px;
`
const LogInLnk = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 15px
  letter-spacing: 1.26px;
  color: white;
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
    const { handleLoginSubmit, logInClicked, hideLogInForm} = this.props;
    return (
      <>
        <div className="w3-modal" style={logInClicked ? { display: "block" } : { display: "none" }}>
          <LogInModal className="w3-modal-content w3-card-4 w3-animate-zoom">
          <span className="w3-button w3-xlarge w3-hover-red w3-display-topright" onClick={hideLogInForm}>&times;</span>
            <Form onSubmit={(e) => {
              e.preventDefault();
              handleLoginSubmit(this.state);
              hideLogInForm()
              this.setState({
                email: '',
                password: ''
              })
            }}>
              <Welcome>Welcome Back</Welcome>
              <Circle>
                <TitleLogIn>Gig-A-Bit</TitleLogIn>
              </Circle>
              <Input
                id="email"
                type="text"
                name="email"
                value={email}
                placeholder='email'
                onChange={this.handleChange}
              />

              <br />
              <Input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder='password'
                onChange={this.handleChange}
              />
              <br />
              <Btn><LogInLnk to="#">Log In</LogInLnk></Btn>
            </Form>
          </LogInModal>
        </div>
      </>
    )
  }
}


