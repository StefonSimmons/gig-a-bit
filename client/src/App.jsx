import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import CreateProfileForm from './components/CreateProfileForm'
import LogInForm from './components/LogInForm';

export default class App extends Component {

  state = {
    loggedInUser: null,
    logInClicked: false,
    createProfileClicked: false,
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLoginSubmit = async (loginParams) => {
    console.log(loginParams.email)
    const loggedInUser = await loginUser(loginParams);
    this.setState({ loggedInUser });
  }

  handleRegisterSubmit = async (registerParams) => {
    const loggedInUser = await registerUser(registerParams);
    this.setState({ loggedInUser });
  }

  handleLogout = () => {
    this.setState({
      loggedInUser: null
    })
    localStorage.clear();
    removeToken();
  }

  handleVerify = async () => {
    const loggedInUser = await verifyUser();
    this.setState({ loggedInUser })
  }

  toggleLoginForm = () => {
    this.setState(prevState => ({
      logInClicked: !prevState.logInClicked
    }))
  }

  toggleCreateProfileForm = () => {
    this.setState(prevState => ({
      createProfileClicked: !prevState.createProfileClicked
    }))
  }

  render() {

    return (
      <div>
        <Header
          showLogInForm={this.toggleLoginForm}
          showCreateProfileForm={this.toggleCreateProfileForm}
          loggedInUser={this.state.loggedInUser}
          logout={this.handleLogout}
        />
        <CreateProfileForm
          handleRegisterSubmit={this.handleRegisterSubmit}
          createProfileClicked={this.state.createProfileClicked}
          hideCreateProfileForm={this.toggleCreateProfileForm}
        />
        <LogInForm
          handleLoginSubmit={this.handleLoginSubmit}
          logInClicked={this.state.logInClicked}
          hideLogInForm={this.toggleLoginForm}
        />
        <Main
          loggedInUser={this.state.loggedInUser}
        />
        <Footer />
      </div>
    )
  }
}
