import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import LogInForm from './components/LogInForm';

export default class App extends Component {

  state = {
    loggedInUser: null,
    logInClicked: false
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLoginSubmit = async (loginParams) => {
    console.log(loginParams)
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

  showLoginForm = () => {
    this.setState(prevState => ({
      logInClicked: !prevState.logInClicked
    }))
  }

  render() {

    return (
      <div>
        <Header
          showLogInForm={this.showLoginForm}
        />
        <LogInForm
          handleLoginSubmit={this.handleLoginSubmit}
          logInClicked={this.state.logInClicked}
          showLogInForm={this.showLoginForm}
        />
        <Main />
        <Footer />
      </div>
    )
  }
}
