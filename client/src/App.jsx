import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import CreateProfileForm from './components/CreateProfileForm'
import LogInForm from './components/LogInForm'
import AboutModal from './components/AboutModal'
import ContactModal from './components/ContactModal'

class App extends Component {

  state = {
    loggedInUser: null,
    logInClicked: false,
    createProfileClicked: false,
    aboutClicked: false,
    contactClicked: false
  }

  componentDidMount() {
    this.handleVerify()

  }


  handleLoginSubmit = async (loginParams) => {
    console.log(loginParams.email)
    console.log(loginParams)
    const loggedInUser = await loginUser(loginParams);
    this.setState({ loggedInUser });
  }

  handleRegisterSubmit = async (registerParams) => {
    const loggedInUser = await registerUser(registerParams);
    this.setState({ loggedInUser });
  }

  handleVerify = async () => {
    const loggedInUser = await verifyUser();
    this.setState({ loggedInUser })
  }

  handleLogout = () => {
    this.setState({
      loggedInUser: null
    })
    localStorage.clear();
    removeToken();
    this.props.history.push('/')
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

  toggleAboutModal = () => {
    this.setState(prevState => ({
      aboutClicked: !prevState.aboutClicked
    }))
  }

  toggleContactModal = () => {
    this.setState(prevState => ({
      aboutClicked: !prevState.aboutClicked
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
        <AboutModal
          aboutClicked={this.state.aboutClicked}
          hideAboutModal={this.toggleAboutModal}
        />
        <ContactModal
          contactClicked={this.state.contactClicked}
          hideContactModal={this.toggleContactModal}
        />
        <Footer
          showAboutModal={this.toggleAboutModal}
          showContactModal={this.toggleContactModal}
        />
      </div>
    )
  }
}

export default withRouter(App)