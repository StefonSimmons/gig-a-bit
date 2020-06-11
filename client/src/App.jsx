import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import {loginUser, registerUser, removeToken, verifyUser} from './services/auth'

export default class App extends Component {

  state = {
    loggedInUser: null
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLoginSubmit = async (loginParams) => {
    const loggedInUser = await loginUser(loginParams);
    this.setState({ loggedInUser});
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



  render() {

    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
